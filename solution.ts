function formatValue(value: string | number | boolean): string | number | boolean {
  if (typeof value === "string") {
    return value.toUpperCase();
  }
  else if (typeof value === "number") {
    return value * 10;
  }
  else {
    return !value;
  }
}

function getLength(value: string | any[]): number {
    if (typeof value === "string") {
        return value.length;
    } 
    else if (Array.isArray(value)) {
        return value.length;
    } 
    else {
        return 0;
    }
}

class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    getDetails(): string {
        return `'Name: ${this.name}, Age: ${this.age}'`;
    }
}


interface RatedItem {
  title: string;
  rating: number;
}

function filterByRating(items: RatedItem[]): RatedItem[] {
  return items.filter((item) => item.rating >= 4);
}

interface User {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}

function filterActiveUsers(users: User[]): User[] {
    return users.filter(user => user.isActive === true);
}


interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

function printBookDetails(book: Book): string {
  const availability = book.isAvailable ? "Yes" : "No";
  return `Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${availability}`;
}

function getUniqueValues(array1: (string | number)[], array2: (string | number)[]): (string | number)[] {
  const result: (string | number)[] = [];

  const pushIfNotExists = (value: string | number) => {
    let exists = false;
    for (const item of result) {
      if (item === value) {
        exists = true;
        break;
      }
    }
    if (!exists) result.push(value);
  };

  for (const v of array1) pushIfNotExists(v);
  for (const v of array2) pushIfNotExists(v);

  return result;
}


interface Product {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
}

function calculateTotalPrice(products: Product[]): number {
  if (products.length === 0) return 0;

  return products
    .map((product) => {
      const base = product.price * product.quantity;
      if (product.discount) {
        const discounted = base - (base * product.discount) / 100;
        return discounted;
      }
      return base;
    })
    .reduce((sum, current) => sum + current, 0);
}