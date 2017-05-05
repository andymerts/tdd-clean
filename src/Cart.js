module.exports = class Cart {
    constructor() {
        this.items = [];
    }

    get totalPrice() {
        return this.items.reduce((prev, val) => prev + (val.item.price * val.quantity), 0);
    }

    addItem(item, quantity) {
        this.items.push({ item, quantity });
    }

    itemQuantities() {
        return this.items.map(val =>
            `${val.item.name} - x${val.quantity}`);
    }

    itemizedList() {
        return this.items.map(itemize);
    }

    onSaleItems() {
        return this.items.filter(val => val.item.onSale).map(itemize);
    }
}

function itemize(val) {
    return `${val.item.name} x${val.quantity} - $${(val.quantity * val.item.price).toLocaleString()}`;
}