const express=require('express')
const router=new express.Router()
const userController=require('../Controllers/userController')
const projectController=require('../Controllers/projectController')
const jwtMiddleWare = require('../Middlewares/jwtMiddleWare')
const multerConfig = require('../Middlewares/multerMiddleware')


// register API
router.post('/user/register',userController.register)
router.post('/user/login',userController.login)
// addprojects
router.post('/project/add',jwtMiddleWare,multerConfig.single('projectImage'),projectController.addProjects)
//getUserproject
router.get('/user/all-projects',jwtMiddleWare,projectController.allUserProjects) 
//getAllproject
router.get('/project/all',jwtMiddleWare,projectController.getallProjects) 
//getHomeproject
router.get('/project/home-projects',projectController.getHomeProjects) 
// edit project
router.put('/project/edit/:id',jwtMiddleWare,multerConfig.single("projectImage"),projectController.editProjectController)
// login API

// export router
module.exports=router