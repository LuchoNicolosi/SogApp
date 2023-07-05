import { Box, ChakraProvider } from '@chakra-ui/react';
import { Head } from 'next/head';
import { AnimatePresence } from 'framer-motion';

function MyApp({ Component, pageProps, router }) {
  return (
    <ChakraProvider>
      <AnimatePresence mode="wait" initial={false}>
        <header>
          <title>SogApp</title>
          <link rel="icon" href="/favicon.ico" />
        </header>
        <Component {...pageProps} key={router.asPath} />
      </AnimatePresence>
    </ChakraProvider>
  );
}

export default MyApp;
