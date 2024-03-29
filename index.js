const express = require("express")
const application = express();
const bodyparser = require("body-parser")
const cors = require("cors");
const handleRoutes = require("./route")
const cookieparser = require("cookie-parser")
require('dotenv').config({ path: "./config.env" })
const PORT = 4000

// const corsOptions = {
//   origin: ["http://localhost:3000","http://localhost:8000"],
//   credentials: true, //access-control-allow-credentials:true
//   optionSuccessStatus: 200,
// };

// application.use(cors(corsOptions))
// application.use(cors({
//   origin: ["http://195.35.21.41:8000", "http://localhost:3000", "http://localhost:8000"],
//   credentials: true,
//   optionsSuccessStatus: 200
// }));


application.use(cors({
  origin:"http://greenencopvapm.com",
  credentials:true
}))
application.use(bodyparser.urlencoded({ extended: true }))
application.use(express.json())
application.use(cookieparser())
application.use(handleRoutes)



process.on("uncaughtException", err => {
  console.log("Server is closing due to uncaughtException occured!")
  console.log("Error :", err.message)
  server.close(() => {
    process.exit(1);
  })
})

const server = application.listen(8000 || PORT, () => {
  console.log("Server is running at port " + server.address().port);
});


process.on("unhandledRejection", err => {
  console.log("Server is closing due to unhandledRejection occured!")
  console.log("Error is:", err.message)
  server.close(() => {
    process.exit(1);
  })
})





