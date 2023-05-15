const express = require("express");

//Initialize router object
const router = express();
const productsData = require("../data.json");
//Using Filter
router.get("/", (req, res) => {
  //   console.log(req, query);
  const { category, minprice } = req.query;
  //Applying filter here
  if (category && minprice) {
    const filteredData = productsData.filter((element) => {
      return element.category === category && element.price >= minprice;
    });
    res.json(filteredData);
  } else if (category) {
    const filteredData = productsData.filter((element) => {
      return element.category === category;
    });
    res.json(filteredData);
  } else if (minprice) {
    const filteredData = productsData.filter((element) => {
      return element.price >= minprice;
    });
    res.json(filteredData);
  } else res.json(productsData);
});
router.get("/", (req, res) => {
  //   console.log(req, query);
  const { price } = req.query;
  //Applying filter here
  if (price) {
    const filteredData = productsData.filter((element) => {
      return element.price === price;
    });
    res.json(filteredData);
  } else {
    res.json(productsData);
  }
});

router.get("/:productID", (req, res) => {
  console.log(req.params); //req.param is the value send by use in productID
  const { productID } = req.params;
  const product = productsData.find(
    (product) => product.id === Number(productID)
  );
  res.json(product ? product : "Index Not Found");
});
//res api all 6
router.post("/", (req, res) => {
  res.send("This api will create product in database");
});
//optional
router.put("/:productID", (req, res) => {
  res.send("This api will replace product in database");
});
router.patch("/:productID", (req, res) => {
  res.send("This api will update product in database");
});
router.delete("/:productID", (req, res) => {
  res.send("This api will delete product in database");
});

module.exports = router;
