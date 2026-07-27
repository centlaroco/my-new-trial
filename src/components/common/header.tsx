
export function Header() {
  return (
    <header className=" bg-white">
      <div className='max-w-7xl mx-auto flex items-center justify-between drop-shadow-lg rounded-xl px-6 py-4'>
        <div className='flex align-center gap-3 '>
          <span className="cursor-pointer flex content-center justify-center font-bold bg-green-700 text-white px-3 py-2 rounded-2xl shadow-md shadow-green-700/50 text-2xl  ">VL</span>
          <div className='flex flex-col gap-1 '>
            <h1 className='font-bold text-xl'>Vincent Laroco</h1>
            <small className='text-gray-500 text-sm'>BSIT 3D</small>
          </div>
        </div>

        <div className='flex items-center gap-3'>
          <input placeholder="Customer name (optional)" className='border border-gray-300 w-65 px-3 py-2 rounded-lg'></input>
          <button id="darkmode" className='cursor-pointer bg-green-700 px-3 py-2 rounded-lg shadow-md shadow-green-700/40 text-white text-md font-semibold  '>Download PDF</button>
        </div>
      </div>

    </header>
  )
}