//Indsæt anden sti hvis du er på bærbar!!!
import {kaffe} from "C:/Users/lenovo/Documents/GitHub/kaffe-typescript-L4SS3h/src/js/kaffe";
import {imaelk} from "C:/Users/lenovo/Documents/GitHub/kaffe-typescript-L4SS3h/src/js/imaelk";

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
