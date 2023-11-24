import React, { useState } from "react";
import "./ListBox.css";

const HIGHLIGHT_COLOR = "rgb(221, 170, 119)";
const onSelectedPlaceholder = (newSelection, selectedList) => {};

function ListBox({
  list = [],
  onSelected = onSelectedPlaceholder,
  widthPct = '100',
  maxHeight = "400px",
}) {
  const [filterText, setFilterText] = useState("");
  const [filteredList, setFilteredList] = useState(list);
  const [selectedValues, setSelectedValues] = useState([]);
  const [data, setData] = useState('');
  const onFilter = (filter) => {
    setFilterText(filter);
    if (!filter || filter === "") {
      setFilteredList(list);
      return;
    }

    setFilteredList(
      list.filter((item) => item.toLowerCase().includes(filter.toLowerCase()))
    );
  };

  const onSelect = (item) => {
    setData(item);
  };

  return (
    <div className="container">
        <div className="ListBox"  style={{ width: widthPct + "%" }}>

          <ul style={{ maxHeight: maxHeight }}>
            {filteredList.map((item, index) => (
              <li
                key={index}
                className="no-highlight"
                style={{
                  backgroundColor: selectedValues.includes(item.id)
                    ? HIGHLIGHT_COLOR
                    : "white",
                }}
                value={item.id}
                onClick={() => onSelect(item)}
              >
                {item.id}
              </li>
            ))}
          </ul>

        </div>
          <div className="column" style={{margin: '20px'}}>

            <div className="insidecontainer">
                    <div className="column" style={{margin: '20px'}}>
                    <input
                      className="full-width"
                      type="text"
                      value={data.id}
                    />
                      </div>
                      <div className="column" style={{margin: '20px'}}>
                      <input
                      className="full-width"
                      type="text"
                      value={data.state}
                    />
                      </div>
                      <div className="column" style={{margin: '20px'}}>
                      <input
                      className="full-width"
                      type="text"
                      value={data.address1}
                    />
              </div>

            </div>
         </div>
    </div>
  );
}

export default ListBox;
