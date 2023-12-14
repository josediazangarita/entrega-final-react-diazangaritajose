import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import Loading from "../Loading/Loading";
import { doc, getDoc, getFirestore } from "firebase/firestore";


export const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const { pid } = useParams()


    //Llamada a la API dentro de un useEffect
    // useEffect(() => {
    //     mFetch(pid)
    //         .then(res => setproduct(res))
    //         .catch(err => console.log('Error: ', err))
    //         .finally(() => setIsLoading(false))
    // }, [pid])



    useEffect(() => {
        const fetchData = async () => {
            try {
                const docSnapshot = await getDoc(doc(getFirestore(), 'products', pid));
                setProduct({ id: docSnapshot.id, ...docSnapshot.data() });
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [pid]);



    // useEffect(() => {
    //     const fetchProduct = async () => {
    //         try {
    //             const dbFirestore = getFirestore();
    //             const queryDoc = doc(dbFirestore, 'products', pid);
    //             const productDoc = await getDoc(queryDoc);

    //             if (productDoc.exists()) {
    //                 setProduct({ id: productDoc.id, ...productDoc.data() });
    //             } else {
    //                 console.log('El producto no existe');
    //             }
    //         } catch (error) {
    //             console.error('Error al obtener el producto:', error);
    //         } finally {
    //             setIsLoading(false);
    //         }
    //     };

    //     fetchProduct();
    // }, [pid]);

    return (
        <>
            {isLoading ? (
                <Loading />
            ) : (
                <ItemDetail product={product} />
            )}
        </>
    );
};