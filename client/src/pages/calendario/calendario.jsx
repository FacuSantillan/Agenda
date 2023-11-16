import React from "react";
import Calendar from "../../components/calendar/calendar";

const calendario = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-2">aside</div>
          <div className="col-10">
            <Calendar />
          </div>
        </div>
      </div>
    </>
  );
};

export default calendario;
