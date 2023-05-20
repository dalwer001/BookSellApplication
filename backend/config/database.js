const mongoose = require("mongoose");

// userNewUrlParser: true, userUnifiedTopology: true,
const connectDatabase = () => {
    mongoose.connect(process.env.DB_URI, {userNewUrlParser: true, userUnifiedTopology: true,useCreateIndex: true }).then((data) => {
        console.log(`Mongodb connected with server:${data.connection.host}`);
    })
    
}

module.exports = connectDatabase;
