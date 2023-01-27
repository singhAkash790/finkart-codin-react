import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css'; 
import 'ag-grid-community/styles/ag-theme-alpine.css'; 

function Grid() {
  const { selectedDataSet } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${selectedDataSet}`)
      .then(res => res.json())
      .then(data => setData(data))
  }, [selectedDataSet]);

  const columnDefs = [
    { headerName: "Name", field: "name" },
    { headerName: "Age", field: "age" },
    { headerName: "Country", field: "country" },
  ];

  return (
    <div className="ag-theme-alpine" style={{ height: '500px', width: '600px' }}>
      <AgGridReact columnDefs={columnDefs} rowData={data}>
      </AgGridReact>
    </div>
  )
}
export default Grid;