let id = 1

class Friend {
    constructor({name, phone, email}) {
        this.id = id++;
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.status = "Active"
    };
}

module.exports = Friend