const express = require("express");
const PORT = 4000;
const homeRouter = require("./routes/home");
const productRouter = require("./routes/product");
const errorRouter = require("./routes/error.js");
const app = express();

// app.get("/", (req, res) => {
//   res.send("Welcome to Ecommerce API");
// });
// app.get("/api/products", (req, res) => {
//   res.json(productsData);
// });
// app.get("/api/products/:productID", (req, res) => {
//   console.log(req.params); //req.param is the value send by use in productID
//   const { productID } = req.params;
//   const product = productsData.find(
//     (product) => product.id === Number(productID)
//   );
//   res.json(product ? product : "Index Not Found");
// });
//link yje rouetes file
app.use(homeRouter);
app.use("/api/products", productRouter);
app.use(errorRouter);

app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});
