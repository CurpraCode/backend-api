const express = require("express");
const Item = require("./models/items");
const router = express.Router();

// Get the list of item
router.get("/", async (req, res, next) => {
  try {
    const items = await Item.find();

    res.send(items);
  } catch (error) {
    next(error);
  }
});

// Get a single item
router.get("/item/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const item = await Item.findOne({ _id: id });

    res.send(item);
  } catch (error) {
    next(error);
  }
});

// Post/Create a certain product
router.post("/item", async (req, res, next) => {
  try {
    const data = req.body;
    const item = await Item.create(data);

    res.send(item);
  } catch (error) {
    next(error);
  }
});

// Update a particular product
router.patch("/item/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = req.body;

    const item = await Item.findOneAndUpdate({ _id: id }, data, {
      new: true,
    });

    res.send(item);
  } catch (error) {
    next(error);
  }
});

// Delete a certain product
router.delete("/item/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = req.body;

    const item = await Item.findOneAndDelete({ _id: id }, data, {
      new: true,
    });

    res.send(item);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
