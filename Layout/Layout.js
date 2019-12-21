import React from 'react'
const Layout = ({ children }) => {
  return(
    <>
    <header className="header_conteiner fx_ctr align">
      <nav>
        <h1>SSR Блог</h1>
      </nav>
    </header>
    <main className="main_conteiner fx_ctr colum align">
      { children }
    </main>
    <footer  className="footer_conteiner fx_ctr">

    </footer>
    </>
  )
}


export default Layout