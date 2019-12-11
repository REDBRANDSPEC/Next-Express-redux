import React, { useEffect } from 'react'
import App from 'next/app'
import { PageTransition } from 'next-page-transitions'
import { withRedux } from '../lib/redux'

import '../style/index.sass'
import '../style/error.sass'

const CustomApp = (props) => {
  const { Component, pageProps, router } = props;
  return (
    <>
      <PageTransition timeout={300} classNames="page-transition">
        <Component {...pageProps} key={router.route}/>
      </PageTransition>
     <style jsx global>{`
     .page-transition-enter {
       opacity: 0;
     }
     .page-transition-enter-active {
       opacity: 1;
       transition: opacity 300ms;
     }
     .page-transition-exit {
       opacity: 1;
     }
     .page-transition-exit-active {
       opacity: 0;
       transition: opacity 300ms;
     }
   `}</style>
   </>
  )
}

CustomApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);
  return { ...appProps }
}

export default withRedux(CustomApp)