import { Provider } from "next-auth/client";
import Layout from "../components/layout/layout";

function MyApp({ Component, pageProps }) {
  return (

    //we added this wrapper to make nextjs optimize itself internally 
    //and skip some requests and unneccerray html code 
    <Provider session={pageProps.session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
// import '../styles/globals.css'

// function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }

// export default MyApp