export default function Card(props) {
    const { DNI, nombre, celular } = props;

    const capitalizarPrimeraLetra = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    return (
        <div className="row d-flex align-items-center">
        <div className="col-2 text-center">
          <i class="fa-solid fa-user"></i>
        </div>
        <div className="col-3">
          <p>{capitalizarPrimeraLetra(nombre)}</p>
        </div>
        <div className="col-3">
          <p>{DNI}</p>
        </div>
        <div className="col-4">
          <p>{celular}</p>
        </div>
      </div>
    )
}



