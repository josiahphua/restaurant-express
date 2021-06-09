const router = require('express').Router()
const CuisineModel = require("../models/cuisine.model")
const RestaurantModel = require("../models/restaurant.model")

router.get("/", async(req, res) => {
    try{
        let cuisines = await CuisineModel.find()
        let restaurants = await RestaurantModel.find()
            .populate('cuisines', "-_id name")

        res.render('index', { restaurants, cuisines })
    }catch (e) {
        console.log(e)
        res.redirect("/")
    }

})


router.post("/create", async(req, res) => {

    try{
        let restaurant = new RestaurantModel(req.body)
        await restaurant.save()
        res.redirect("/")
    }catch(e){
        console.log(e)
        res.redirect("/")
    }
})


router.get('/show/:id', async (req, res) => {

    try {
        let restaurant = await RestaurantModel.findById(req.params.id).populate("cuisines", "-_id name")
        res.render('show', { restaurant })
    } catch (e) {
        console.log(e)
    }

})

router.get("/edit/:id", async(req, res) => {
    try{
        let cuisines = await CuisineModel.find()
        let restaurant = await RestaurantModel.findById(req.params.id).populate('cuisines', "-_id name")
        res.render("edit", { restaurant, cuisines })
    }catch(e){
        console.log(e)
        res.redirect("/")
    }
})

router.post("/edit/:id", async(req, res) => {
    try{
        let restaurant = await RestaurantModel.findByIdAndUpdate(req.params.id, {$push:{cuisines: req.body.cuisines}})
        res.redirect(`/edit/${req.params.id}`)
    }catch(e){
        res.redirect("/")
    }
})


router.put("/edit/:id", async (req, res)=> {
    try{
        let temp = {
            name: req.body.name,
            address: req.body.address,
            location: req.body.location,
            chef: req.body.chef,
            cuisines: req.body.cuisines
        }
        await RestaurantModel.findByIdAndUpdate(req.params.id, req.body)
        res.render("index")

    }catch(e){
        res.redirect("/?msg=error")
    }
})

router.delete('/delete/:id', async (req, res) => {

    try {
        let restaurant = await RestaurantModel.findByIdAndDelete(req.params.id)
        res.redirect("/")
    } catch (e) {
        console.log(e)
    }
})


module.exports = router