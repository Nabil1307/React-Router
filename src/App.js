import './App.css';
import ListOfUsers from './Components/ListOfUsers';
import {users,nameofAdmin} from "./data"

function App() {
  const handlename=(user)=> {
   alert(user.name) ;
  }
  
  return (
    <div className="App">
     
     <ListOfUsers users={users} nameofAdmin={nameofAdmin} handlename={handlename}>

     <h1>helo</h1>
     </ListOfUsers>


    
     
    </div>
  );
}

export default App;
