import React from 'react'
import "./Navbar.scss"
import IconLink from '../IconLink/IconLink'

const linksImage = [
  {name: "github", image: "github.png"},
  {name: "linkedin", image: "linkedin.png"}
]

const Navbar = () => {
  return (
    <div className='navbar'>
        <span>Plekson</span>
        <div className='links'>
            {linksImage.map((link) =>(
              <IconLink key={link.name} linkImage={link.image}/>
            ))}
        </div>
    </div>
  )
}

export default Navbar