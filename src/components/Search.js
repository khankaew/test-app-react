import { useState, useContext } from 'react';
import { DataContext } from '../contexts/DataContext';

export default function Search() {
  const { setData, defaultData } = useContext(DataContext);

  const [searchBy, setSearchBy] = useState("name");
  const [searchValue, setSearchValue] = useState("");

  const handleChangeSearchBy = (e) => {
    setSearchBy(e.target.value)
    setSearchValue("")
  }

  const handleClickSearch = () => {
    console.log(searchBy, searchValue);

    if (searchValue !== '') {
      const newData = defaultData.filter(item => {
        switch (searchBy) {
          case "age":
            if (item[searchBy] == searchValue) {
              return item
            }
            break;
          case "name":
          case "datetime":
            if (item[searchBy].toLowerCase().includes(searchValue.toLowerCase())) {
              return item
            }
            break;
          default:
            break;
        }
        return null
      });
      setData(newData)
    } else {
      setData(defaultData)
    }
  }

  return (
    <div className='input'>
      Search by :
      <select name="searchBy" value={searchBy} onChange={(e) => handleChangeSearchBy(e)}>
        <option value="name">name</option>
        <option value="age">age</option>
        <option value="datetime">datetime</option>
      </select>

      <input
        type={searchBy === "datetime" ? "date" : "text"}
        name="searchValue"
        placeholder='search value...'
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />

      <button type='button' onClick={() => handleClickSearch()}>Search</button>
    </div>
  );
}