import { cortado } from "./cortado";
import { latte } from "./latte";
import { kaffe } from "./kaffe";
import { sortkaffe } from "./sortkaffe";

let kaffelist:kaffe[] = new Array();
kaffelist.push(new latte(0));
kaffelist.push(new sortkaffe(5));
kaffelist.push(new cortado(0));
kaffelist.forEach(k => printFunc(k))

function printFunc(k : kaffe) {
    console.log("Type: ", k.kaffeType);
    console.log("Styrke: ", k.styrke);
    console.log("Pris: ", k.pris)
    console.log("Rabat: ", k.Rabat)
}



