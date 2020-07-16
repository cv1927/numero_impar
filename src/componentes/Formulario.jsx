import React, { Fragment, useState } from 'react';

import Error from './Error';

const Formulario = ({ numero, guardarNumero, guardarMostrarResultado, guardarNumeroSumado }) => {

    const [ error, guardarError ] = useState(false);

    const actualizarNumero = e => {
        guardarNumero( parseInt( e.target.value ))
    }

    const validarNumero = e => {
        e.preventDefault();
        // Validar
        if (numero < 0 || isNaN(numero)) {
            guardarError(true);
            return;
        }

        let numeroAux = numero + numero + numero;
        guardarNumeroSumado( numeroAux );
        guardarMostrarResultado(true);
        guardarError(false);
    }

    return(
        <Fragment>
            <h2>Ingresa un número</h2>

            { error ? <Error mensaje="No es un número valido"/> : null }

            <form
                onSubmit={validarNumero}
            >
                <input 
                    type="number"
                    className="u-full-width"
                    placeholder="Ingresa un número positivo"
                    value={numero}
                    onChange={actualizarNumero}
                />

                <input 
                    type="submit"
                    className="button-primary u-full-width"
                    value="Validar número"
                />
            </form>
        </Fragment>
    );
}

export default Formulario