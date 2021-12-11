import logo from './logo.svg';
import './App.css';
import {AddTask} from './AddTask';
import {TaskList} from './TaskList';

export function App() {
    function addPerson(e) {
        e.preventDefault();
        console.log('Add person !!', e.target.name.value);
    }
    return (
    <div className="app">
        <AddTask /> 
        
        <TaskList />
        </div>
    );
}

export default App;

