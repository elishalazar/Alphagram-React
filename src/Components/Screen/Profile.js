import React from 'react'
import ProfileNavbar from './ProfileComponents/ProfileNavbar';
import Main from './ProfileComponents/Main'
import Theme from './ProfileComponents/Theme'

const Profile = () => {
    return (
        <>
            <ProfileNavbar />
            <Main />
            <Theme />
        </>
    )
}

export default Profile;