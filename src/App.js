//routs
import { Switch , Route } from "react-router-dom";
//Components
import Login from "./Components/Login";
import Chats from "./Components/Chats";
//context
import AuthContextProvider from "./contexts/AuthContextProvider";
function App() {
  return (
    <div className="App">
      <AuthContextProvider>
      <Switch>
        <Route path="/chats" component={Chats}/>
        <Route path="/" component={Login}/>
      </Switch>
      </AuthContextProvider>
   
    </div>
  );
}

export default App;
