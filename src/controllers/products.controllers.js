const { Op } = require("sequelize");
const { Products } = require("../models");

const getAllProducts = async (req, res, next) => {
  try {
    // pedir todos los productos al modelo Products
    const products = await Products.findAll({
      where: {
        availableQty: {
          [Op.gt]: 0,
        },
      },
    });
    res.json(products);
  } catch (error) {
    next(error);
  }
};

const createProducts = async (req, res, next) => {
  try {
    const { name, availableQty, userId, productImage } = req.body;
   
    Products.create({ name, availableQty, userId, productImage });
  
    res.status(201).end();    
  } catch (error) {
    next(error);
  }
};

const UpdateDescriptionPriceToProduct = async(req, res, next) => {
  try {
    const {id} = req.params;
    const {description, price} = req.body

    await Products.update (
      {description, price},
      {
        where: { id },
      }
    )

    res.status(201).end();
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllProducts,
  createProducts,
  UpdateDescriptionPriceToProduct,
};
