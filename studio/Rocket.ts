import { Payload } from "./Payload";
import { Cargo } from "./Cargo";
import { Astronaut } from "./Astronaut";

export class Rocket {
    name: string;
    totalCapacityKg: number;
    cargoItems: Cargo[] = []; //Don't get this part...  What does the Cargo[] accomplish???
    astronauts: Astronaut[] = [];

    constructor(name: string, totalCapacityKg: number){
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }
    sumMass( items: Payload[] ): number {
        let sum: number = 0;
        items.forEach(element => {
            sum += element.massKg;
        });
        return sum;
    }
    currentMassKg(): number {
        let cargoMass = this.sumMass(this.cargoItems);
        let astronautsMass = this.sumMass(this.astronauts);
        return cargoMass + astronautsMass;
    }
    canAdd( item: Payload ): boolean {
        if (this.currentMassKg() + item.massKg <= this.totalCapacityKg) {
            return true;
        }
    }
    addCargo( cargo: Cargo): boolean {
        if(this.canAdd(cargo)) {
            this.cargoItems.push(cargo);
            return true;
        } else {
            return false;
        }
    }
    addAstronaut( astronaut: Astronaut ): boolean {
        if(this.canAdd(astronaut)){
            this.astronauts.push(astronaut);
            return true;
        } else {
            return false
        }
    }
}
