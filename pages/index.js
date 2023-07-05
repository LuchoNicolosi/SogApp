import Head from 'next/head';
import NextLink from 'next/link';
import { Box, Button, Flex, Link, Text } from '@chakra-ui/react';
import { MotionLayout } from '../components/MotionLayout';
export default function Home() {
  return (
    <>
      <MotionLayout>
        <Flex
          minHeight="100vh"
          p="4rem 0"
          flex="1"
          flexDirection="column"
          placeContent="center"
        >
          <Flex textAlign="center" flexDirection="column" gap={2}>
            <Text lineHeight="1.15" fontSize="4rem">
              Bienvenido a SogApp
            </Text>
            <Text as="span" color="gray" fontWeight="semibold">
              Tu aplicacion favorita para saltar la soga!
            </Text>
          </Flex>

          <Link
            marginTop="3em"
            alignSelf="center"
            as={NextLink}
            href="/dashboard"
            textDecoration="none !important"
          >
            <Button
              border="1px solid #000"
              color="#000"
              _hover={{
                bg: '#000',
                color: '#fff',
                border: '1px solid #000',
              }}
              bg="inherit"
              borderRadius="md"
              p="0.5em 2.5em 0.5em 2.5em"
              fontSize="2xl"
            >
              Comenzar
            </Button>
          </Link>
        </Flex>
        <Box
          as="footer"
          display="flex"
          p="2rem 0"
          borderTop="1px solid #eaeaea"
          flex="1"
          justifyContent="center"
          alignItems="center"
        >
          <Link
            _hover={{
              textDecoration: 'underline',
            }}
            href="https://www.linkedin.com/in/luciano-nicolosi/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Desarrollado por Luciano Nicolosi
          </Link>
        </Box>
      </MotionLayout>
    </>
  );
}
