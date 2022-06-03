import './App.css';
import Main from './screens/Main';
import Favorites from './screens/Favorites';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Switch
} from "react-router-dom";
import MyRouter from './navigation/MyRouter';
import { Provider } from 'react-redux';
import { store } from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <MyRouter />
    </Provider>
  );
}

export default App;
