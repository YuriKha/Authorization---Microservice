const router=require('express').Router();

const {
    Authoriz,
}=require('../controller/authorization');

//------- endpoint for taking a cheaking  authorization -------
router.post('/cheakauthorization',Authoriz); // ---> POST --->  http://localhost:3006/authorization/cheakauthorization

//----- export ------
module.exports=router;