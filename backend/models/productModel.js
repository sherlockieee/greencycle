mongoose = require("mongoose");
require("mongoose-type-url");

const productSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    rating: { type: Number, required: true },
    numReviews: { type: Number, required: true },
    availableStocks: { type: Number, required: true },
    image: { type: mongoose.SchemaTypes.Url, required: true },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);
