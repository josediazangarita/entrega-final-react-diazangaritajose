import React, { useEffect } from 'react';
import { css } from '@emotion/react';
import { ClipLoader } from 'react-spinners';

const Loading = () => {
    useEffect(() => {
        return () => {
            console.log('Desmontando Loading');
        };
    }, []);

    const override = css`
        display: block;
        margin: 0 auto;
        border-color: dark; /* Puedes personalizar el color según tus preferencias */
    `;

    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
            <h2>Cargando...</h2>
            {/* Utilizando la animación de react-spinners */}
            <ClipLoader css={override} size={55} />
        </div>
    );
};

export default Loading;











// import { useEffect } from "react"

// //Componente de renderizado
// const Loading = () => {
//     useEffect(() => {
//         return () => {
//             console.log('desmontando loading')
//         }

//     })

//     return (
//         <h2>Cargando...</h2>
//     )
// }

// export default Loading
