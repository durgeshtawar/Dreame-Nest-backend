const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();


const authRoutes = require("./routes/auth.js");
const listingRoutes = require("./routes/listing.js");
const BookingRoutes = require("./routes/booking.js")
const userRoutes = require("./routes/user.js");


const cors = require("cors");
app.use(cors({
  origin: `https://dream-nest-tqet.onrender.com`,
  credentials: true
}));
app.use(express.json());
app.use(express.static("public"));

//routes
app.use("/auth", authRoutes);
app.use("/properties", listingRoutes)
app.use("/bookings", BookingRoutes)
app.use("/users",userRoutes);


app.get("/", (req, res) => {
  res.send("Welcome to Dream Nest!");
});

//mongoose setup
app.get("/", (req,res)=>{
  res.send("Welcome to Dream Nest!")
});

const PORT = process.env.PORT || 3001;
mongoose
  .connect(process.env.MONGO_URL, {
    dbName: "Dream_Nest",
    
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server start at Port: ${PORT}`));
  })
  .catch((err) => console.log(`${err} Server did not connect`
   
  ));

