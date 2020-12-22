import {AuthProvider} from '../auth';

const MyApp = ({ Component, pageProps }) => {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  )
}
export default MyApp;