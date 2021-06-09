const router = require('express').Router()
const CuisinesModel = require("../models/cuisine.model")

router.post("/create", async (req, res)=>{
    try{
        let cuisine = new CuisinesModel(req.body)
        await cuisine.save()
        res.redirect('/')

    }catch(e){

    }
})


module.exports = router