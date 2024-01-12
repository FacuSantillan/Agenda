import { useSelector } from 'react-redux';
import Card from "./card";

export default function Cards(props) {
    const data = useSelector((state) => state.pacientes);
    
    if (!Array.isArray(data)) {
        return <div className={style.error}>No hay reservas momentaneamente.</div>;
    }

    return (
        <div className='page'>
            <div className="cont">
                {data.map((data) => {
                    return (
                        <Card
                            nombre={data.nombre}
                            DNI={data.DNI}
                            celular={data.celular}
                        />
                    );
                })}
            </div>
        </div>
    );
}