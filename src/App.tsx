import {Provider} from 'react-redux';
import {store} from './redux/store';
import ComponentLevel1 from './components/ComponentLevel1';

const App = () => {
    return (
        <Provider store={store}>
            <ComponentLevel1/>
        </Provider>
    );
};

export default App;