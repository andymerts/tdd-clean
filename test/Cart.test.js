const Cart = require('../src/Cart.js');
const Item = require('../src/Item.js');
const expect = require('chai').expect;

describe('Cart', () => {
    it('when I begin shopping, then I expect my cart to be empty', () => {
        const cart = new Cart();

        expect(cart.items).to.deep.equal([]);
        expect(cart.totalPrice).to.equal(0);
    });

    it("when I add an item, then the item is included in the items in my cart", () => {
        const cart = new Cart();
        const expected = new Item("expensive item", 5000, false);

        cart.addItem(expected, 1);

        expect(cart.items).to.contain({ item: expected, quantity: 1 });
    });

    it("when I add an item, then I expect to see totalPrice reflect the sum of all the items in my cart, times the quantities of each item", () => {
        const cart = new Cart();
        cart.addItem(new Item("expensive item", 5000, false), 2);
        cart.addItem(new Item("cheap", 10, false), 3);
        expect(cart.totalPrice).to.equal(10030);
    });

    it("when I add more than one of an item, then I expect itemQuantities() to show the number of items I have added", () => {
        const cart = new Cart();
        cart.addItem(new Item("expensive", 4000, false), 2);
        expect(cart.itemQuantities()).to.deep.equal(["expensive - x2"]);
    });

    it("when I add items, then I expect itemizedList() to reflect the items I have added along with their price and quantity", () => {
        const cart = new Cart();
        cart.addItem(new Item("expensive", 4000, false), 2);
        cart.addItem(new Item("cheap", 10, false), 3);
        expect(cart.itemizedList()).to.deep.equal(["expensive x2 - $8,000", "cheap x3 - $30"]);
    });

    it("when I add more than one of an item, then I expect totalPrice to reflect both the item price and quantity", () => {
        const cart = new Cart();
        cart.addItem(new Item("expensive", 4000, false), 2);
        expect(cart.totalPrice).to.equal(8000);        
    });

    it("when I add items that are on sale, I expect onSaleItems() to include only the items on sale", () => {
        const cart = new Cart();
        cart.addItem(new Item("expensive", 4000, false), 2);
        cart.addItem(new Item("cheap", 10, false), 3);
        cart.addItem(new Item("sale", 500, true), 2);
        expect(cart.onSaleItems()).to.deep.equal(["sale x2 - $1,000"]);
    });
});