import React, { useEffect, useState } from 'react'
import { Box, Flex, Text, Divider, Button, Grid, Heading } from "@chakra-ui/react";
import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from '../redux/App/actions';
import { ProductCard } from './ProductCard';
import { useLocation, useSearchParams } from 'react-router-dom';
import { Sidebar } from '../components/Sidebar';


export const Product = () => {
    const dispatch = useDispatch();
    const [searchParams] = useSearchParams();
    const location = useLocation();
    const products = useSelector((store) => {
        return store.AppReducer.products;
    });

    let obj = {
        params: {
            brand: searchParams.getAll("category"),
            _sort: searchParams.get("order") && "originalPrice",
            _order: searchParams.get("order")
        },
    };

    useEffect(() => {
        dispatch(getProduct(obj));
    }, [location.search])


    return (
        <div>
            <Flex>
                <Box w="20%" h="100%" bg="gray.100">
                    <Sidebar></Sidebar>
                </Box>
                <Box flex="1" p="20px" >
                    <Grid templateColumns='repeat(4, 1fr)' gap={6}
                    >
                        {products.length > 0 && products.map((el) => {
                            return <ProductCard key={el.id} product={el}></ProductCard>;
                        })}
                    </Grid>
                </Box>
            </Flex>

        </div>
    )
}