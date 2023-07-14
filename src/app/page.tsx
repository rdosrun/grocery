'use client'
import Image from 'next/image'
import { useState } from 'react'
import Main from './pages/produce'
function Square (){
 //banner
    return (
        <div>
            Title
        </div>
    );
}

function Square2 (){
//search
return(
    <>
    <input className='
        rounded-lg  bg-gray-900  text-slate-600
        border-2  border-slate-700 w-5/6
    '>

    </input>
    <button>
        search
    </button>
    <button>
        cart
    </button>
    <button>
        account
    </button>
    </>
    )
}


export default function Home() {
  return (
  <>
    <div className='bg-gray-900'>
        <Square />
        <Square2 />
        <Main />
    </div>

  </>
  )
}

