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
