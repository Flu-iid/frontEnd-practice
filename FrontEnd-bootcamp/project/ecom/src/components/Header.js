import React from 'react'

function Header() {
  return (
    <nav className='navbar'>
        <div className='leftSideHeader'>Home</div>
        <div className='rightSideHeader'>
            <div id='cartLogo'>
                Cart
            </div>
            <div className='userLogo'>
                User
            </div>
        </div>
    </nav>
  )
}

export default Header