import logo from './logo.svg';
import Home from './Home';
import './App.css';

function App() {
  return (
    
    <div className="App">
      <header className="App-header">
        <nav>
          <input type="checkbox" id='check'></input>
          <label for="check" class='checkbtn'>
            <i class='fas fa-bars'></i>
          </label>
          <label class="logo">RISETech</label>
          <ul>
            <li><a class="active" href='#'>Home</a></li>
            <li><a class="active" href='#'>Services</a></li>
            <li><a class="active" href='#'>Product</a></li>
            <li><a  class="active" href='#'>Career</a></li>
            <li><a class="active" href='#'>Contact</a></li>
            <li><a class="active" href='#'>Feedback</a></li>
          </ul>
        </nav>
        <section>

        </section>
      </header>
      
    </div>
  );
}

export default App;
