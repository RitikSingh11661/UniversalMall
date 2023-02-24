import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export const SingleProductPage = () => {
    const { id } = useParams();
    const Product = useSelector((store) => {
        return store.AppReducer.products;
    });
    const [productData, setProductData] = useState({});

    useEffect(() => {
        const newData = Product.find((el) => el.id === +id);
        setProductData(newData);
    }, [])

    return (
        <div>
            singleProduct
        </div>
    )
};