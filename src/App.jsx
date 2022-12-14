import * as Dialog from '@radix-ui/react-dialog'
import React, { useState } from 'react'
import { ModalGetCoffee } from './components/ModalGetCoffee'
import './main.css'

function App() {
    const imgOpen = './menu-open.svg'
    const imgClose = './menu-close.svg'
    const [open, setOpen] = useState(false) //Estado para ativar o botão dos menus no screen sm

    const links =[
        {name:"Home",link:"/"},
        {name:"Menu",link:"/"},
        {name:"Recompensas",link:"/"},
        {name:"Gift Card",link:"/"},
        {name:"Lojas",link:"/"},
      ];

  return (
    <div>
      <header className='w-full mt-4 md:mt-[50px]'>
            <div className='md:flex justify-around py-4 md:px-10 px-7'>
                <div className='cursor-pointer'>
                      <span className='mr-1 pt-2'>
                          <img src="./logo-mobile.svg" alt="" />
                      </span>
                  </div>
                  <div 
                      onClick={()=>setOpen(!open)} 
                      className={`absolute right-8 top-11 cursor-pointer md:hidden`}>
                      <img src={open ?  imgClose : imgOpen } alt="" />       
                  </div>
                  <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-2 transition-all duration-500 ease-in ${open ? 'top-20 ':'hidden'}`}>
                      {
                      links.map((link)=>(
                          <li key={link.name} className='md:ml-8 md:my-0 my-7 border-b md:border-none border-zinc-400/60 pb-4 pl-5'>
                              <a href={link.link} className='text-white hover:text-gray-400 duration-500'>{link.name}</a>
                          </li>
                      ))
                      }
                  </ul>
                  <div className={`mt-28 md:hidden ${open ? 'hidden':''}`}>
                      <p className='text-white text-3xl font-medium text-center'>O café que fará seu código decolar para o próximo nível.</p>
                  </div>
                    <Dialog.Root>
                    <div className='flex justify-center md:block'> 
                      <Dialog.Trigger className={`flex items-center gap-[14px] md:ml-8 text-white border border-purple-700 rounded-lg py-2 px-6 ${open ? 'hidden md:block': 'mt-20 md:mt-0 md:ml-0'}`}>
                        PEGAR MEU CAFÉ
                        <span className='md:hidden'>
                          <img src="./arrow.svg" alt="" />
                        </span>
                      </Dialog.Trigger>
                    </div>
                      <ModalGetCoffee></ModalGetCoffee>
                    </Dialog.Root>
                      
                  
              </div>
      </header>

      <main className={`${open ? 'hidden md:block' : ''}`}>
        <div className="flex flex-col items-center font-semibold md:text-7xl text-[50px] mt-[98px] bg-blur bg-cover bg-no-repeat bg-center md:bg-none">
          <p className="text-white">Great Coffee</p>
          <span className="text-black drop-shadow-greatcoffee">&lt;Great Code/&gt;</span>
          <img src="./rocket-coffee.png" alt="" className="mt-[25px]" />
        </div>
       
        
      </main>
      <footer className="text-white">
      </footer>
    </div>
  )
}

export default App
