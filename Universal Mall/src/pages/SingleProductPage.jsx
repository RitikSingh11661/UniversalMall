import { Box, Button, Image, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export const SingleProdCard = ({ id, name, type, image1, image2, price }) => {
  const navigate = useNavigate();
  const onclickhandler = () => {
    console.log(id);
    
  };
  const handleClick = () => {
    navigate(`/SingleProduct/${id}`);
  }
  return (
    <Box onClick={handleClick}>
      <Box p="5">
        <Image
          src={image1}
          alt={name}
          boxShadow="xs"
          p="1"
          rounded="md"
          bg="white"
        />
        <Text as={"b"}>₹{price}</Text>
        <br />
        <Text as={"b"}></Text>
        <br />
        <Text color={"grey"}>{name}</Text>
        <Button variant="outline" border={"1px"} onClick={onclickhandler}>
          
        </Button>
      </Box>
    </Box>
  );
};