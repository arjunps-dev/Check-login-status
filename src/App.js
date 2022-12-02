import './App.css';
import Main from './components/conditional/Main';

function App() {
  return (
    <div className="App">
      <Main isLoggedin={false}/>
    </div>
  );
}

export default App;
