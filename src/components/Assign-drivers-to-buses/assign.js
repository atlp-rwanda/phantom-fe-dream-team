import React, { useState, useEffect } from 'react';
import TopNavbar from '../Dashboard/TopNavbar';



function AssignDrivers() {

    const [data, setData] = useState("");
    const [loading, setLoading] = useState(true)
    

  
function deleted(ID) {
    fetch('http://localhost:8000/assignDrivers/' + ID, {
        method: 'DELETE'
      }).then(() => {
      window.location.reload()
    })
}
    
    

    useEffect(() => {
        fetch('http://localhost:8000/assignDrivers')
            .then(res => {
                if (!res.ok) { // get the error from server
                    throw Error('could not fetch the data for that resource');
                }
                return res.json();
            })
            .then(data => {
                setData(data);
                setLoading(false);
                setError(null);
            }).catch(err => {
                // cathes Network/connection error
                setLoading(false);
                setError(err.message);
            })
    }, []);

    return (
        <>

            <TopNavbar goto={e => window.location.assign('/dashboard/Drivers/Assign')} />

            {/*On Phone */}
                
            {data && data.map((bus) => {
                return (
                    <div className="p-5 bg-gray-100 sm:block lg:hidden md:hidden 2xl:hidden mt-5 sm:flex-col">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:block lg:hidden md:hidden 2xl:hidden">
                            <div className="bg-white space-y-3 p-4 rounded-lg shadow">
                                <div className="flex items-center space-x-2 text-sm">
                                    <div className='flex flex-row'>
                                        <p className='mr-2'>Drivers: </p>
                                        <p className="text-blue-500 font-bold hover:underline" >{bus.Driver}</p>
                                    </div>   
                                </div>
                                
                                <div className="text-sm text-gray-700 flex flex-row">
                                    <p className='mr-2'>BUSES: </p>
                                    {bus.Plate}
                                </div>
                                <div className="text-sm font-medium text-black flex flex-row">
                                    <p className='mr-2'>ACTION: </p>
                                    <p className="text-sm font-medium text-black flex flex-row"> <button onClick={
                                        () => deleted(bus.id)
                                    }>DELETE</button></p>
                                </div>
                            </div>
                    </div>
                   </div>
                )
            }
            )}

            {/*On large screen */}

            <div className="relative overflow-x-auto  justify-center text-center flex mt-10 mb-40 ">
                <table className="w-full  text-left text-gray-700 dark:text-gray-400 sm:hidden lg:block md:block 2xl:block">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-16 py-3">DRIVER</th>
                            <th scope="col" className="px-16 py-3">BUS</th>
                            <th scope="col" className="px-16 py-3">ACTIONS</th>                        
                        </tr>
                    </thead>
                    <tbody>
                        {data && data.map((bus) => {
                            return (
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <td scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">{bus.Driver}</td>
                                    <td scope="col" className="px-16 py-3">{bus.Plate}</td>
                                    <td scope="col" className="px-16 py-3">
                                    <button onClick={
                                        () => deleted(bus.id)
                                    }>DELETE</button>
                                    </td>                                  
                                </tr>
                            )
                        }
                        )}
                    </tbody>
                </table>

                </div>

        </>

                                              
                                    
)}
export default AssignDrivers;