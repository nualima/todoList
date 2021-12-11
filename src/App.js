import logo from './logo.svg';
import './App.css';
import {AddTask} from './AddTask';
import {TaskList} from './TaskList';

export function App() {
  
    
    return (
    <div className="app">
        <AddTask /> 
        
        <TaskList />
    </div>
    );
}

export default App;

