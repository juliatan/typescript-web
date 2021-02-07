export class Attributes<T> {
  constructor(private data: T) {}

  // i.e. in the case of T = UserProps, K has to be 'name', 'age', or 'id'
  // use arrow function to ensure this always refers to instance of Attribute
  get = <K extends keyof T>(key: K): T[K] => {
    return this.data[key];
  };

  set(update: T): void {
    // Object.assign means override and replace this.data
    Object.assign(this.data, update);
  }

  getAll(): T {
    return this.data;
  }
}
