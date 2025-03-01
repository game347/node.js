import { Container, Heading, useColorModeValue, VStack, Input, Box, Button, useToast } from "@chakra-ui/react";
import { useState } from "react";
import { useProductStore } from "../store/product";

const CreatePage = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: ""
  });

  const toast = useToast();
  const {createProduct}=useProductStore();

  const handleAddProduct = async () => {
    const { success, message } = await createProduct(newProduct);
    
    if (!success) {
      toast({
        title: "ERROR",
        description: message,
        status: "error", // Correct status for error
        duration: 5000,
        isClosable: true,
      });
    } else {
      toast({
        title: "SUCCESS", // Fixed typo here
        description: message,
        status: "success", // Correct status for success
        duration: 5000,
        isClosable: true,
      });
    }
  };
  

  return <Container maxW={"container.sm"}>CreatePage
    <VStack spacing={8}>
      <Heading as={"h1"} size={"2xl"} textAlign={"center"} mb={8}>
        Create New Product
      </Heading>

      <Box w={"full"} bg={useColorModeValue("white","gray.800")} p={6} rounded={"lg"} shadow={"md"}>
        <VStack spacing={4}>
        <Input 
          placeholder='Product Name' 
          name='name' 
          value={newProduct.name}
          onChange={(e) => setNewProduct({...newProduct, name: e.target.value})}  
        />
        <Input 
          placeholder='Price' 
          name='price'
          type='number'
          value={newProduct.price}
          onChange={(e) => setNewProduct({...newProduct, price: e.target.value})}  
        />
        <Input 
          placeholder='Image URL' 
          name='image' 
          value={newProduct.image}
          onChange={(e) => setNewProduct({...newProduct, image: e.target.value})}  
        />
        <Button colorScheme='green' onClick={handleAddProduct} w='full'>
          Add Product
        </Button>

        </VStack>
      </Box>
    </VStack>
  </Container>
};
export default CreatePage;