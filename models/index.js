// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category

Category.hasOne(Product, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
});


Product.belongsTo(Category, {
  foreignKey: 'category_id',
});


// A reader can have many books
Product.hasOne(ProductTag, {
  foreignKey: 'product_id',
});

ProductTag.belongsTo(Product, {
  foreignKey: 'product_id',
})

Tag.hasOne(ProductTag, {
  foreignKey: 'tag_id',
});

ProductTag.belongsTo(Tag, {
  foreignKey: 'tag_id',
});



module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};



// Product belongs to Category, as a category can have multiple products but a product can only belong to one category.

// Category has many Product models.

// Product belongs to many Tag models. Using the ProductTag through model, allow products to have multiple tags and tags to have many products.

// Tag belongs to many Product models.