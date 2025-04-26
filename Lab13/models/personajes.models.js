const personajes = [];

module.exports = class Personaje {
    constructor(nombre, casa) {
        this.nombre = nombre;
        this.casa = casa;
    }

    save() {
        personajes.push(this);
    }

    static fetchAll() {
        return personajes;
    }
};
