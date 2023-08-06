import { Router } from "express";
import { product } from "../models/index.js";
import { upload } from "../middleware/imageUpload.js";

export const productRouter = Router();
productRouter.get("/product", async (req, res) => {
  try {
    const products = await product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

productRouter.post("/product", upload.array("file"), async (req, res) => {
//   const productData = new product(req.body);
  try {
    // const newProduct = await productData.save();
    // res.status(201).json(newProduct);
    const imagesArray = req?.files?.map((img) => img?.location);

    const { data } = req.body;
    const productData = JSON.parse(data);
    productData.images = imagesArray;
    const newrProduct = await Web2Products.create(productData);
    res.status(201).json({
      status: true,
      message: "Product Added Successfully",
      data: newrProduct,
    });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});
