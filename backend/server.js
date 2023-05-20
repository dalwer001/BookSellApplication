const app = require("./app");
const connectDatabase = require("./config/database");
const cloudinary = require("cloudinary");


// Handling Uncaught Exception
process.on("uncaughtException", (err) => {
    console.log(`Error:${err.message}`);
    console.log(`Uncaught exception`);
    process.exit(1);
})

//config
if (process.env.NODE_ENV !== "PRODUCTION") {
    require("dotenv").config({ path: "backend/config/config.env" });
}
//connecting to database
connectDatabase();
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

const server = app.listen(process.env.PORT, () => {
    console.log(`server is working on http://localhost:${process.env.PORT}`);
})

// Unhandled Promise Rejection
process.on("unhandledRejection", error => {
    console.log(`Error:${error.message}`);
    console.log(`promise rejection`);
    server.close(() => {
        process.exit(1);
    })
})