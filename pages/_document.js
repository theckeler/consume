import Document, { Html, Head, Main, NextScript } from 'next/document'
import { useRouter } from 'next/router'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body className="test">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}