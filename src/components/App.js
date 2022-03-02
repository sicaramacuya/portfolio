import './App.css';
import Container from './Container/Container.js';

function App() {
  const columnSide = { left: "left", right: "right" }

  return (
    <div className="App">
      <Container column={columnSide.left}/>
      <Container column={columnSide.right} />
    </div>
  );
}

export default App;
