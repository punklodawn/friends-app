import Amigos from "../Amigos/Amigos";
import Alert from "../alert/Alert";

const Home = () => {
    const states = ['Active', 'Inactive', 'Blocked'];
    return (
        <div className="container">
            <div className='row mt-5'>
                <h1 className='mb-5'>Listado de amigos según su estado</h1>
                <Alert />
                {
                    states.map((state, index) =>
                        <Amigos key={state} state={state}/>
                    )
                }
            </div>
        </div>
    )

}

export default Home