import { Box, Button, Image, Text, useToast } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Loading from "../components/Loading";
import Navbar from "../components/Navbar";
import SingleCartItem from "../components/SingleCartItem";
import { getCartData, orderPlaced } from "../redux/Auth/actions";

export const Cart = () => {
    const dispatch = useDispatch();
    const {cart} = useSelector(store => store.AuthReducer);
    const [loading, setLoading] = useState(false);
    const navigate=useNavigate();
    const toast = useToast();
    let userId = localStorage.getItem("userId");
    let sum = 0
    if (!loading) {
        cart.forEach((el) => {
            sum += +el.discountPrice
        })
    }

    const deleteItem = (id) => {
        
    }
    
    const handleOrder=()=>{
        dispatch(orderPlaced(cart)).then(()=>{
            toast({
                title: "Your order has been placed Successfully",
                description: `Thank you for shopping with us`,
                status: "success",
                duration: 3000,
                position: "top",
                isClosable: true,
              });
            navigate('/orders')
        })
    }

    useEffect(() => {
        setLoading(true)
        dispatch(getCartData(userId))
        setLoading(false)
    }, []);

    console.log('cart',cart)

    return loading ? (
        <Loading />
    ) : (
        <>
        <Navbar></Navbar>
            <Box display={"flex"} bg="#F5F7F7" p={"2.5%"} gap="20px">
                <Box style={{width:'62%'}} overflowY="scroll" boxSize={"borderBox"} bg="white" p={"30px"}>
                    <Box display="flex" flexDir={"row"} alignItems="center" columnGap={4} pb="30px">
                        <Image src="https://cdn-icons-png.flaticon.com/512/2940/2940522.png" w={"35px"}/>
                        <Text fontWeight="400" fontSize={{ base: "md", md: "xl", lg: "2xl" }}>
                            <Text as={"span"}>{cart.length}</Text> Item in your Bag
                        </Text>
                    </Box>
                    <Box name="cart_card">
                        {cart.map((el) => {
                            return <SingleCartItem key={el.id} {...el} userId={userId} deleteItem={deleteItem} />
                        })}
                    </Box>
                </Box>
                <Box w={"35%"} display={"flex"} flexDir="column" bg="#F5F7F7" rowGap={"25px"}
                >
                    <Box p={"20px"} bg="white">
                        <Box display="flex" flexDir={"row"} alignItems="center" columnGap={4} pb="10px" borderBottom={"1px solid black"}>
                            <Image src="https://cdn-icons-png.flaticon.com/512/3063/3063822.png" w={"35px"}/>
                            <Text fontWeight="400" fontSize={{ base: "md", md: "xl", lg: "2xl" }}>
                                Delivery Address
                            </Text>
                        </Box>
                        <Box display="flex" flexDir={"row"} alignItems="center" justifyContent={"space-between"} columnGap={4} p="10px" border={"1px solid black"} mt="15%">
                            <Text
                                fontWeight="400"
                                fontSize={{ base: "md", md: "lg", lg: "xl" }}
                            >
                                Delivery to{" "}
                                <Text as={"span"} fontWeight="600">
                                    431703
                                </Text>
                            </Text>
                            <Text color={"#F25B22"} fontWeight="400">
                                Change
                            </Text>
                        </Box>
                    </Box>
                    <Box p={"20px"} bg="white">
                        <Box
                            display="flex"
                            flexDir={"row"}
                            alignItems="center"
                            columnGap={4}
                            pb="10px"
                        >
                            <Image
                                src="https://cdn-icons-png.flaticon.com/512/7324/7324863.png"
                                w={"35px"}
                            />
                            <Text
                                fontWeight="400"
                                fontSize={{ base: "md", md: "xl", lg: "2xl" }}
                            >
                                Payment Summary
                            </Text>
                        </Box>
                        <Box
                            display="flex"
                            flexDir={"row"}
                            alignItems="center"
                            justifyContent={"space-between"}
                            columnGap={4}
                            p="10px"
                        >
                            <Text
                                fontWeight="400"
                                fontSize={{ base: "md", md: "lg", lg: "xl" }}
                            >
                                Bag Total
                            </Text>
                            <Text color={"#F25B22"} fontWeight="400">
                                ₹ {sum}
                            </Text>
                        </Box>
                        <Box
                            display="flex"
                            flexDir={"row"}
                            alignItems="center"
                            justifyContent={"space-between"}
                            columnGap={4}
                            p="10px"
                        >
                            <Text
                                fontWeight="400"
                                fontSize={{ base: "md", md: "lg", lg: "xl" }}
                            >
                                Shopping Charges
                            </Text>
                            <Text color={"#F25B22"} fontWeight="400">
                                Free
                            </Text>
                        </Box>
                        <Box
                            display="flex"
                            flexDir={"row"}
                            alignItems="center"
                            justifyContent={"space-between"}
                            columnGap={4}
                            p="10px"
                        >
                            <Text fontWeight="400" fontSize={{ base: "md", md: "lg", lg: "xl" }}
                            >
                                Amount Payable
                            </Text>
                            <Text color={"#F25B22"} fontWeight="400">
                                ₹ {sum}
                            </Text>
                        </Box>
                        <Box><Button width={"100%"} onClick={handleOrder} bg={"#F25B22"} color="white" fontWeight={"bold"}>PAY</Button></Box>
                    </Box>
                </Box>
            </Box>
        <Footer></Footer>
        </>
    );
};

