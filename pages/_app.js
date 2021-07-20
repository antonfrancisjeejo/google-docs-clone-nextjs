import "tailwindcss/tailwind.css";
import "@material-tailwind/react/tailwind.css";
import Head from "next/head";
import { Provider } from "next-auth/client";
import "../styles.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
        <title>Google Docs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Provider session={pageProps.session}>
        {" "}
        {/* getaccess from getServerSideProps from index.js */}
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default MyApp;
