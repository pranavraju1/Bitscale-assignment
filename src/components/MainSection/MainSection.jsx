import React, { useState } from 'react'
import './styles.css';
import chatgpt from '../../../public/img/chat-gpt.png'
const MainSection = () => {
    const [columns, setColumns] = useState([
        // { id: 1, content: 'A' },
        // { id: 2, content: <img src={chatgpt} alt="Profile Logo" /> },
        // { id: 3, content: 'A' }

        { id: 1, content: <img src={chatgpt} alt="Profile Logo" /> },
    ]);
    const [rows,setRows] = useState(0);

    function handleAddColumn(e) {
        e.preventDefault();
        // setColumns([...columns, { id: columns.length + 1, content: 'A' }]);
        setColumns([...columns, { id: columns.length + 1 }]);
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
        {columns.map((column) => (
          <div
            key={column.id}
            className="h-Column d-flex justify-content-center align-items-center gap-2"
          >
            <div
              className=" text-dark d-flex justify-content-center align-items-center"
              style={{ height: "23px", width: "22px" }}
            >
              {column.content}
            </div>
            <div>Input Column</div>
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
      <div className="d-flex custumRow">
        <div className="d-SNo"></div>
        <div className="d-play"></div>
        {columns.map((column) => (
          <div
            key={column.id}
            className="d-Column d-flex justify-content-center align-items-center gap-2"
          >
            <div
              className=" text-dark d-flex justify-content-center align-items-center"
              style={{ height: "23px", width: "22px" }}
            ></div>
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
      <div className="d-flex custumRow">
        <div className="d-SNo"></div>
        <div className="d-play"></div>
        {columns.map((column) => (
          <div
            key={column.id}
            className="d-Column d-flex justify-content-center align-items-center gap-2"
          >
            <div
              className=" text-dark d-flex justify-content-center align-items-center"
              style={{ height: "23px", width: "22px" }}
            ></div>
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
      {Array.from({ length:  rows}).map((roow) => (
        //   <div key={roow} className="d-Column d-flex justify-content-center align-items-center gap-2" >
        //     <div
        //       className=" text-dark d-flex justify-content-center align-items-center"
        //       style={{ height: "23px", width: "22px" }}
        //     ></div>
        //   </div>
        <div className="d-flex custumRow">
            <div className="d-SNo"></div>
            <div className="d-play"></div>
                {columns.map((column) => (
                <div
                    key={column.id}
                    className="d-Column d-flex justify-content-center align-items-center gap-2"
                >
                    <div
                    className=" text-dark d-flex justify-content-center align-items-center"
                    style={{ height: "23px", width: "22px" }}
                    ></div>
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
