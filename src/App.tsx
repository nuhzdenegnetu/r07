import { AppProvider } from './context/AppContext';
import ComponentLevel1 from './components/ComponentLevel1';

function App() {
    return (
        <AppProvider>
            <ComponentLevel1 />
        </AppProvider>
    );
}

export default App;
