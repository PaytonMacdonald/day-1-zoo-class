export default class Aligator {
    constructor(name, color, gender = 'unknown', weight, noise, food, species, animalClass = 'reptile',) {
        this.name = name;
        this.color = color;
        this.gender = gender;
        this.weight = weight;
        this.noise = noise;
        this.food = food;
        this.species = species;
        this.animalClass = animalClass
    }
    eat(food) {
        console.log(`chibadee chomp the ${food} be gomp`)
    }
    speak(noise) {
        console.log(`${noise}!`)
    }
}
