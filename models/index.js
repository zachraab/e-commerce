// import models
const Product = require("./Product");
const Category = require("./Category");
const Tag = require("./Tag");
const ProductTag = require("./ProductTag");

// Products belongsTo Category
// sequelize syntax methods
Product.belongsTo(Category, {
  foreignKey: "category_id",
});

// Categories have many Products
Category.hasMany(Product);

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag);

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product);

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
