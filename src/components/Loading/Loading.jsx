import React, { useEffect } from 'react';
import { css } from '@emotion/react';
import { ClipLoader } from 'react-spinners';

const Loading = () => {
    useEffect(() => {
        return () => { };
    }, []);

    const override = css`
        display: block;
        margin: 0 auto;
        border-color: dark;
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