import "../styles/globals.css";
import Layout from "../components/Layout";

import Head from "next/head";

import { ChakraProvider } from '@chakra-ui/react'


function App({ Component, pageProps }) {
  return (
    <>
      <Head />
      <Layout>
        <ChakraProvider>
          <Component {...pageProps} />
        </ChakraProvider>
      </Layout>
    </>
  );
}

export default App;
