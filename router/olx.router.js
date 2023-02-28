const  {olxModel}=require('../model/olx.model');
const express = require('express');
const olxRoute = express.Router();

olxRoute.get('/BrowseClassifieds',async(req,res)=>{
    const olx= req.query
    try {
        const getolx= await olxModel.find(olx)
        res.send(getolx)
    } catch (error) {
        console.log(error);
        res.send({"massage":"something went wrong with get route"});
    }
});

olxRoute.post('/PostClassifieds',async(req,res)=>{
    const payload = req.body;
   try {
    const new_olx = new olxModel(payload);
    await new_olx.save();
    res.send("olx data added 201");
   } catch (error) {
    console.log(error);
    res.send({"massage":"something went wrong with olx data added"});
   }
});

olxRoute.delete('/BrowseClassifieds/:id',async(req,res)=>{
    const id = req.params.id
    
    try {
         await olxModel.findOneAndDelete({ _id: id })
        res.send("the delete has been done");
    } catch (error) {
        console.log(error);
        res.send({"massage":"something went wrong while deleting"});
    }
    
});







module.exports = {
    olxRoute
}


