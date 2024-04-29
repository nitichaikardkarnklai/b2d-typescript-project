export class Player {
    public name: string;
    public power: number;
    public isAlive: boolean;

    constructor(name: string, power: number, isAlive: boolean) {
        this.name = name;
        this.power = power;
        this.isAlive = isAlive;
    }
}