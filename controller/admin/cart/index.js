const cartDb = require('../../../data-access/cartDb');
const cartItemDb = require('../../../data-access/cartItemDb');
const cartSchema = require('../../../validation/schema/cart');
const createValidation = require('../../../validation')(cartSchema.createSchema);
const updateValidation = require('../../../validation')(cartSchema.updateSchema);
const filterValidation = require('../../../validation')(cartSchema.filterValidationSchema);
const cartController = require('./cart');

// use-cases imports with dependency injection
const addCartUsecase = require('../../../use-case/cart/addCart')({
  cartDb,
  createValidation 
});
const findAllCartUsecase = require('../../../use-case/cart/findAllCart')({
  cartDb,
  filterValidation
});
const getCartCountUsecase = require('../../../use-case/cart/getCartCount')({
  cartDb,
  filterValidation
});
const softDeleteManyCartUsecase = require('../../../use-case/cart/softDeleteManyCart')({
  cartDb,
  cartItemDb
});
const bulkInsertCartUsecase = require('../../../use-case/cart/bulkInsertCart')({ cartDb });
const bulkUpdateCartUsecase = require('../../../use-case/cart/bulkUpdateCart')({ cartDb });
const deleteManyCartUsecase = require('../../../use-case/cart/deleteManyCart')({
  cartDb,
  cartItemDb
});
const softDeleteCartUsecase = require('../../../use-case/cart/softDeleteCart')({
  cartDb,
  cartItemDb
});
const partialUpdateCartUsecase = require('../../../use-case/cart/partialUpdateCart')({
  cartDb,
  updateValidation
});
const updateCartUsecase = require('../../../use-case/cart/updateCart')({
  cartDb,
  updateValidation 
});
const getCartUsecase = require('../../../use-case/cart/getCart')({
  cartDb,
  filterValidation
});
const deleteCartUsecase = require('../../../use-case/cart/deleteCart')({
  cartDb,
  cartItemDb
});

// controller methods mapping
const addCart = cartController.addCart(addCartUsecase);
const findAllCart = cartController.findAllCart(findAllCartUsecase);
const getCartCount = cartController.getCartCount(getCartCountUsecase);
const softDeleteManyCart = cartController.softDeleteManyCart(softDeleteManyCartUsecase);
const bulkInsertCart = cartController.bulkInsertCart(bulkInsertCartUsecase);
const bulkUpdateCart = cartController.bulkUpdateCart(bulkUpdateCartUsecase);
const deleteManyCart = cartController.deleteManyCart(deleteManyCartUsecase);
const softDeleteCart = cartController.softDeleteCart(softDeleteCartUsecase);
const partialUpdateCart = cartController.partialUpdateCart(partialUpdateCartUsecase);
const updateCart = cartController.updateCart(updateCartUsecase);
const getCartById = cartController.getCart(getCartUsecase);
const deleteCart = cartController.deleteCart(deleteCartUsecase);

module.exports = {
  addCart,
  findAllCart,
  getCartCount,
  softDeleteManyCart,
  bulkInsertCart,
  bulkUpdateCart,
  deleteManyCart,
  softDeleteCart,
  partialUpdateCart,
  updateCart,
  getCartById,
  deleteCart,
};