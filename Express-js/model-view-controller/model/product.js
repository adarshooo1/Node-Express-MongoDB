const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema({
  title: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  price: {
    type: Number,
    min: [1, "Wrong min price"],
    max: [9999999, "Wrong max price"],
  },
  discountPercentage: {
    type: Number,
    min: [1, "Wrong min discount"],
    max: [99, "Wrong max discount"],
  },
  discountPrice: { type: Number },
  rating: {
    type: Number,
    min: [0, "Wrong min rating"],
    max: [5, "Wrong max rating"],
    default: 0,
  },
  stock: { type: Number, min: [0, "Wrong min stock"], default: 0 },
  brand: { type: String, required: true },
  category: { type: String, required: true },
  thumbnail: { type: String, required: true },
  images: { type: [String], required: true },
});

exports.Product = mongoose.model("Product", productSchema);

/*
Note:
> with the help of => exports.Product = mongoose.model("Product", productSchema); => Product we are exporting, We can perform CRUD Operations with that.

                            ``````````
>   price: {
    type: Number,
    min: [1, "Wrong min price"],              These are called validators :- min , max , number
    max: [9999999, "Wrong max price"],
  },                              

*/
