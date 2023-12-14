import React, { useState } from "react";
import { useCartContext } from "../../contexts/CartContext";
import { Link } from "react-router-dom";
import { addDoc, collection, getFirestore } from "firebase/firestore";

export const CartContainer = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
    });

    const {
        cartList,
        vaciarCarrito,
        getTotalQuantity,
        getTotalPrice,
        removeProductById,
    } = useCartContext();

    const handleOrder = async (evt) => {
        evt.preventDefault();
        const order = {
            buyer: { name: formData.name, phone: formData.phone, mail: formData.email },
            items: cartList.map(({ id, name, price }) => ({ id, name, price })),
            total: getTotalPrice(),
        };
        console.log(order);

        //create
        const db = getFirestore()
        const orderCollection = collection(db, 'orders')

        //agregar validaciones
        addDoc(orderCollection, order)
            .then(resp => console.log(resp))
            .catch(err => console.log(err))
    }


    console.log(formData)


    return (
        <div className="container mt-5">
            {cartList.length === 0 ? (
                <h1 className="text-center" style={{ color: "red" }}>
                    El carrito está vacío.
                </h1>
            ) : (
                <div className="d-flex flex-wrap justify-content-around">
                    {cartList.map((product) => (
                        <div
                            key={product.id}
                            className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 p-3 d-flex flex-column align-items-center"
                        >
                            <img
                                className="w-100 mb-2 img-fluid"
                                style={{ maxHeight: "350px", maxWidth: "250px" }}
                                src={product.imgUrl}
                                alt={product.title}
                            />
                            <div className="text-center font-weight-bold">
                                <h5>Nombre: {product.name}</h5>
                                <h6>Cantidad: {product.cantidad}</h6>
                                <h6>
                                    Precio: {product.price} - Subtotal{" "}
                                    {product.price * product.cantidad}
                                </h6>
                            </div>
                            <button
                                className="btn btn-danger mt-2"
                                onClick={() => removeProductById(product.id)}
                            >
                                Eliminar
                            </button>
                        </div>
                    ))}
                </div>
            )}

            {cartList.length > 0 && (
                <div className="text-center mt-3">
                    <p className="font-weight-bold" style={{ fontSize: "1.25rem" }}>
                        Cantidad total de productos: {getTotalQuantity()}
                    </p>
                    <h5 className="font-weight-bold">
                        Precio total de productos: ${getTotalPrice().toFixed(2)}
                    </h5>
                    <div>
                        <form onSubmit={handleOrder}>
                            <h5 style={{ marginTop: '25px', color: 'tomato' }}>Ingrese los datos para finalizar la compra</h5>
                            <input style={{ textAlign: 'center', margin: '10px', borderColor: 'black', borderRadius: '7px' }}
                                type="text"
                                name="name"
                                value={formData.name}
                                placeholder="Ingrese el nombre"
                                onChange={(e) =>
                                    setFormData({ ...formData, name: e.target.value })
                                }
                            />

                            <input style={{ textAlign: 'center', margin: '10px', borderColor: 'black', borderRadius: '7px' }}
                                type="text"
                                name="phone"
                                value={formData.phone}
                                placeholder="Ingrese el teléfono"
                                onChange={(e) =>
                                    setFormData({ ...formData, phone: e.target.value })
                                }
                            />

                            <input style={{ textAlign: 'center', margin: '10px', borderColor: 'black', borderRadius: '7px' }}
                                type="text"
                                name="email"
                                value={formData.email}
                                placeholder="ingrese el email"
                                onChange={(e) =>
                                    setFormData({ ...formData, email: e.target.value })
                                }
                            />
                            <br />
                            <button type="submit" className="btn btn-primary mt-2">
                                Finalizar compra
                            </button>
                        </form>

                    </div>
                    <div className="button-container d-flex justify-content-center flex-wrap" style={{ marginTop: '50px' }}>
                        <br />
                        <button
                            className="btn btn-danger m-2"
                            style={{ width: '160px' }}
                            onClick={vaciarCarrito}
                        >
                            Vaciar carrito
                        </button>
                        <Link to="/" className="btn btn-success m-2" style={{ width: '160px' }}>
                            Seguir comprando
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
};





// const handleOrder = () => {
//     const order = {}
//     order.buyer = { name: "José", phone: "2131313413", mail: "hshshshsh@gmail.com" }
//     order.items = cartList.map(({ id, name, price }) => ({ id, name, price }))
//     order.total = getTotalPrice()
//     // console.log(order)

//     //create
//     // const db = getFirestore()
//     // const orderCollection = collection(db, 'orders')

//     // agregar validaciones
//     // addDoc(orderCollection, order)
//     //     .then(resp => console.log(resp))
//     //     .catch(err => console.log(err))

//     // update
//     // const db = getFirestore()
//     // const orderDoc = doc(db, 'products', 'pid')
//     // updateDoc(orderDoc, {
//     //     stock: 50
//     // })
//     //     .then(() => console.log('terminó la actualización'))
//     //     .catch(err => console.log(err))


//     // Lógica para finalizar la compra
//     // setCheckoutMessage("¡Compra finalizada! Gracias por tu compra.");
// };