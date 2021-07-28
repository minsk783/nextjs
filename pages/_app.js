import '../styles/globals.css'
import { ReactDOM } from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons'
import { faFile } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCloudUploadAlt, faFile)

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
