"use strict";
class Store {
    constructor() {
        this._products = [];
    }
    addProduct(product) {
        this._products.push(product);
    }
    removeProduct(product) {
        const index = this._products.indexOf(product);
        if (index > -1) {
            this._products.splice(index, 1);
        }
    }
    getProducts() {
        return this._products;
    }
}
const store = new Store();
store.addProduct({ name: "Laptop", price: 1000, category: "Electronics" });
store.addProduct({ name: "Shoes", price: 50, category: "Fashion" });
//# sourceMappingURL=genericInterface.js.map