"use client"
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { VStack, Input, Textarea, Button, Box } from '@chakra-ui/react';

export default function ProfileForm () {
  const { register, handleSubmit} = useForm();
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (data: any) => {
    console.log(data);
    setSubmitted(true);
  };

  return (
    <Box maxW="400px" mx="auto" p="6">
      <VStack as="form" onSubmit={handleSubmit(onSubmit)} spacing={4} role="form">
        <Input
          {...register("name", { required: true })}
          placeholder="Name*"
          aria-label="Name"
        />

        <Input
          {...register("email", { required: true })}
          type="email"
          placeholder="Email*"
          aria-label="Email"
        />

        <Textarea
          {...register("comment", { required: true })}
          placeholder="Comment*"
          aria-label="Comment"
        />

        <Button type="submit" colorScheme="blue" disabled={submitted}>
          Guardar
        </Button>
      </VStack>
    </Box>
  );
};
