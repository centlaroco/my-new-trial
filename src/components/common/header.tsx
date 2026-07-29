import { NavLink } from "react-router";

export function Header() {
  return (
    <header className="bg-white shadow-md shadow-gray-300">
      <div className='max-w-7xl  mx-auto flex items-center justify-between  px-6 py-4'>
        <div className='flex align-center gap-3 '>
          <NavLink to="/" className="cursor-pointer flex content-center justify-center font-bold bg-green-700 text-white px-3 py-2 rounded-2xl shadow-md shadow-green-700/50 text-2xl  ">VL</NavLink>
          <div className='flex flex-col gap-1 '>
            <h1 className='font-bold text-xl'>Vincent Laroco</h1>
            <small className='text-gray-500 text-sm font-semibold'>BSIT 3D</small>
          </div>
        </div>

        <nav className='flex gap-7 items-center text-gray-600 font-semibold text-md' >
          <NavLink to="/" >Home</NavLink>
          <NavLink to="/">About</NavLink>
          <NavLink to="/">Projects</NavLink>
        </nav>  

        <NavLink to="/">
          <button id="darkmode" className='cursor-pointer bg-green-700 hover:bg-gray-600 px-5 py-2 rounded-full shadow-md shadow-green-700/40 text-white text-md font-semibold  '>Services</button>
        </NavLink>
      </div>

    </header>
  )
}