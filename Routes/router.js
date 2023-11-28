const express=require('express')
const router=new express.Router()
const userController=require('../Controllers/userController')
const projectController=require('../Controllers/projectController')
const jwtMiddleWare = require('../Middlewares/jwtMiddleWare')
const multerConfig = require('../Middlewares/multerMiddleware')


// register API
router.post('/user/register',userController.register)
// login API
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
// delete project
router.delete('/project/remove/:id',jwtMiddleWare,projectController.deleteProjectController)
// edit user
router.put('/user/edit-user',jwtMiddleWare,multerConfig.single("profileImage"),userController.editUserController)
// export router
module.exports=router