import "../styles/globals.css";
import Layout from "../components/Layout";

import Script from "next/script";
import Head from "next/head";

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=UA-145085705-1"></Script>
        {/* <Script>
          window.dataLayer = window.dataLayer || [];
          function gtag() {
            dataLayer.push(arguments);
            }
          gtag("js", new Date());

          gtag("config", "UA-145085705-1");
        </Script> */}

        <title>Jeffrey Almanzar</title>
        <meta charset="utf-8" />
        <meta name="description" content="Hi, my name is Jeffrey Almanzar. I’m a software engineer that loves implementing user interfaces following design guidelines, and I've
        been in the web development industry for 3+ years focusing mainly on frontend development in React JS." />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        {/* favicon */}
        <link rel="icon" type="image/png" href="favicon.png?v=2" sizes="32x32" />

        {/* fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;1,200&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet" />

        {/* boostrap */}
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
          crossorigin="anonymous" />

        {/* style.css */}
        <link rel="stylesheet" href="styles/style.css" />
        <link href="styles/projects.css" rel="stylesheet" />

        {/* jquery */}
        <link rel="stylesheet" href="//code.jquery.com/ui/1.13.1/themes/base/jquery-ui.css" />
        <Script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></Script>
        <Script src="https://code.jquery.com/ui/1.13.1/jquery-ui.js"></Script>

        {/* type js */}
        <Script src="js/typed.min.js"></Script>
        {/* scrollreveal */}
        <Script src="https://unpkg.com/scrollreveal@4.0.0/dist/scrollreveal.min.js"></Script>
        <Script src="https://kit.fontawesome.com/9718178124.js" crossorigin="anonymous"></Script>

        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
          crossorigin="anonymous"></Script>
        <Script src="js/script.js"></Script>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default App;
