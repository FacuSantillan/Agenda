import React from "react";
import DashboardNav from "../../components/dashboardNav/DashboardNav";


const Calendario = () => {
  return (
    <>
          <DashboardNav />
      <div className="container-fluid">
        <div className="row">
          <div className="col-2">aside</div>
          <div className="col-10">
            calendario
          </div>
        </div>
      </div>
    </>
  );
};

export default Calendario;
