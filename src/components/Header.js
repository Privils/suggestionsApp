import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Header = () => {
  return (
    <>
        <header className="main-header">
      <nav className="nav main-nav">
        <ul>
            <li>
                <Link to='/suggestionsAppnpm run b'>Home</Link>
            </li>
            <li>
                <Link to='Anime'>Anime</Link>
            </li>
            <li>
                <Link to='Movies'>Movies</Link>
            </li>
            <li>
                <Link to='Music'>Music</Link>
            </li>
        </ul>
      </nav>
      <h1 className='name'>pass time suggestions</h1>
  </header>
  <main>
    <Outlet />
  </main>
    </>
  )
}

export default Header
