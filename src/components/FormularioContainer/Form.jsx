
export const Form = ({ formData, handleOnChange, errors, validateForm, handleOrder }) => {
    const handleOnSubmit = (evt) => {
        evt.preventDefault()
        if (validateForm()) {
            console.log("enviando", formData)
            handleOrder(evt)
        }
    }
    return (
        <div style={{ border: "3px solid gray", borderRadius: '10px' }}>
            <form onSubmit={handleOnSubmit}>
                <h5 style={{ marginTop: '10px', color: 'blue' }}>Ingrese los datos para finalizar la compra</h5>
                <input style={{ textAlign: 'center', margin: '10px', borderColor: 'black', borderRadius: '7px' }}
                    type="text"
                    name="name"
                    value={formData.name}
                    placeholder="Ingrese el nombre"
                    onChange={handleOnChange}
                />

                <br />
                {errors && errors.name && <span> {errors.name}</span>}
                <br />
                <input style={{ textAlign: 'center', margin: '10px', borderColor: 'black', borderRadius: '7px' }}
                    type="text"
                    name="phone"
                    value={formData.phone}
                    placeholder="Ingrese el teléfono"
                    onChange={handleOnChange}
                />

                <br />
                {errors && errors.phone && <span> {errors.phone}</span>}
                <br />

                <input style={{ textAlign: 'center', margin: '10px', borderColor: 'black', borderRadius: '7px' }}
                    type="text"
                    name="email"
                    value={formData.email}
                    placeholder="ingrese el email"
                    onChange={handleOnChange}
                />

                <br />
                {errors && errors.email && <span> {errors.email}</span>}
                <br />

                <input style={{ textAlign: 'center', margin: '10px', borderColor: 'black', borderRadius: '7px' }}
                    type="text"
                    name="confirmEmail"
                    value={formData.confirmEmail}
                    placeholder="Confirmar email"
                    onChange={handleOnChange}
                />

                <br />
                {errors && errors.confirmEmail && <span> {errors.confirmEmail}</span>}
                <br />

                <button type="submit" className="btn btn-primary mt-2 mb-2">
                    Finalizar compra
                </button>
            </form>
        </div>
    )
}








