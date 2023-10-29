import React from 'react'
import PlayStore from '../../assets/Images/Play_store.png'
import MicrosoftStore from '../../assets/Images/Microsoft_store.png'

export default function GetApp() {
    return (<React.Fragment>
        <p className='text-center'>Get the app.</p>
        <div className='flex justify-center m-4'>
            <a href='#'><img className='h-11 w-36 mr-7' src={PlayStore} /></a>
            <a href='#'><img className='h-11 w-32' src={MicrosoftStore} /></a>
        </div>
    </React.Fragment>
    )
}
