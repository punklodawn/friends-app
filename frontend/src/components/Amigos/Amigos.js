import { Link } from "react-router-dom";
import { fetchFriends } from "../../actions";
import {connect} from "react-redux";
import  {useEffect} from 'react';
import axios from "axios";


const Amigos = ({ state, amigos, fetchFriends }) => {

    const getFriends = () => {
        axios.get('/api/v1/friend/')
            .then(r => r.data.data)
            .then(d => fetchFriends(d))
            .catch(() => {});
    }

    useEffect(getFriends,[fetchFriends])


    let amigosFilter = amigos.filter(amigo => amigo.status === state);

    return (
        <div className='col'>
            <div className="card">
                <div className="card-header">
                    <span>{state}</span>
                </div>
                <ul className="list-group list-group-flush">
                    {
                        amigosFilter.map(amigo =>
                            <Link key={amigo.id} to={`/edit/${amigo.id}`}><li className="list-group-item">{amigo.name}</li></Link>
                        )

                    }
                </ul>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {

    return {
        amigos: state.friendList,
    }
}

export default connect(mapStateToProps, { fetchFriends })(Amigos)