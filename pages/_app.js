import "../styles/globals.css";
import Layout from "../components/Layout";

import Head from "next/head";

function App({ Component, pageProps }) {
  return (
    <>
      <Head />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default App;
