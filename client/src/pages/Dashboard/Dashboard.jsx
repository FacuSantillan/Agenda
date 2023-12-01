import { useEffect, useState } from "react";
import { guardarInformacion } from "../../redux/action";
import { useSelector, connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import "./style.css";

function Dashboard({guardarInformacion}) {
  const navigate = useNavigate();

  const informacion = useSelector(state => state.informacion);
  const key = useSelector(state => state.token);
  const token = localStorage.getItem('token');

  const [usuario, setUsuario] = useState({
    email: informacion.email,
    contraseña: informacion.contraseña,
    clinica: '',
  });
    console.log(key)

    useEffect(() => {
      const token = localStorage.getItem('token');
      if (!token) {
        navigate('/');
      }
    }, []);


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

export default connect(null, { guardarInformacion })(Dashboard);
