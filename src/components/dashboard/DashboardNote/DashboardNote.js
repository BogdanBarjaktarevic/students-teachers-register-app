import React from "react";

const DashboardNote = () => {
  return (
    <h4 className="mb-3 heading-note">
      <span className="span-info">ВАЖНА НАПОМЕНА:</span> У поље{" "}
      <span className="span-info">КОРИСНИЧКО ИМЕ</span> унесите само корисничка
      имена ученика и наставника који су{" "}
      <span className="span-info">РЕГИСТРОВАНИ.</span> <br />{" "}
      <span className="span-info">КОРИСНИЧКО ИМЕ </span>
      може бити састављено само од слова енглеске абецеде, бројева или
      специјалног карактера „_” (доња црта).
    </h4>
  );
};

export default DashboardNote;
