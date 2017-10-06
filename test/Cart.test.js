const Cart = require('../src/Cart.js')

describe('Cart', () => {
    it('should initialize as empty', () => {
        const cart = new Cart()

        expect(cart.items).toEqual([])
        expect(cart.totalPrice).toEqual(0)
    })
})