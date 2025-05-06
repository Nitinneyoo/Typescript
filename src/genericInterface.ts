interface Product {
    name: string;
    price: number;
    category: string;
}

class Store<T> {
    private _products: T[] = [];

    addProduct(product: T): void {
        this._products.push(product);
    }

    removeProduct(product: T): void {
        const index = this._products.indexOf(product);
        if (index > -1) {
            this._products.splice(index, 1);
        }
    }

    getProducts(): T[] {
        return this._products;   
    }
}
const store = new Store<Product>();
store.addProduct({ name: "Laptop", price: 1000, category: "Electronics" });
store.addProduct({ name: "Shoes", price: 50, category: "Fashion" });


// pass on the generic type to the class


class Compressibletore<T> extends Store<T> {
    compress(): void {
        console.log("Compressing products...");
    }
}


// Restrict the generic type to a specific type


class SearchableStore<T extends {name : string}> extends Store<T> {
    find(name: string): T | undefined {
        return this.getProducts().find(product => product.name === name);
    }           
}

//fix the generic type parameter

const searchableStore = new SearchableStore<Product>();