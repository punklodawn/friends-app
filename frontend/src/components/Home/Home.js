import Amigos from "../Amigos/Amigos";
import Alert from "../alert/Alert";

const Home = () => {
    const states = ['Active', 'Inactive', 'Blocked'];
    return (
        <div className="container">
            <div className='row mt-5'>
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