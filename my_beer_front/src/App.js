import RouterWithModal from './navigation/RouterWithModal';
import { Provider } from 'react-redux';
import { store } from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <RouterWithModal />
    </Provider>
  );
}

export default App;
