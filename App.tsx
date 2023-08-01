import { Provider } from 'react-redux';
import { store } from './redux/store';
import { ApplicationRoot } from './ApplicationRoot';

export default function App() {
  return (
    <>
      <Provider store={store}>
        <ApplicationRoot />
      </Provider>
    </>
  );
}
