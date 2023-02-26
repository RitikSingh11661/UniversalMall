import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { Box, Button, Grid, GridItem, Image, SimpleGrid, Text } from '@chakra-ui/react';
import axios from 'axios';
import { BsFillCartCheckFill } from "react-icons/bs";
import { MdOutlineStars } from 'react-icons/md';
import { VscWorkspaceTrusted } from 'react-icons/vsc';
import { AiOutlineHeart } from 'react-icons/ai';
import { addToCart, getUsers } from '../redux/Auth/actions';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const SingleProductPage = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const Product = useSelector((store) => {
        return store.AppReducer.products;
    });
    const [productData, setProductData] = useState({});
    const users = useSelector(store => store.AuthReducer.users)
    let userid = localStorage.getItem("userId")
    let userData = users.find((el) => {
        return el.id === +userid;
    })

    useEffect(() => {
        const newData = Product.find((el) => el.id === +id);
        setProductData(newData);
    }, [id])

    useEffect(() => {
        dispatch(getUsers)
    }, [])

    const sendCart = () => {
        dispatch(addToCart(userData,productData)).then(() => {
            dispatch(getUsers)
        });
    }

    return (
        <div>
            <Navbar></Navbar>
            <Box bg='#f4f4f4'>

                <Box fontSize='xl'>SingleProductPage</Box>
                <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 3 }} w='100%' mt='30px'>
                    <Box p='20px' display='flex' h='450px' bg='white'>
                        <Image border='1px solid gray' src={productData.img} alt="image" w='80px' h='80px' />
                        <Image className="hoverToIncreaseWidth" mt='70px' ml={{ base: '10px', sm: '20px', md: '70px', lg: '80px' }} src={productData.img} alt="image" w='200px' h='300px' />
                    </Box>
                    <Box align='left' bg='white' p='10px'>
                        <Text fontSize='2xl' as='b'>{productData.description}</Text>
                        <br />
                        <Text fontSize='lg' as='b'>Brand: {productData.brand}</Text>
                        <br />
                        <Text fontSize='sm' as='mark' >{productData.category}</Text>
                        <Text fontSize='xl'>Gender: {productData.gender}</Text>
                        <Box display='flex'>
                            <Text as='b' fontSize='xl'>Original-Price: </Text>
                            <Text display='flex' justifyContent='center' alignItems='center' ml='20px' bg='red' borderRadius='2px' color='white' fontSize='xl' width='120px' as='b' > ₹{productData.originalPrice}</Text></Box>
                        <Box mt='10px' display='flex'><Text as='b' fontSize='xl'>Discounted-Price: </Text>
                            <Text fontSize='xl' display='flex' justifyContent='center' alignItems='center' ml='20px' bg='green' borderRadius='2px' color='white' width='120px' as='b'> ₹{productData.discountPrice}</Text>

                        </Box><Text fontSize='xs' color='gray'>inclusive of all Taxes</Text>
                        <Box mt='60px'>
                            <Link to="/cart">
                                <Button className='addtocart' color='white' m='10px' background='#ef4e28' variant='solid' w='70%' onClick={sendCart}>  Add To Cart  </Button>
                            </Link>
                        </Box>
                    </Box>
                    <Box bg='#f4f4f4' m='40px' p='20px' borderRadius='8px' border='1px solid gray' align='left' w={{ base: '260px', sm: '250px', md: '200px', lg: 'max-content' }} h={{ base: '250px', sm: '300px', md: 'max-content', lg: 'max-content' }}>
                        <Text p='10px'>Top Selling Products on Tales & Stories</Text><hr />
                        <Text p='10px'>More Products</Text><hr />
                        <Text p='10px'>Best sellers & Top Offers on Tales & Stories</Text>
                    </Box>
                </SimpleGrid>

                {/* =====================================lower section========================================= */}
               <Footer></Footer>

            </Box>
        </div>
    )
};