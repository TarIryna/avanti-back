const { Schema, model } = require("mongoose");
const Joi = require("joi");

const productSchema = new Schema(
  {
    code: {
      type: String,
      required: [true, "code is required"],
    },
    name: {
      type: String,
      required: [true, "name is required"],
    },
    category: {
      type: String,
      required: [true, "category is required"],
    },
    view: {
      type: String,
    },
    season: {
      type: String,
      required: [true, "season is required"],
    },
    description: {
      type: String,
    },
    quantity: {
      type: Number,
    },
    price: {
      type: Number,
      required: true,
    },
     price2: {
      type: Number,
    },
     sizes: {
      type: Array,
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

const productJoiSchema = Joi.object({
  code: Joi.string().required(),
  name: Joi.string().required(),
  category: Joi.string().required(),
  season: Joi.string().required(),
  view: Joi.string(),
  description: Joi.string().required(),
  sizes: Joi.array(),
  quantity: Joi.number(),
  price: Joi.number().required(),
  price2: Joi.number(),
});

const Product = model("Product", productSchema);

module.exports = {
  Product,
  productJoiSchema,
};
