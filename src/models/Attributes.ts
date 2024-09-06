import { UserProps } from './User';

export class Attributes<T> {
  constructor(private data: T) {}

  // "keyof T" -->  "id" |" name" | "age" bei T = {id: number, name: string, age: number}
  // K ist beschränkt auf die keys von T, d.h. K kann nur id, name oder age sein
  // key:key --> key kann nur id, name oder age sein
  // T[K] --> number | string | number, d.h. id kann nur number sein, name kann nur string sein, age kann nur number sein
  get = <K extends keyof T>(key: K): T[K] => {
    return this.data[key];
  };

  set(update: T): void {
    Object.assign(this.data, update);
  }

  getAll(): T {
    return this.data;
  }
}
