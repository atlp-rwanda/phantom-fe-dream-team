

export default function TopNav(){
    return (
        <>
            <div className='flex bg-white items-center  border-2 border-solid border-white border-b-black sm:h-28 w-full h-20 sm:flex-col'>

                <div className='flex text-blue-600'>
                    <div className='w-20 h-12'>
                        <img
                        src={icon} />
                    </div>
                    <div className="text-blue-800 mt-3 ml-16">
                        <h1>
                        ADMIN DASHBOARD</h1>
                    </div>

                </div>


                <div className='flex ml-4 sm:mb-40'>
                    <div>
                        <Link to="/add">
                        <img className="h-8 w-8 mt-1 sm:p-2 "
                            src={add} />
                        </Link>
                    </div>

                    <div className="flex ml-2">

                        <div className="relative">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                            <button type="submit" className="p-1">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="w-6 h-6"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                            </button>
                        </span>
                        <input type="search" name="q" className="py-2 text-sm text-white border-2 border-solid rounded-md pl-10 focus:outline-none focus:bg-white focus:text-gray-900"></input>
                        </div>

                    </div>
                </div>



            </div>

        </>
    )
}