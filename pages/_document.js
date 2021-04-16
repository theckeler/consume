import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" >
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=UA-13216567-1`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-13216567-1', {
              page_path: window.location.pathname,
            });
          `,
          }}
        />
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html >
    )
  }
}