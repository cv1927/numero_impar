import React, {Fragment} from 'react';

const Resultado = ({numero, numeroSumado, mensaje, guardarMostrarResultado, guardarMensaje, guardarNumero, guardarNumeroSumado, guardarClaseContenido}) => {

    const volverFormulario = () => {
        guardarMensaje("");
        guardarNumero(0);
        guardarNumeroSumado(0);
        guardarMostrarResultado(false);
        guardarClaseContenido("contenido-principal contenido")
    }

    return(
        <Fragment>
            <h2>El número: {numero}</h2>
            <h2>Sumado 3 veces: {numeroSumado}</h2>
            <h2>Es un número {mensaje}</h2>
            <form
                onSubmit={volverFormulario}
            >
                <input 
                    type="submit"
                    className="button-primary u-full-width"
                    value="Volver"
                />
            </form>
        </Fragment>
    );
}

export default Resultado;