import React from 'react'
import appLogo from '../assets/images/app-logo.png'

export default function NavBar() {
    return (
        <div>
            <nav className='pt-2 pb-2 pl-6 pr-6 '>
                <div className='flex justify-between items-center'>
                    <div className='flex items-center'>
                        <img src={appLogo} alt="app logo" className='pr-1 w-20 scale-150'/>
                        <div className='text-2xl pr-7 '>PawRover</div>
                        {/* <img src={appLogo} alt="app logo" style={{ paddingRight: '16px', height: '64px', width: '64px' }} /> */}
                        <div className='pr-6'>Find pet sitter</div>
                        <div>Find house sit</div>

                    </div>
                    <div className='flex items-center'>
                        <div className='pr-6'>About</div>
                        <div className='pr-6'>How we work</div>
                        <div className='button'>Contact Us</div>

                    </div>
                </div>
            </nav>


        </div>

    )
}
