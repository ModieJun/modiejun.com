import type { AppProps } from 'next/app'
import { NavBar } from '../components/Nav'
import '../theme/styles.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // <ChakraProvider theme={theme}>
    <div className="bg-gray-100 dark:bg-gray-800">
      <div className="lg:vstack  relative h-screen w-full ">
        <NavBar />
        <Component {...pageProps} />
      </div>
    </div>
    // </ChakraProvider>
  )
}

export default MyApp
