import React from "react";
import PersonNumber from "../UI/PersonNumber";
import Sorting from "./Sorting";
import TableHeading from "./TableHeading";

const TableInfo = props => {
  return (
    <div className="row justify-content-between align-items-center">
      <div className="col-md-5">
        <TableHeading title={props.title}/>
      </div>
      <div className="col-md-3">
        <Sorting sortList={props.sortList} getSortValue={props.getSortValue} persons={props.persons} />
      </div>
      <div className="col-md-4">
        <h5 className="text-md-right person-number">
          {props.titleCount} <PersonNumber persons={props.persons} />
        </h5>
      </div>
      
    </div>
  );
};

export default TableInfo;
