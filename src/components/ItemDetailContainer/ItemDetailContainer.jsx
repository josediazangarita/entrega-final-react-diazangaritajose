import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import Loading from "../Loading/Loading";
import { doc, getDoc, getFirestore } from "firebase/firestore";


export const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const { pid } = useParams()

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