import { Printable } from "../interfaces/Printable.js";

export function print(...objects: Printable[]): void {
  for (let object of objects) {
    console.log(object.toString());
  }
}