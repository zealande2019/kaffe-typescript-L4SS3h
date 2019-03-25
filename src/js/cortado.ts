import {kaffe} from "./kaffe";
import {imaelk} from "./imaelk";

export class cortado extends kaffe implements imaelk{
    maelkml() {
        return 25;
    }
    public kaffeType() {
        return "cortadoOoooOoooO";
    }
    public pris() {
        return 25;
    }
    public styrke() {
        return "Mild";
    }
}
