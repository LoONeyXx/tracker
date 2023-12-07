import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { App } from './components/App/App';
import './index.css';
import store from './store/index';
import { Provider } from 'react-redux';
ReactDOM.createRoot(document.querySelector('#root')).render(
  <HashRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </HashRouter>,
);
