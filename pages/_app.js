
import Layout from '../components/layout/layout';
function MyApp({ Component, pageProps, session }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp;
