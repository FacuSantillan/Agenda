import React, { useEffect, useState } from "react";
import { useSelector, connect, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { guardarInformacion } from '../../redux/action'

function Dashboard({ guardarInformacion }) {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const key = useSelector(state => state.token);
  const information = useSelector(state => state.informacion)

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
      localStorage.setItem('token', key);
      localStorage.setItem('userData', JSON.stringify(information));
      window.location.reload()
    } else {
      const storedInformation = JSON.parse(localStorage.getItem('userData'));
      if (storedInformation !== information) {
        localStorage.setItem('userData', JSON.stringify(information));
      }
    }
  }, [dispatch, key, information]);

  if (!key) {
    navigate('/'); // Redirige si no hay token
    return null;
  }

  return (
    <div>
    </div>
  );
};

export default connect(null, { guardarInformacion })(Dashboard);