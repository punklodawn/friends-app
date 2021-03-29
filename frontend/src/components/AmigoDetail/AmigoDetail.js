import {connect} from "react-redux";
import {setMessage} from "../../actions";
import axios from 'axios';
import {useState, useEffect} from 'react'
import {useHistory} from "react-router-dom";
import Alert from "../alert/Alert";


const AmigoDetail = ({match, setMessage}) => {

    const [amigo, setAmigo] = useState({});

    let id = parseInt(match.params.id);

    let history = useHistory();

    const getDetail = (id) => {
        axios.get(`/api/v1/friend/get/${id}`).then(amigo => setAmigo(amigo.data[0]))
            .catch(() => {
            });

    }
    useEffect(() => {
        getDetail(id);
        setMessage({
            name: '',
            phone: '',
            email: ''
        })
        return ()=> setMessage({
            name: '',
            phone: '',
            email: ''
        })
    }, [id])

    if (!amigo.name) {
        return <div>No existe el amigo solicitado</div>
    }

    const changeFriendStatus = (id, action) => {
        let status = 'desactivado';
        if (action==='block') status = 'bloqueado'

        axios.put(`/api/v1/friend/${action}/${id}`)
            .then(() => setMessage({
                type: 'info',
                display: 'block',
                title: '¡Excelente! ',
                text: `El usuario se ha ${status} con éxito`
            }))
    }
    const deleteFriend = (id, action) =>{
        axios.delete(`/api/v1/friend/${action}/${id}`)
            .then(() => setMessage({
                type: 'info',
                display: 'block',
                title: '¡Excelente! ',
                text: 'El usuario ha sido eliminado con éxito'
            }))
    }

    const handleButton = (e) => {
        let action = e.target.id;
        switch (action) {
            case 'deactivate':
                changeFriendStatus(id, action);
                getDetail(id);
                break;
            case 'block':
                changeFriendStatus(id, action);
                getDetail(id);
                break;
            case 'delete':
                deleteFriend(id, action);
                history.push('/')
                break;
            default:
                break;
        }
    }
    return (
        <div className='container mt-5'>
            <div className="row">
                <div className='container mt-5'>
                    <Alert />
                    <div className="card">
                        <div className="card-header">
                            <strong>Nombre del amigo: </strong>{amigo.name}
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item"><strong>Teléfono: </strong>{amigo.phone}</li>
                            <li className="list-group-item"><strong>Email: </strong>{amigo.email}</li>
                            <li className="list-group-item"><strong>Estado: </strong>{amigo.status}</li>
                        </ul>
                        <div className="card-footer">
                            <div className="btn-group" role="group" aria-label="Basic example">
                                <button id='deactivate' onClick={handleButton} type="button"
                                        className="btn btn-warning">Desactivar
                                </button>
                                <button id='block' onClick={handleButton} type="button"
                                        className="btn btn-info">Bloquear
                                </button>
                                <button id='delete' onClick={handleButton} type="button"
                                        className="btn btn-danger">Eliminar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}


export default connect(null, {setMessage})(AmigoDetail)