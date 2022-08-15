// Soldier
class Soldier {
    constructor(health,strength) {
        this.health = health;
        this.strength= strength;
    }
    attack(){
        return this.strength;
    }
    receiveDamage(damage){
        this.health=this.health-damage;
    }
}
// Viking
class Viking extends Soldier {
    constructor(name,health,strength){
        super(health,strength);
        this.name =name;
    }
    receiveDamage(damage){
        this.health-=damage;
        if(this.health>0){
            return `${this.name} has recieved${damage} points of damage.`
        }
        else{
            return `${this.name} has died in act of combat`
        }
    }
    battleCry(){
        return "Odin Owns You All!";
    }
}

// Saxon
class Saxon extends Soldier{
    constructor(health,strength){
        super(health,strength);
    }
    receiveDamage(damage){
        this.health-= damage;
        if(this.health>0){
            return `A Saxon has received ${damage} points of damage`
        }
        else{
            return "A Saxon has died in combat"
        }
    }
}

// War
class War {
    constructor(){
        this.vikingArmy =[];
        this.saxonArmy = [];
    }
    addViking(viking){
        this.vikingArmy.push(viking);
    }
    addSaxon(saxon){
        this.saxonArmy.push(saxon);
    }   
    vikingAttack(){
        let indexRandomSaxon = Math.floor(Math.random()*this.saxonArmy.length)
        let indexRandomViking = Math.floor(Math.random()*this.vikingArmy.length)
        let viking = this.vikingArmy[indexRandomViking];
        let saxon = this.saxonArmy[indexRandomSaxon];
        
        let result = saxon.receiveDamage(viking.attack())
        if (saxon.health<=0){
            this.saxonArmy.splice(indexRandomSaxon,1)
        }
        return result;
    }
    saxonAttack(){
        let indexRandomSaxon2 = Math.floor(Math.random()*this.saxonArmy.length)
        let indexRandomViking2 = Math.floor(Math.random()*this.vikingArmy.length)
        let viking2 = this.vikingArmy[indexRandomViking2];
        let saxon2 = this.saxonArmy[indexRandomSaxon2];
        let result2 = viking2.receiveDamage(saxon2.attack());
        if (viking2.health<=0){
            this.vikingArmy.splice(indexRandomViking2,1);
        }
        return result2;
    } 
    showStatus(){
        if(this.saxonArmy.length===0){
            return `Vikings have won the war of the century!`
        }
        else if(this.vikingArmy.length===0){
            return `Saxons have fought for their lives and survived another day...`
        }
        else if (this.vikingArmy.length>0 && this.saxonArmy.length>0){
            return "Vikings and Saxons are still in the thick of battle."
        }
    }
}

