import {ActionType} from './Types'


export const addToCart = (product, quantity) => ({
    type : ActionType.CART_ADD,
    payload : {
        product,
        quantity : quantity || 1
    }
});

export const updateCartQuantity = (product, quantity) => ({
    type : ActionType.CART_UPDATE,
    payload : {product, quantity}
});

export const removeFromCart = (product) => ({
    type : ActionType.CART_REMOVE,
    payload : product
});

export const clearCart = () => ({
    type : ActionType.CART_CLEAR
});