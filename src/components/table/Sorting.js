import React from "react";

const Sorting = ({sortList, getSortValue}) => {
  const handleSelectChange = event => {
    getSortValue(event.target.value);
  };

  return (
    <div className="col-md-auto col-3 p-0">
      <select
        className="custom-select custom-select-sm my-1 mt-2 mb-2 mt-md-1 mb-md-1"
        id="inlineFormCustomSelectPref"
        onChange={event => handleSelectChange(event)}
      >
        {sortList.map(el => {
          return (
            <option value={el} key={el}>
              {el}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Sorting;
