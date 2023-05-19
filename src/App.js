import { Router, Route } from 'react-router-dom';
import EmployeeList from './components/EmployeeList';
import './App.css';

function App() {
  return (
    <Router>
      <Route exact path="/employees" component={EmployeeList} />
    </Router>
  );
}

export default App;