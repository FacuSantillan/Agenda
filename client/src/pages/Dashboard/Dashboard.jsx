import React, { useEffect } from "react";

import "./style.css";

const Dashboard = () => {

  useEffect(() => {
    const originalBodyBackgroundColor = document.body.style.backgroundColor;
    document.body.style.backgroundColor = "white";
    return () => {
      document.body.style.backgroundColor = originalBodyBackgroundColor;
    };
  }, []);

  return (
    <div className="body">

    </div>
  );
};

export default Dashboard;
