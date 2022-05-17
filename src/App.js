import Profile from "./profile/Profile"
import "./App.css";

var handleName =(name)=>alert(name)
  

function App() {
  return (
    <div className="App">
      <Profile FullName="Luka" bio="I'm good at basketball !!" profession="Basketball player" handleName ={handleName}>
        <img src="logo512.png" alt="test" width="200"></img>
      </Profile> 
     
    </div>
  );
}

export default App;
