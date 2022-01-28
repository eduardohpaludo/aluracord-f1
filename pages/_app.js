function GlobalStyle() {
    return (
      <style global jsx>{`
        @font-face {
          font-family: 'F1Bold';
          font-style: bold;
          font-weight: 800;
          font-display: swap;
          src: local('F1Bold'), url(/fonts/Formula1-Bold.woff2) format('woff2');
        }
        @font-face {
          font-family: 'F1Regular';
          font-weight: 500;
          font-display: swap;
          src: local('F1Regular'), url(/fonts/Formula1-Regular.woff2) format('woff2');
        }
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            list-style: none;
          }
          body {
            font-family: 'F1Bold', sans-serif;
          }
          /* App fit Height */ 
          html, body, #__next {
            min-height: 100vh;
            display: flex;
            flex: 1;
          }
          #__next {
            flex: 1;
          }
          #__next > * {
            flex: 1;
          }
          /* ./App fit Height */
        `}</style>
    );
  }  

export default function MyApp({ Component, pageProps }) {
    console.log('Roda em todas as páginas')
    return (
        <>
            <GlobalStyle/>
            <Component {...pageProps} />
        </>
    )
  }