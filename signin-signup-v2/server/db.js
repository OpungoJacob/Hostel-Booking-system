 const mongoose = require("mongoose");

module.exports = () => {
    const connectionParams ={
        useNewUrlParser: true,
        useUnifiedTopology: true,
    };
    try{
        mongoose.connect(process.env.DB, connectionParams);
        console.log("connected to DB successfully")
    }catch(error){
        console.log(error);
        console.log("Couldn't connect to DB!!")
    }
};