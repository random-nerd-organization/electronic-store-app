export default {
    addProductToCart: (state, product) => {
        const cart = state._Cart;
        const productId = product._id.toString();

        if (!cart.has(productId))
            cart.set(productId, 0);

        const currentProductCount = cart.get(productId);
        const nextProductCount = currentProductCount + 1;
        cart.set(productId, nextProductCount);

        console.log(cart);
    },

    removeProductFromCart: (state, productId) => {
        const cart = state._Cart;

        if (cart.has(productId))
            cart.delete(productId);

        console.log(cart);
    },

    decrementProductFromCart: (state, productId) => {
        const cart = state._Cart;
        const currentProductCount = cart.get(productId);

        if (
            cart.has(productId) &&
            currentProductCount > 0
        ) {
            const nextProductCount = currentProductCount - 1;
            cart.set(productId, nextProductCount);
        }

        console.log(cart);
    }
};