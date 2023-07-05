import React, { useState } from 'react';
import { MotionLayout } from '../components/MotionLayout';
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';

export default function Dashboard() {
  const [vueltas, setVueltas] = useState('');
  const [minutos, setMinutos] = useState('');
  const [descanso, setDescanso] = useState('');
  const router = useRouter();
  function handleSubdmit(e) {
    e.preventDefault();
    router.push({
      pathname: '/play',
      query: {
        vueltas,
        minutos,
        descanso,
      },
    });
  }

  return (
    <MotionLayout>
      <Flex h="100vh" justifyContent="center" alignItems="center">
        <Flex
          w={{ md: 'lg' }}
          h="lg"
          borderRadius="lg"
          boxShadow="0px 0px 10px 0px rgba(0,0,0,0.6);"
          justifyContent="space-between"
          alignItems="center"
          flexDirection="column"
          p="2rem"
          as="form"
          onSubmit={handleSubdmit}
        >
          <FormControl>
            <FormLabel>Ingrese los minutos de cardio</FormLabel>
            <Input
              type="number"
              onChange={(e) => {
                setMinutos(+e.target.value);
              }}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Ingrese los minutos de descanso</FormLabel>
            <Input
              type="number"
              onChange={(e) => {
                setDescanso(+e.target.value);
              }}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Ingrese la cantidad de vueltas</FormLabel>
            <Input
              type="number"
              onChange={(e) => {
                setVueltas(+e.target.value);
              }}
            />
          </FormControl>
          <Button type="submit">¡Comencemos!</Button>
        </Flex>
      </Flex>
    </MotionLayout>
  );
}
