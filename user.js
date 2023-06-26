class User {
    constructor(name, age, address){
        this.name = name
        this.age = age
        this.address = address
    }

    getInfo = () => {
    return{
        name: this.name,
        age: this.age,
        address: this.address
    }
    }
}
export default User