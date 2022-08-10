import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai';
import photo from '../../../assets/profile.avif'
function ProfileNavbar() {
  return (
    <div>
      <nav className='Navbar_Profile'>
        <div className='containerr'>
          <h2 className='log'>
            Alphagram
          </h2>
          <div className='Search-bar'>
            <AiOutlineSearch />
            <input type="search" placeholder='Search for creators,inspiractions,and projects' />
          </div>
          <div className='Create'>
            <label className='btn btn-primary' for="create-post">Create</label>
            <div className='profile-photo'>
              <img src={photo} alt='/' />
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default ProfileNavbar