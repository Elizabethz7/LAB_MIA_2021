import logo from './logo.svg';
import './App.css';
getApi()
function getApi(){
  fetch(`http://localhost:4000/list`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(
      response => response.json()

    ).then(
     
      function (response){
        console.log(response)
      }

    )
    .catch(error => console.log(error));
}

function App() {
  return (
    <div className="App">
      <label>HOLA</label>
    </div>
  );
}

export default App;
