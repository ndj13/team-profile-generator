

class Manager {
    constructor(name, id, email, phone){
        this.name = name;
        this.id = id;
        this.title = "Manager";
        this.email = email;
        this.phone = phone;
    };
    getName(){
        return this.name;
    };
    getId() {
        return this.id;

    };
    getEmail() {
        return this.email;

    };
    getRole(){
        return this.title;

    };
    getRole(){
        return this.phone;

    };
}


module.exports = Manager;