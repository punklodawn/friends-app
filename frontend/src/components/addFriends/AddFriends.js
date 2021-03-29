import React from 'react';
import {connect} from 'react-redux'
import {setMessage} from "../../actions";
import Alert from "../alert/Alert";
import axios from "axios";


const AddFriends = ({setMessage}) => {
    const [amigo, setAmigo] = React.useState({
        name: 'Pedro',
        phone: '34234234',
        email: '23423423@asdasd.asd'
    });

    const addFriend = (amigo) => {
        axios.post('/api/v1/friend/add', amigo)
            .then(() => setMessage({
                type: 'success',
                display: 'block',
                title: '¡Excelente!',
                text: 'Se ha creado el usuario con éxito'
            }))
            .catch(() => setMessage({
                type: 'danger',
                display: 'block',
                title: '¡Ups Algo salió mal!',
                text: 'Lo siento hubo un problema al tratar de procesar la solicitud con el servidor'
            }))
    }

    React.useEffect(()=>{
        setMessage({
            type: '',
            display: 'none',
            title: '',
            text: ''
        })
    },[setMessage])


    function hadleSumbit(e) {
        e.preventDefault();
        addFriend(amigo)
        setAmigo({
            name: '',
            phone: '',
            email: ''
        })
    }

    function handleOnChange(event) {
        setAmigo({
            ...amigo,
            [event.target.name]: event.target.value
        })
    }

    return (
        <form className="form-floating mt-5 ms-5 me-5" onSubmit={hadleSumbit}>
            <Alert/>
            <div className="form-floating mb-3">
                <input value={amigo.name} name='name' type="text" className="form-control" id="name"
                       placeholder="Friend name" onChange={handleOnChange}/>
                <label htmlFor="name">Friend name</label>
            </div>
            <div className="form-floating mb-3">
                <input value={amigo.phone} name='phone' type="text" className="form-control" id="phone"
                       placeholder="Friend phone" onChange={handleOnChange}/>
                <label htmlFor="phone">phone</label>
            </div>
            <div className="form-floating mb-3">
                <input value={amigo.email} name='email' type="email" className="form-control" id="email"
                       placeholder="name@example.com" onChange={handleOnChange}/>
                <label htmlFor="email">Email address</label>
            </div>
            <div className="col-auto">
                <button type="submit" className="btn btn-success mb-3">Save friend</button>
            </div>
        </form>
    )
}

export default connect(null, {setMessage})(AddFriends)