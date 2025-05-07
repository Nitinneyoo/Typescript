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
class Compressibletore extends Store {
    compress() {
        console.log("Compressing products...");
    }
}
class SearchableStore extends Store {
    find(name) {
        return this.getProducts().find(product => product.name === name);
    }
}
const searchableStore = new SearchableStore();
//# sourceMappingURL=genericInterface.js.map