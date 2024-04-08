"use client"
import { Box, Button, Center, Heading, Text } from "@chakra-ui/react";
import React, { useState } from 'react';
export default function Home() {

  const [frase, setFrase] = useState('');

  const getExpression = () => {
    fetch(' http://localhost:3001/api/frases')
      .then(response => response.json())
      .then(data => setFrase(data.expression))
      .catch(error => console.error('Error al obtener la frase:', error));
  };

  return (
    <Center h="100vh">
      <Box p="6" w="80%" maxW="400px" borderWidth="1px" borderRadius="lg" boxShadow="lg" textAlign="center">
        <Heading as="h1" size="lg" mb="4">
          Frases inspiradoras
        </Heading>
        {(frase && (
          <Text fontSize="xl" mb="4">
            {frase}
          </Text>
        )) || "Toaca el boton"}
        <Center>
          <Button type="submit" onClick={getExpression} colorScheme="blue">
            Guardar
          </Button>
        </Center>
      </Box>
    </Center>
  );
}
