
// export const Form = ({ formData, handleOnchange, errors, validateForm }) => {
//     const handleOnchange = (evt) => {
//         evt.preventDefault()
//         if (validateForm()) {
//             console.log("enviando", formData)
//         }
//     }
//     return (
//         <div style={{ border: "3px solid yellow" }}>
//             <h5 style={{ margin: "15px" }}>Llene los datos para finalizar la compra</h5>
//             <form onSubmit={handleOrder}>
//                 <input style={{ textAlign: 'center' }}
//                     type="text"
//                     name="nombre"
//                     value={formData.nombre}
//                     onChange={() => { }}
//                     placeholder="ingrese el nombre"
//                 />
//                 <br />
//                 {errors && errors.nombre && <span> {errors.nombre}</span>}
//                 <br />
//                 <input style={{ textAlign: 'center' }}
//                     type="text"
//                     name="phone"
//                     value={formData.email}
//                     onChange={() => { }}
//                     placeholder="ingrese el teléfono"
//                 />
//                 <br />
//                 {errors && errors.phone && <span> {errors.phone}</span>}
//                 <br />
//                 <input style={{ textAlign: 'center' }}
//                     type="text"
//                     name="mail"
//                     value={formData.nombre}
//                     onChange={() => { }}
//                     placeholder="ingrese el email"
//                 />
//                 <br />
//                 {errors && errors.email && <span> {errors.email}</span>}
//                 <br />
//                 {/* <button>Enviar</button> */}
//             </form>
//         </div>
//     )
// }
