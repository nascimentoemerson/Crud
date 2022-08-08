const crypto = require('crypto');

class ActorsEntity {
    constructor(actor) {
        this.id = actor.id ?? crypto.randomUUID();
        this.name = actor.name;
        this.birth = actor.birth;
        this.age = actor.age;
    }

    validate() {
        if (!this.name) {
            throw new Error('Nome precisa ser preenchido');
        }
        if (!this.birth) {
            throw new Error('O aniversário precisa ser informado');
        }
        if (!this.age) {
            throw new Error('Idade precisa ser preenchida');
        }
    }

    getActor() {
        return {
            id: this.id,
            name: this.name,
            birth: this.birth,
            age: this.age,
        };
    }
}

module.exports = ActorsEntity;
