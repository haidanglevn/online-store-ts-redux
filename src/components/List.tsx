import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { fetchProducts } from "../features/productSlide";

const List = () => {
    const products = useAppSelector((state) => state.products.products);
    const dispatch = useAppDispatch();

    useEffect(()=> {
        dispatch(fetchProducts());
    }, [dispatch])
    console.log("Products: ", products)
    return (
        <div>
            List will be here
        </div>
    );
};

export default List;