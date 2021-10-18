import { Provider } from 'react-redux'
import { store } from '../app/store'
import {Provider as AuthProvider} from 'next-auth/client'
import '../styles/globals.css'

const MyApp = ({ Component, pageProps }) => {
  return (
    <AuthProvider session={pageProps.session}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </AuthProvider>
  )
}

export default MyApp
