import NavBar from './components/NavBar/NavBar';
import './App.css';
import ItemListContainer from './components/NavBar/itemListContainer/itemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting={'Bienvenidos'}></ItemListContainer>
    </div>
  );
}

export default App;
