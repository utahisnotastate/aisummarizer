import React from 'react'
import {logo} from '../assets'

const Hero = () => {
    return (
        <div className="hero">
           <header className="w-fullflex justify-center items-center flex-col">
               <nav className="flex justify-between items-center flex-col">
                   <img src={logo} alt="sums logo" className="w-28 object-contain" />
                   <button type={`button`} onClick={() => window.open(`https://github.com/utahisnotastate`)} className={`black_btn`}>Github</button>
               </nav>
               <h1 className='head_text'>
                   Summarize Articles with <br className='max-md:hidden' />
                   <span className='orange_gradient '>OpenAI GPT-4</span>
               </h1>
               <h2 className='desc'>
                   Simplify your reading with Summize, an open-source article summarizer
                   that transforms lengthy articles into clear and concise summaries
               </h2>

           </header>
        </div>
    )
}

export default Hero
