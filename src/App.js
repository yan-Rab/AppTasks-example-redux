import Landing from './pages/Landing'
import './globalStyles.css'
import {Provider} from 'react-redux'
import store from './store'

function App() {
  return (
    <div className="App">
      <Provider store = {store}>
        <Landing />
      </Provider>
     
    </div>
  );
}

export default App;
