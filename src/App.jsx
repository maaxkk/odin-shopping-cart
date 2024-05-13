import './App.css'
import AppRouter from "./components/AppRouter.jsx";
import {Provider} from "react-redux";

import {store} from './redux/store.js'

function App() {

    return (
        <div className={'app'}>
            <Provider store={store}>
                <AppRouter/>
            </Provider>
        </div>
    )
}

export default App
