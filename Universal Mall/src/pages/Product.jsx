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
    const [page, setPage] = useState(1);

    let obj = {
        params: {
            brand: searchParams.getAll("category"),
            _sort: searchParams.get("order") && "discountPrice",
            _order: searchParams.get("order"),
            _page: page,
            _limit: 12
        },
    };

    useEffect(() => {
        dispatch(getProduct(obj));
    }, [location.search, page])


    return (
        <div>
            <Flex direction={{
                base: "column",
                sm: "column",
                md: "column",
                lg: "row",
            }}>
                <Box w={{
                    base: "100%",
                    sm: "100%",
                    md: "100%",
                    lg: "25%",
                }}
                    p={5}
                    
                    top={{
                        base: "10%",
                        lg: "20%",
                    }}>
                    <Sidebar></Sidebar>
                </Box>
                <Box flex="1" p="20px"
                    w={{
                        base: "100%",
                        sm: "100%",
                        md: "100%",
                        lg: "70%",
                    }}
                >
                    <Grid gap={5} 
                        templateColumns={{
                            base: "repeat(1, 1fr)",
                            sm: "repeat(2, 1fr)",
                            md: "repeat(3, 1fr)",
                            lg: "repeat(4, 1fr)",
                        }}
                    >
                        {products.length > 0 && products.map((el) => {
                            return <ProductCard key={el.id} product={el}></ProductCard>;
                        })}
                    </Grid>
                </Box>
            </Flex>

            <Box
                mb="10px"
                bg=" #f1f6fd"
                padding="30px"
                align="center"
                display="flex"
                justifyContent="center"
            >
                <Button
                    disabled={page === 1}
                    color="red"
                    colorScheme="white"
                    bg="white"
                    variant="outline"
                    onClick={() => setPage(page - 1)}
                >
                    Previous
                </Button>
                <Box p="10px 20px">
                    {" "}
                    <Text className="pagenumber" fontWeight="500">
                        {page}
                    </Text>
                </Box>
                <Button
                    disabled={page >= 4}
                    color="red"
                    colorScheme="white"
                    bg="white"
                    variant="outline"
                    onClick={() => setPage(page + 1)}
                >
                    Next
                </Button>
            </Box>

        </div>

    )
}