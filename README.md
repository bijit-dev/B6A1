# TypeScript Problem Solving Assignment

## Blog Post (in Bangla)

### ১. Type vs Interface এর পার্থক্য

TypeScript-এ `type` এবং `interface` দুটিই object বা structure define করার জন্য ব্যবহার করা হয়। তবে এদের মধ্যে কিছু গুরুত্বপূর্ণ পার্থক্য আছে:

1. **Extension ও Inheritance:**
   - `interface` অন্য interface extend করতে পারে:
     ```ts
     interface User {
       id: number;
     }

     interface Admin extends User {
       role: string;
     }
     ```
   - `type`-ও extend করা যায় কিন্তু `&` (intersection) ব্যবহার করতে হয়:
     ```ts
     type User = { id: number };
     type Admin = User & { role: string };
     ```

2. **Declaration Merging:**
   - `interface` একাধিকবার declare করলে তারা merge হয়ে যায়:
     ```ts
     interface User { id: number; }
     interface User { name: string; }
     ```
   - `type` duplicate declare করলে error দেয়।  

3. **Union & Primitive Types:**
   - `type` ব্যবহার করে union type বা primitive type বানানো যায়:
     ```ts
     type ID = number | string;
     ```
   - `interface` দিয়ে এটি সম্ভব নয়।  

**সারসংক্ষেপ:**  
যদি ভবিষ্যতে extend/merge প্রয়োজন হয়, `interface` ভালো। যদি union বা primitive type প্রয়োজন, `type` ব্যবহার করুন।  

---

### ২. keyof keyword এর ব্যবহার

TypeScript-এ `keyof` ব্যবহার করা হয় object-এর key গুলোকে type হিসেবে বের করতে। এটি generic programming-এ খুব উপকারী।  

**উদাহরণ:**
```ts
interface User {
  id: number;
  name: string;
  email: string;
}

type UserKeys = keyof User;

function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

const user: User = { id: 1, name: 'Rakib', email: 'rakib@example.com' };
const userName = getProperty(user, 'name'); // 'Rakib'
