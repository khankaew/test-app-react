import { useState, useContext } from 'react';
import { DataContext } from '../contexts/DataContext';

export default function Sort() {
  const { setData, data } = useContext(DataContext);

  const [sortBy, setSortBy] = useState("name");
  const [orderBy, setOrderBy] = useState("ASC");

  const handleClickSort = () => {
    console.log(sortBy, orderBy);

    const newData = sorting([...data], sortBy, orderBy)
    setData(newData)
  }

  const sorting = (dataSort, sortBy, orderBy) => {
    const result = dataSort.sort((a, b) => {
      const keyA = sortBy === "age" ? a.age : a[sortBy].toLowerCase();
      const keyB = sortBy === "age" ? b.age : b[sortBy].toLowerCase();

      if (orderBy === "ASC") {
        if (keyA < keyB) {
          return -1;
        }
        if (keyA > keyB) {
          return 1;
        }
      } else {
        if (keyA < keyB) {
          return 1;
        }
        if (keyA > keyB) {
          return -1;
        }
      }

      return 0;
    });

    return result
  }

  return (
    <div className='input'>
      Sort by :
      <select name="sortBy" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
        <option value="name">name</option>
        <option value="age">age</option>
        <option value="datetime">datetime</option>
      </select>

      <select name="orderBy" value={orderBy} onChange={(e) => setOrderBy(e.target.value)}>
        <option value="ASC">Ascending order</option>
        <option value="DESC">Descending order</option>
      </select>

      <button type='button' onClick={() => handleClickSort()}>Sort</button>
    </div>
  );
}