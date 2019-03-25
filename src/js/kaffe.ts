// base klasse
export abstract class kaffe {
    public Rabat:number;
    constructor(rabat:number) {
        this.Rabat = rabat;
    }
    public abstract pris() : number;
    public abstract kaffeType() : string;
    public abstract styrke() : string;
}

