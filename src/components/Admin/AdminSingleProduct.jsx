import { Box, Center, Heading, Text, Stack, Image, IconButton, Flex, useToast, Progress, ButtonGroup, Button, FormControl, FormLabel, Input, SimpleGrid } from '@chakra-ui/react';
import { FiTrash2, FiEdit } from 'react-icons/fi';
import React, { useState } from 'react';
import { deleteProduct, updateProduct } from '../../redux/Admin/actions';
import { useDispatch } from 'react-redux';
import { useRef } from 'react';

const SingleProduct = ({ product }) => {
  const formRef=useRef(product)
  const dispatch = useDispatch();
  const [showEdit, setShowEdit] = useState(false);
  const toast = useToast();
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(50);
  const options = {style: 'currency',currency: 'INR'};
  const price = product.originalPrice-product.discountPrice
  let priceWithString =price.toLocaleString('en-IN',options);
  const disocuntPercentage = ((price/product.originalPrice)*100).toFixed();

  const formChangeHandler = (e) => {
    const { name, value } = e.target;
    formRef.current[name]=value;
  }

  const formSubmitHandler = (e) => {
    e.preventDefault();
    try {
      dispatch(updateProduct(formRef.current));
      toast(
        {
          title: 'Product Updated',
          description: `${formRef.current.description} has been updated successfully.`,
          status: 'success',
          duration: 3000,
          isClosable: true,
        });
    } catch (error) {
      toast(
        {
          title: 'Error white editing',
          description: `${formRef.current.description} has not edit.`,
          status: 'success',
          duration: 3000,
          isClosable: true,
        });
    }
    setShowEdit(false)
  }

  const Form1 = () => {
    return (
      <>
        <Heading w="100%" size={'md'} textAlign={'center'} fontWeight="normal">Edit Product</Heading>
        <FormControl mt={'2'}>
          <FormLabel htmlFor="name" fontWeight={'normal'}>Name</FormLabel>
          <Input id="description" name='description' onChange={formChangeHandler} placeholder={product.description} fontSize={'small'} size={'sm'} />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="brand" fontWeight={'normal'}>Brand</FormLabel>
          <Input id="brand" type="text" name='brand' onChange={formChangeHandler} placeholder={product.brand} size={'sm'} fontSize={'small'} />
        </FormControl>
      </>
    );
  };

  const Form2 = () => {
    return (
      <>
        <Heading w="100%" textAlign={'center'} size={'md'} fontWeight="normal">Edit Product</Heading>
        <SimpleGrid>
          <Flex>
            <FormControl mr="5%">
              <FormLabel htmlFor="originalPrice" fontWeight={'normal'}>Original Price</FormLabel>
              <Input id="original-price" name='originalPrice' placeholder={product.originalPrice} onChange={formChangeHandler} fontSize={'small'} size={'sm'} />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="discountPrice" fontWeight={'normal'}>Discount Price</FormLabel>
              <Input id="discount-price" name='discountPrice' placeholder={product.discountPrice} onChange={formChangeHandler} fontSize={'small'} size={'sm'} />
            </FormControl>
          </Flex>
          <FormControl mt={'2'}>
            <FormLabel htmlFor="brand" fontWeight={'normal'}>Category</FormLabel>
            <Input id="category" type="text" name='category' placeholder={product.category} onChange={formChangeHandler} fontSize={'small'} size={'sm'} />
          </FormControl>
        </SimpleGrid>
      </>
    );
  };

  const handleDelete = () => {
    try {
      dispatch(deleteProduct(product.id));
      toast({
        title: 'Product Deleted',
        description: `${product.description} has been deleted successfully`,
        status: 'success',
        duration: 4000,
        isClosable: true,
      })
    } catch (error) {
      toast({
        title: 'Error while deleting',
        description: `${product.description} has not deleted`,
        status: 'error',
        duration: 4000,
        isClosable: true,
      })
    }
  }

  const editFunc = () => {
    return <Box borderWidth="1px" rounded="lg" shadow="1px 1px 3px rgba(0,0,0,0.3)" maxWidth={200} p={6} m="10px auto" as="form">
      <Progress hasStripe value={progress} mb="5%" mx="5%" isAnimated></Progress>
      {step === 1 ? <Form1 product={product} /> : <Form2 />}
      <ButtonGroup mt="5%" w="100%">
        <Flex w="100%" justifyContent="space-evenly">
          <Button
            onClick={() => { setStep(step - 1); setProgress(progress - 50) }} isDisabled={step === 1} colorScheme="teal" variant="solid" w="3.5rem" fontSize={'small'} mr="2%">
            Back
          </Button>
          <Button w="3.5rem" isDisabled={step === 2} colorScheme="teal" fontSize={'small'} variant="outline" mr="2%" onClick={() => {
            setStep(step + 1);
            if (step === 2) {
              setProgress(100);
            } else {
              setProgress(progress + 50);
            }
          }}>Next
          </Button>
          <Button w="3.5rem" colorScheme="black" fontSize={'small'} variant="outline" mr="2%" onClick={() => {
            setShowEdit(false)
          }}>Cancel
          </Button>
          {step === 2 ? (
            <Button w="3.5rem" colorScheme="red" variant="solid" fontSize={'small'} mr="2%" onClick={formSubmitHandler}>Submit
            </Button>
          ) : null}
        </Flex>
      </ButtonGroup>
    </Box>
  }

  if (showEdit) return editFunc();

  return (
    <Center bg='white' mt='2'>
      <Box role={'group'} p={6} maxW={'200px'} w={'full'} boxShadow={'2xl'} rounded={'lg'} pos={'relative'} zIndex={1}>
        <Box
          rounded={'lg'}
          pos={'relative'}
          _after={{transition:'all.3sease',content:'""',w:'full',h:'full',pos:'absolute',top:5,left:0,filter:'blur(15px)',zIndex:-1}}
          _groupHover={{_after: {filter: 'blur(20px)'}}}>
          <Image rounded={'lg'} boxSize={150} objectFit={'cover'} src={product.img} />
        </Box>
        <Stack align={'center'}>
          <Heading fontSize={'md'} fontFamily={'body'} fontWeight={500}>{product.description}</Heading>
          <Stack direction={'row'} align={'center'}>
            <Text fontWeight={800} fontSize={'md'}>{priceWithString}</Text>
            <Text textDecoration={'line-through'} color={'gray.600'} textDecor='line-through'>₹{product.originalPrice}</Text>
            <Text color='green.400'>{disocuntPercentage}%</Text>
          </Stack>
        </Stack>
        <Flex justifyContent={'space-evenly'}>
          <IconButton aria-label='Delete Product' onClick={() => handleDelete(product)} icon={<FiTrash2 />} />
          <IconButton aria-label='Edit Product' onClick={() => setShowEdit(true)} icon={<FiEdit />} />
        </Flex>
      </Box>
    </Center>
  )
}

export default SingleProduct;