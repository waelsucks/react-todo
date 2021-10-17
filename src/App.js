import logo from './logo.svg';
import './App.css';

import TaskManager from './components/TaskManager';
import TaskDisplay from './components/TaskDisplay';

function App() {
    return (
        <div className="App">
            <header className="App-header">

                <h1>
                    What To-Do?
                </h1>

                <TaskManager></TaskManager>

            </header>
        </div>
    );
}

export default App;
