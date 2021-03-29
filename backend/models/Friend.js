let id = 1

class Friend {
    constructor({name, phone, email,status}) {

        this.id = id++;
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.status = (status)?status:'Active'
    };
}

module.exports = Friend