const express = require("express");
const dotenv = require("dotenv");
const { notFound, errorHandler } = require("./middleware/errorMiddlware");
const cors = require("cors"); // Import the 'cors' package

const connectDB = require("./config/db");
require("colors");
dotenv.config();

const productRoutes = require("./routes/productRoutes");
const userRoutes = require("./routes/userRoutes");
const orderRoutes = require("./routes/orderRoutes");

connectDB();

const app = express();

// Configure CORS to allow requests from your frontend origin
app.use(
  cors({
    origin: "https://e-commerce-api-mu-nine.vercel.app",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true, // Enable sending cookies and other credentials
    optionsSuccessStatus: 204, // Respond to preflight requests with 204 (No Content)
  })
);

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Api run");
});

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);

app.get("/api/config/paypal", (req, res) =>
  res.send(process.env.PAYPAL_CLIENT_ID)
);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `server is running on ${process.env.NODE_ENV} mode port ${PORT}`.yellow.bold
  )
);
