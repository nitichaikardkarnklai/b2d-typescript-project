import { Player } from "./Player";

export function fight(player1: Player, player2: Player) {
    process.stdout.write(player1.name + " vs " + player2.name + " => ");

    if (player1.isAlive && player2.isAlive) {
        if (player1.power === player2.power) {
            console.log(player1.name + " and " + player2.name + " have the same power");
        } else if (player1.power > player2.power) {
            if (player1.power > 100 * player2.power) {
                console.log("The winner is " + player1.name + ". " + player2.name + "'s power is much lower");
            } else {
                console.log("The winner is " + player1.name);
            }
        } else if (player1.power < player2.power) {
            if (player1.power < 100 * player2.power) {
                console.log("The winner is " + player2.name + ". " + player1.name + "'s power is much lower");
            } else {
                console.log("The winner is " + player1.name);
            }
        } else {
            console.log("Wrong Input");
        }
    } else {
        let players: Player[] = [player1, player2];
        let dead: String[] = [];

        for (let player of players) {
            if (!player.isAlive) {
                dead.push(player.name);
            }
        }
        console.log("Cannot fight, because " + dead.join(" & ") + " is dead");
    }
}