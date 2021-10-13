const mongoose = require("mongoose");

const connectDB = () => {
  mongoose.connect(
    "mongodb+srv://Rihab:rihab123@cluster0.n8w05.mongodb.net/restApiWorkshopJuly?retryWrites=true&w=majority",
    (error) => {
      try {
        console.log('connected to database..;');
      } catch (error) {
        console.log(error);
      }
    }
  );
};

module.exports = connectDB;
