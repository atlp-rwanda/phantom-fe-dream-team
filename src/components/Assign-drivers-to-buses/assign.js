import React, { useState, useEffect } from 'react';
import dataBus from "./buses-data.json";
import TopNavbar from '../Dashboard/TopNavbar';
import { useDispatch, useSelector } from "react-redux";
import { DeleteAssign } from '../../redux/reducers/AssignSlice';
import { Icon } from '@iconify/react';

function AssignDrivers() {

    const [data, setData] = useState("");
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null);
    const dispatch = useDispatch();
    const assignList = useSelector((state) => state.AssignReducer.value);
    const [editdriverid, setEditbusid] = useState(null)

    function Deleted(ID) {
        console.log("ID:",ID)
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


    //edit form
    const [editFormData, setEditFormData] = useState({
        Drivers: "",
        Plate: "",
    });
    //edit button
    const handleEditClick = (event, item) => {
        event.preventDefault();
        setEditdriverid(item.id);
        //get edit form data
        const formValues = {
            Drivers: item.Drivers,
            Plate: item.Plate,

        };
        setEditFormData(formValues);
    }




    return (
        <>

            <TopNavbar goto={e => window.location.assign('/dashboard/AddAssign')} />

            <div className="relative overflow-x-auto  justify-center text-center flex mt-10 mb-40 ">
                <table className="w-full  text-left text-gray-700 dark:text-gray-400 sm:hidden lg:block md:block 2xl:block">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
                        <tr>

                            <th scope="col" className="px-16 py-3">Drivers</th>
                            <th scope="col" className="px-16 py-3">Buses</th>
                            <th scope="col" className="px-16 py-3">Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {data && data.map((bus) => {
                            return (
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <td scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">{bus.Driver}</td>
                                    <td scope="col" className="px-16 py-3">{bus.Plate}</td>
                                    <td>
                                        <button
                                            onClick={(event) => handleEditClick(event, item)}
                                            scope="col" className="px-16 py-3">EDIT</button>
                                        <button onClick={ () => Deleted(bus.id)
                                           
                                            
                                            }
                                        >DELETE</button>
                                    </td>
                                </tr>
                            )
                        }
                        )}

                    </tbody>
                </table>

                {/*On Phone */}
                <div className=" p-5 sm:block lg:hidden md:hidden 2xl:hidden mt-5">
                    <table className='grid grid-cols-1 sm:grid-cols-2 gap-4 sm:block lg:hidden md:hidden 2xl:hidden'>
                        <thead className=' space-y-3 p-4 rounded-lg shadow sm:hidden'>
                            <tr className="flex items-center text-xs">
                                <th className="text-xs">Drivers</th>
                                <th className="text-xs">Buses</th>
                                <th className="text-xs">Action</th>
                            </tr>
                        </thead>

                        <tbody>

                            {data && data.map((bus) => {
                                return (
                                    <tr>
                                        <td className="text-xs">{bus.Driver}</td>
                                        <td className="text-xs">{bus.Plate}</td>
                                        <td>
                                            <button className="text-xs">EDIT</button>
                                            <button className="text-xs"
                                            onClick={
                                                Deleted()
                                            } >DELETE</button>



                                        </td>
                                    </tr>
                                )
                            }
                            )}
                        </tbody>

                    </table>
                   
                
                 </div>
                </div>

    
        </>

                                              
                                    
)}
export default AssignDrivers;