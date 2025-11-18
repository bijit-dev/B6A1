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
