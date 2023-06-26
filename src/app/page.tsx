import Image from 'next/image'

function Square (){
 //banner
    return (
        <div>
            welcome to the crypto grocery
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

function lists (){
    let t = (<li>test</li>);
    let t1 = (<div className='board-row'>{t}</div>);
    let tmp = [];
    for (var i =0;i<100;i++){
        if(i%3==0){
            tmp.push(t1);
        }else{
            tmp.push(t);
        }

    }
    return (tmp);
}


export default function Home() {
  return (
  <>
    <div className='bg-gray-900'>
        <Square />
        <Square2 />
        <lists />
    </div>

  </>
  )
}

