class Pet {
    static pets = []
    constructor(name,species,color){
        this.name = name
        this.species = species
        this.color = color
    }

static addToArray(pet){
    Pet.pets.push(pet)
    }

changeName(name){
    this.name = name
    }
}

let p1 = new Pet ("Artie","Dog","Brown and White")
console.log(p1)
console.log(Pet.pets)
Pet.addToArray (p1)
console.log(Pet.pets)