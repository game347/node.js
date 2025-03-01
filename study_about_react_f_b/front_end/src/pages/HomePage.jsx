import { Link as RouterLink } from "react-router-dom";
import { Link, Container, Text, VStack } from "@chakra-ui/react";

const HomePage = () => {
  return (
    <Container maxW="container.xl" py={12}>
      <VStack spacing={8}>
        <Text
          fontSize="30px"
          fontWeight="bold"
          bgGradient="linear(to-r, cyan.400, blue.500)"
          bgClip={"text"}
          textAlign="center"
        >
          Current Product O_O
        </Text>

        <Text fontSize="xl" textAlign="center" fontWeight="bold" color="gray.500">
          NO product found{" "}
          <Link as={RouterLink} to="/create" color="blue.500" _hover={{ textDecoration: "underline" }}>
            Create a product
          </Link>
        </Text>
      </VStack>
    </Container>
  );
};

export default HomePage;
