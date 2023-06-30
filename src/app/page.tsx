'use client'
import Image from 'next/image'
import { useState } from 'react'

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


function Sample (){
    let t = (<button
        className = 'bg-neutral-700 p-4'
        onClick={()=> alert('test')}>
            test
        </button>);
    let show = false;
    let collapse = (
        <button
        onClick={()=> {show = !show;}}
        >
        this is a button
        </button>
    );
    let t1 = (<div className='
    w-3/4 grid gap-4 grid-cols-3 grid-rows-flex m-8'
    >
    {t}{t}{t}
    </div>);
    let tmp = [];
    tmp.push(collapse);
    for (var i =0;i<100;i++){
            tmp.push(t1);
    }
    return (tmp);
}


export default function Home() {
  return (
  <>
    <div className='bg-gray-900'>
        <Square />
        <Square2 />
        <Sample />
    </div>

  </>
  )
}

