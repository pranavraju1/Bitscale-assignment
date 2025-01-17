import React, { useEffect, useState } from 'react'
import './styles.css';
import chatgpt from '../../../public/img/chat-gpt.png'
const   MainSection = () => {

    useEffect(() => {
        alert("Click on Add column and Add row");
      }, []); // Empty dependency array means it runs only once when the component mounts

  const [editingColumn, setEditingColumn] = useState(null);
  const [values, setValues] = useState({});

  const handleColumnClick = (id) => {
      console.log("the id is " + id);
      setEditingColumn(id);
  };

  const handleInputChange = (id, event) => {
      setValues((prevValues) => ({ ...prevValues, [id]: event.target.value }));
  };

  const handleKeyPress = (id, event) => {
      if (event.key === 'Enter') {
          setEditingColumn(null);
      }
  };


    const [columns, setColumns] = useState([{}]);
    const [rows,setRows] = useState(0);

    function handleAddColumn(e) {
        e.preventDefault();
        // setColumns([...columns, { id: columns.length + 1, content: 'A' }]);
        setColumns([...columns, { id: columns.length + 1 }]);
        console.log(columns);
    }
    function handleRow(e){
        e.preventDefault();
        console.log("add row")
        setRows(rows+1);
        console.log("rows are", rows)

    }
  return (
    <div className="h-100 MainSection d-flex flex-column">
      <div className="d-flex">
        <div className="h-SNo"></div>
        <div className="h-play"></div>
        {columns.map((column,index) => (
          <div
            key={column.id}
            className="h-Column d-flex justify-content-center align-items-center gap-2" style={{ backgroundColor: ['#70AD47', '#5B9BD5', '#ED7D31', '#FFC000'][index % 4], 'cursor': 'pointer'}}
          >
            <div
              className=" text-dark d-flex justify-content-center align-items-center"
              style={{ height: "23px", width: "22px" }}
            >
              {column.content}
            </div>
            {/* <div>Input Column</div> */}
          </div>
        ))}
        <div
          className="addColumn d-flex justify-content-start align-items-center gap-2 ps-3 cursor-pointer"
          onClick={(e) => handleAddColumn(e)}
        >
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ height: "23px", width: "22px" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12 5V19M5 12H19"
                stroke="#101828"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div>Input Column</div>
        </div>
      </div>
      {Array.from({ length:  rows}).map((roow,index) => (
        <div className="d-flex custumRow">
            <div className="d-SNo d-flex justify-content-center align-items-center">{index+1}.</div>
            <div className="d-play d-flex justify-content-center align-items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
              <mask id="mask0_1815_1932" style={{ maskType: "alpha"}} maskUnits="userSpaceOnUse" x="0" y="0" width="25" height="24">
                <rect x="0.5" width="24" height="24" fill="#D9D9D9"/>
              </mask>
              <g mask="url(#mask0_1815_1932)">
                <path d="M10 16.5L17 12L10 7.5V16.5ZM12.5 22C11.1167 22 9.81667 21.7375 8.6 21.2125C7.38333 20.6875 6.325 19.975 5.425 19.075C4.525 18.175 3.8125 17.1167 3.2875 15.9C2.7625 14.6833 2.5 13.3833 2.5 12C2.5 10.6167 2.7625 9.31667 3.2875 8.1C3.8125 6.88333 4.525 5.825 5.425 4.925C6.325 4.025 7.38333 3.3125 8.6 2.7875C9.81667 2.2625 11.1167 2 12.5 2C13.8833 2 15.1833 2.2625 16.4 2.7875C17.6167 3.3125 18.675 4.025 19.575 4.925C20.475 5.825 21.1875 6.88333 21.7125 8.1C22.2375 9.31667 22.5 10.6167 22.5 12C22.5 13.3833 22.2375 14.6833 21.7125 15.9C21.1875 17.1167 20.475 18.175 19.575 19.075C18.675 19.975 17.6167 20.6875 16.4 21.2125C15.1833 21.7375 13.8833 22 12.5 22ZM12.5 20C14.7333 20 16.625 19.225 18.175 17.675C19.725 16.125 20.5 14.2333 20.5 12C20.5 9.76667 19.725 7.875 18.175 6.325C16.625 4.775 14.7333 4 12.5 4C10.2667 4 8.375 4.775 6.825 6.325C5.275 7.875 4.5 9.76667 4.5 12C4.5 14.2333 5.275 16.125 6.825 17.675C8.375 19.225 10.2667 20 12.5 20Z" fill="#525CE9"/>
              </g>
            </svg>
            </div>
            {columns.map((column, index) => (
                <div 
                    key={column.id} 
                    className="d-Column d-flex justify-content-center align-items-center gap-2" style={{ backgroundColor: ['#E2EFDA', '#DDEBF7', '#FCE4D6', '#FFF2CC'][index % 4], 'cursor': 'pointer', border: `1px solid ${['#70AD47', '#5B9BD5', '#ED7D31', '#FFC000'][index % 4]}`, }}
                    onClick={() => handleColumnClick(column.id)}
                >
                    <div 
                        className="text-dark d-flex justify-content-center align-items-center" 
                        style={{ height: "23px", width: "22px" }}
                    >
                        {editingColumn === column.id ? (
                            <input 
                                type="text" 
                                value={values[column.id] || ''}
                                onChange={(e) => handleInputChange(column.id, e)}
                                onKeyPress={(e) => handleKeyPress(column.id, e)}
                                autoFocus
                            />
                        ) : (
                            <span>{values[column.id] || ''}</span>
                        )}
                    </div>
                </div>
            ))}
            <div className="emptyColumn d-flex justify-content-start align-items-center gap-2 ps-3 cursor-pointer">
            <div
                className="d-flex justify-content-center align-items-center"
                style={{ height: "23px", width: "22px" }}
            ></div>
            <div></div>
            </div>
      </div>
        ))}
      <div className="d-flex lastRow">
        <div className="h-SNo"></div>
        <div className="h-play"></div>
        <div className="addRow h-Column d-flex justify-content-center align-items-center gap-2" onClick={(e) => handleRow(e)}>
          <div className="text-dark d-flex justify-content-center align-items-center" style={{ height: "23px", width: "22px" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12 5V19M5 12H19"
                stroke="#101828"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div>Add row</div>
        </div>
        {columns.map((column) => (
          <div
            key={column.id}
            className="h-Column d-flex justify-content-center align-items-center gap-2"
          >
            <div
              className=" text-dark d-flex justify-content-center align-items-center"
              style={{ height: "23px", width: "22px" }}
            ></div>
          </div>
        ))}
        <div className="addColumn d-flex justify-content-start align-items-center gap-2 ps-3 cursor-pointer">
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ height: "23px", width: "22px" }}
          ></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default MainSection
