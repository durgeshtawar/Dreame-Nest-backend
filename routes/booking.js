const router = require('express').Router();

const Booking = require("../models/Booking")

//CReate Booking

router.post("/create", async (req, res)=>{
    try{
        const { customerId, hostId, listingId, startDate, endDate, totalPrice } = req.body
        const newBooking = new Booking({customerId, hostId, listingId, startDate, endDate, totalPrice})
        await newBooking.save()
        res.status(200).json(newBooking);

    } catch(err){
       res.status(400).json({message: "Fail to create a new Bookin!" , error:err.message});
    }
})

module.exports = router