const router = require("express").Router();
const {createUser,login,
    getUserByUserId,
    getUsers,
    updateUsers,
    deleteUser}= require('./user.controller');

 //call the middleware
 const {checkToken} =require('../../auth/token_validation')  

router.post('/',checkToken,createUser);
router.get("/",  getUsers);

router.get("/:id", checkToken,getUserByUserId);
router.post("/login", login);
router.patch("/", checkToken,updateUsers);
router.delete("/", checkToken, deleteUser);

module.exports=router;