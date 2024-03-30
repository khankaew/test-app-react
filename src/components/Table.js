import { useState, useContext } from 'react';
import { DataContext } from '../contexts/DataContext';

export default function Table() {
  const { data } = useContext(DataContext);

  return (
    <table>
      <thead>
        <tr>
          <th>name</th>
          <th>age</th>
          <th>datetime</th>
        </tr>
      </thead>

      <tbody>
        {data.map((v, i) => (
          <tr key={`data-${i}`}>
            <td>{v.name}</td>
            <td>{v.age}</td>
            <td>{v.datetime}</td>
          </tr>)
        )}
      </tbody>

    </table>
  );
}