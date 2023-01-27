import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const [selectedDataSet, setSelectedDataSet] = useState('');
  const history = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    history.push('/grid', { selectedDataSet });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Select a data set:
        <select value={selectedDataSet} onChange={e => setSelectedDataSet(e.target.value)}>
          <option value="data1">Data Set 1</option>
          <option value="data2">Data Set 2</option>
          <option value="data3">Data Set 3</option>
        </select>
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default Home;
