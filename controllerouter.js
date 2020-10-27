
const express = require("express");
const mongoose = require("mongoose");

// importing the file schemadata
const days = require('../express/schemadata')

// for the information in the data
exports.getinfo = (async(req,res)=>{
try{
    const day1 = await days.find()
    res.status(200).json(day1)

}catch(error){
    res.status(404).send('invalid',error)
}
});
// these is the search for the data
exports.getinformations = (async()=>{
    try{
        const day1 = await days.findById(req.params.id)
        res.status(200).json(day1)

    }catch(err){
        res.status(404).send('no such information' + err)
    }
})
// these is the posting of data to the main get
exports.postinfo = (async(req,res)=>{
    const info =new days({
        name: req.params.name,
        location :req.params.location,
        date :req.params.date,
        course :req.params.course

    })
    try{
        const day2 =await info.save()
        res.status(200).json(day2)

    }catch(err){
        res.status(404).send('fill in the right info' ,err)
    }

});


//deleting the main data which is the get
exports.deleteinfo = (async(req,res)=>{
    try{
       const day1 = await days.findByIdAndDelete(req.params.id, res.body)
        res.status(200).json(day1)
    }catch(err){
        res.status(200).send('successful deleted ', err)
    }
})