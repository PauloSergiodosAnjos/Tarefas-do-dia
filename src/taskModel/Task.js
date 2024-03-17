export default class Task {
    constructor({name, description}) {
        this.name = name,
        this.description = description
        this.id = Math.floor(Math.random() * 10000)
    }
}