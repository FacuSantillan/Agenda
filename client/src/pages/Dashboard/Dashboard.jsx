import React, { useEffect } from "react";
import { useSelector, connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();
  const key = useSelector(state => state.token);

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      localStorage.setItem('token', key);
      window.location.reload()
    }
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/'); 
    }
  }, [navigate, key]);

  return (
    <div>
    </div>
  );
};

export default connect(null)(Dashboard);
