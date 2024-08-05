const express= require('express');
const router= express.Router();

const MenuItem = require('../models/MenuItem');  

 //Post method to add a MenuItem
router.post('/',async(req,res)=>{
    try {
      const data =req.body //Assuming the request body contains the menu data
  
    //Create a new menu document using a mongoose model
    const newMenu =new MenuItem(data);
  
    //Save the new menu to the database
    const response =await newMenu.save();
    console.log('data saved');
    res.status(200).json(response);
  }
      
    catch (err) { 
      console.log(err);
      res.status(500).json({error:'Internal server Error'});
      
    }
  })  
  
  //Get method to get menu
  router.get('/',async(req,res)=>{
    try{
      const data = await MenuItem.find();
      console.log('data fetched');
    res.status(200).json(data);
    }
    catch(err){
      console.log(err);
      res.status(500).json({error:'Internal server Error'});
      
    }
  })

  // Parameterized API call for menuItems based on taste
router.get('/menuItem/:taste', async (req, res) => {
  try {
    const taste = req.params.taste;
    if (taste === 'spicy' || taste === 'sweet') {
      const response = await MenuItem.find({ taste: taste });
      console.log('response fetched');
      res.status(200).json(response);
    } else {
      res.status(404).json({ error: 'Invalid taste type' });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

  module.exports =router;
