const Friend = require("../models/Friend");
let friendsList = require("../data/Friends");

class Friends {

    save(amigo) {
        let newFriend = new Friend(amigo)
        friendsList.push(newFriend)
    }

    getAllFriends() {
        return friendsList;
    }

    getById(id) {
        id = parseInt(id);
        let amigo = friendsList.filter(friend => friend.id === id)
        if (amigo.length >= 1) {
            return amigo;
        }
        return false;
    }

    setStatus(id, status) {
        id = parseInt(id);

        let amigo = this.getById(id)
        if (!amigo) {
            return false
        } else {
            friendsList = friendsList.map(friend => {
                if (friend.id === id) friend.status = status;
                return friend;
            });
            let find = friendsList.find(friend => friend.status === status);
            if (find.status === status) {
                return find;
            } else {
                return false;
            }
        }

    }

    deleteFriend(id){
        id = parseInt(id);

        let amigo = this.getById(id)
        if (!amigo) {

            return false

        }else {

            friendsList = friendsList.filter(friend => friend.id !== id)
            return !this.getById(id);

        }


    }

}


const amigo = {
    "name": "Amigo 1",
    "phone": 59999999,
    "email": "email@email"
}

const amigo2 = {
    "name": "Amigo 2",
    "phone": 54878787,
    "email": "email2@email2.2"
}

const friendController = new Friends()

friendController.save(amigo);
friendController.save(amigo2);


module.exports = Friends