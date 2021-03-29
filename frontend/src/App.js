import NavBar from "./components/Nav/NavBar";
import AddFriends from "./components/addFriends/AddFriends";
import Home from "./components/Home/Home"
import AmigoDetail from "./components/AmigoDetail/AmigoDetail";
import Error404 from "./components/errorPages/404/404";


// import { addFriend } from "./actions/index";

import {Route, Switch} from 'react-router-dom'

function App() {
    return (
        <>
            <NavBar/>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/add' component={AddFriends}/>
                <Route exact path='/edit/:id' component={AmigoDetail}/>
                <Route path='/' component={Error404} />
            </Switch>
        </>
    );
}

export default App;
