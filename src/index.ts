import products from "./products.json";

class Product {
  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
    this.id = Math.floor(Math.random() * 1000);
  }
  id: number;
  name: string;
  price: number;
  static findProductsBelow(price: number): Product[] {
    const productsBelow: Product[] = [];
    for (const product of products) {
      if (product.price < price) {
        productsBelow.push(product);
      }
    }
    return productsBelow;
  }
}

class User {
  constructor(name: string) {
    this.name = name;
  }
  name: string;
  products: Product[] = [];
  addProduct(newProduct: Product) {
    this.products.push(newProduct);
  }
  addProducts(newProducts: Product[]) {
    for (const product of newProducts) {
      this.products.push(product);
    }
  }
}

export { User, Product };
