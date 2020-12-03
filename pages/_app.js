import Layout from '../components/Layout';
import '../styles/animate.css';
import '../styles/bootstrap.css';
import '../styles/custom.css';
import '../styles/dark.css';
import '../styles/font-icons.css';
import '../styles/fonts.css';
import '../styles/freelancer.css';
import '../styles/magnific-popup.css';
import '../styles/style.css';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
