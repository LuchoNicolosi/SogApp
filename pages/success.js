import { Box, Button, Flex, Link, Text } from '@chakra-ui/react';
import NextLink from 'next/link';
import { LuMedal } from 'react-icons/lu';
import React from 'react';
import { MotionLayout } from '../components/MotionLayout';

export default function Succes() {
  return (
    <MotionLayout>
      <Flex h="100vh" justifyContent="center" alignItems="center">
        <Flex
          w={{ md: 'lg' }}
          h="md"
          borderRadius="lg"
          boxShadow="0px 0px 10px 0px rgba(0,0,0,0.6);"
          justifyContent="space-between"
          alignItems="center"
          flexDirection="column"
          py="2rem"
        >
          <Flex alignItems="center" flexDirection="column" gap="2rem">
            <LuMedal size="80%" />
            <Box textAlign="center" fontSize="lg">
              <Text fontWeight="bold">¡Felicidades!</Text>
              <Text as="span" color="gray">
                Completaste tu entrenamiento.
              </Text>
            </Box>
          </Flex>
          <Flex gap="1.5rem">
            <Link as={NextLink} href="/dashboard">
              <Button>Volver al panel</Button>
            </Link>
          </Flex>
        </Flex>
      </Flex>
    </MotionLayout>
  );
}
