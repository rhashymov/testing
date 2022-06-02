import './App.css';
import Body from './cmp/body/Body';
import {BrowserRouter} from "react-router-dom"

function App(props) {

  return (
    <BrowserRouter>
      <div className="App">
        <div className='project'>
          <Body  />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
