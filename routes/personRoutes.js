const express= require('express');
const router= express.Router();
const Person = require('./../models/person');  
const {jwtAuthMiddleware,generateToken}=require('./../jwt');


//Post route to add a person
router.post('/signup',async(req,res)=>{
    try {
      const data =req.body //Assuming the request body contains the person data
  
    //Create a new person document using a mongoose model
    const newPerson =new Person(data);
  
    //Save the new person to the database
    const response =await newPerson.save();
    console.log('data saved');

    const payload={
      id:response.id,
      username:response.username

    }
    console.log(JSON.stringify(payload));

    const token =generateToken(payload);
    console.log("Token is :", token);
    res.status(200).json({response: response,token: token});
  }
      
    catch (err) { 
      console.log(err);
      res.status(500).json({error:'Internal server Error'});
      
    }
  })  

  
//Get method to get person
router.get('/',async(req,res)=>{
    try{
      const data = await Person.find();
      console.log('data fetched');
    res.status(200).json(data);
    }
    catch(err){
      console.log(err);
      res.status(500).json({error:'Internal server Error'});
      
    }
  })

  //parameterized API call of person
router.get('/:workType',async(req,res)=>{
    try {
      const workType = req.params.workType;
      if (workType=='chef'|| workType=='waiter' || workType=='manager' ) {
        const response=await Person.find({work:workType});
        console.log('response fetched');
        res.status(200).json(response);
      }
      else{
        res.status(404).json({error:'Invalid workType'});
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({error:'Internal server error'});
    }
  })
  
  module.exports =router;
  