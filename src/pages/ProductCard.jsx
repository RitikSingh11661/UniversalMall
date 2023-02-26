
import React from 'react'
import { Link } from 'react-router-dom'
import { Box, Button, Image, Text } from "@chakra-ui/react";

export const ProductCard = ({ product }) => {
    return (
        <>
            <Link to={`/products/${product.id}`}>
                <Box p="2" h="17rem" boxShadow="md" rounded="md">
                    <Image
                        src={product.img}
                        alt={product.description}
                        m="auto"
                        p="1"
                        rounded="md"
                        bg="white"
                        h="55%"
                        w="60%"

                    />
                    <br />
                    <Text color={"grey 0.5"}>Brand : {product.brand}</Text>
                   
                   
                    <Text color={'green'}>Discount : {Math.round(product.discountPrice / product.originalPrice * 100)}%</Text>
                    <Text as={"b"} fontSize="1.2rem">₹{product.discountPrice} </Text>
                    <Text as={"s"}>₹{product.originalPrice}</Text>

                    

                </Box>
            </Link>
        </>
    )
}