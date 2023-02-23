
import React from 'react'
import { Link } from 'react-router-dom'
import { Box, Button, Image, Text } from "@chakra-ui/react";

export const ProductCard = ({ product }) => {
    return (
        <Box>
            <Box p="5" boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px" borderRadius="md">
                <Image
                    src={product.img}
                    alt={product.description}

                    p="1"
                    rounded="md"
                    bg="white"
                    h="250px"

                />
                Price :  <Text as={"b"} fontSize="1.3rem">₹{product.discountPrice}</Text>
                (<Text as={"b"} color="green">{product.originalPrice.split("-")[1]}</Text>)
                <Text as={"s"}>₹{product.originalPrice.split("-")[0]}</Text>
                <br />
                <Text color={"grey"}>Brand : {product.brand}</Text>
                <br />
                <Text >Product info: {product.description}</Text>

            </Box>
        </Box>
    )
}