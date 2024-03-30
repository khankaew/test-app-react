import './App.css';
import { DataProvider } from './contexts/DataContext';
import Table from './components/Table'
import Search from './components/Search'
import Sort from './components/Sort'

function App() {
  return (
    <div className="App">
      <DataProvider>
        <h1>Table</h1>
        <Search />
        <Sort />
        <br />
        <Table />
      </DataProvider>
    </div>
  );
}

export default App;
