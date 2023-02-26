import React, { useEffect, useState } from 'react'
import { Table, Thead, Tbody, Tr, Th, Td, Image, Flex, Box, Heading } from "@chakra-ui/react";
import { getOrders } from '../redux/Auth/actions';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const Orders = () => {
   const [orders, setorders] = useState([]);
   const [isLoading, setIsLoading] = useState(false)
   const userId=localStorage.getItem('userId');

   useEffect(()=>{
     setIsLoading(true)
     getOrders(userId).then(res=>setorders(res.data))
     setIsLoading(false) 
   },[]);

  function OrderTableRow({ order }) {
    return (
      <Tr>
        <Td>
          <Image src={order.img} alt={order.description} boxSize="50px" />
        </Td>
        <Td>{order.brand}</Td>
        <Td>{order.description}</Td>
        <Td>{order.category}</Td>
        <Td>{order.quantity}</Td>
        <Td>₹{order.originalPrice-order.discountPrice}</Td>
        <Td>{order.status}</Td>
      </Tr>
    );
  }
  return(
    <div>
    <Navbar/>
    <Heading>Your Orders</Heading>
    <Flex direction="column" overflowX="auto">
    {isLoading?<h2>...Loading</h2>:
  <Box minWidth="md">
    <Table variant="simple">
      <Thead>
        <Tr>
          <Th>Image</Th>
          <Th>Brand</Th>
          <Th>Description</Th>
          <Th>Category</Th>
          <Th>Quantity</Th>
          <Th>Price</Th>
          <Th>Status</Th>
        </Tr>
      </Thead>
      <Tbody>
        {orders.map((order) => (
          <OrderTableRow key={order.id} order={order} />
        ))}
      </Tbody>
    </Table>
  </Box>
}
</Flex>
<Footer/>
    </div>
  )
}

export default Orders;

