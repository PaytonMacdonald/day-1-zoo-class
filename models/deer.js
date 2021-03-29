export default class Animal {
    constructor(name, color, gender = 'unknown', weight, noise, food, animalClass = 'mammal',) {
        this.name = name;
        this.color = color;
        this.gender = gender;
        this.weight = weight;
        this.noise = noise;
        this.food = food;
        this.animalClass = animalClass
    }
    eat(food) {
        console.log(`nom nom nom the ${food} be gone`)
    }
    speak(noise) {
        console.log(`${noise}!`)
    }
}
