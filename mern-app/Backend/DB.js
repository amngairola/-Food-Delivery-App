const mongoose = require("mongoose");
const monogoURI = " mongodb+srv://goFood:1234qwer@cluster0.ghxykib.mongodb.net/?retryWrites=true&w=majority ";

const mongoDB = async () => {
  try {
    await mongoose.connect(monogoURI, { useNewUrlParser : true });
    console.log("connected successfully");
  } catch (err) {console.log("....", err);}
};

module.exports = mongoDB;
