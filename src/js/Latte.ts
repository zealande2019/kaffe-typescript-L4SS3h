import {kaffe} from "./kaffe";
import {imaelk} from "./imaelk";

export class latte extends kaffe implements imaelk {
    maelkml() {
        return 125;
    }
    public kaffeType() {
        return "latte";
    }
    public pris() {
        return 40;
    }
    public styrke() {
        return "Mild";
    }
}