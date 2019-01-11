class Car{
    constructor(color,convertible){
        this.color = color
        this.convertible = convertible
        this.speed = 0
    }
    accelerate(spd) {
        this.speed += spd
    }
    decelerate(spd){
        this.speed -= spd
    }
}

module.exports = Car;