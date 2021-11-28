import Layout from '../components/Layout'
import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import { wrapper, store } from '../components/store/store';
import { Provider } from 'react-redux';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default wrapper.withRedux(MyApp)
