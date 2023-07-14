'use client'
import React, {Component} from 'react'
let products = ['lectuce', 'tomato', 'cabbage' , 'carrot'];

export default function Home() {
    return (<Produce_list> obj</Produce_list>);
}


class Produce_list extends React.Component{
    //note to self turn this into a function
    render(){
        return (
            this.create_list()
        );
    }
    create_list(){
    let t = (<button
        className = 'bg-neutral-700 p-4'
        onClick={()=> alert('test')}>
            test
        </button>);
    let show = true;
    let collapse = (
        <button
        onClick={()=> {this.show = !this.show;}}
        >
            this is a button
        </button>
    );
    let t1 = (<div className='
        w-3/4 grid gap-4 grid-cols-3 grid-rows-flex m-8'
    >
    {
        show ? <div>{t} {t} {t}</div> : null
    }
    </div>);
    let tmp = [];
    tmp.push(collapse);
    for (var i =0;i<products.length;i++){
            tmp.push(t1);
    }
    return (tmp);
    }
}
