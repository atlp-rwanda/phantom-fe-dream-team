import React,{useState} from 'react'
import TopNavbar from '../Dashboard/TopNavbar';
import { useSelector } from "react-redux";
import { selectAllPosts } from "../../redux/reducers/busesReducer";

export default function buses() {

  const getDataform=()=>{
    const data=localStorage.getItem('buses')
    if(data){
        return JSON.parse(data);
    }else{
        return []
    }
}
const [Buses,setBuses]=useState(getDataform())
console.log(Buses.state)

  const posts = useSelector(selectAllPosts)
  //large screen
  const cardElements = (Buses.state).map((item) => {
    return (
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
        <th scope="row" className="px-12 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
         {item.plateNo}
        </th>
        <td className="px-12 py-4">
        {item.routeNo}
        </td>
        <td className="px-12 py-4">
        {item.busType}
        </td>
        <td className="px-12 py-4">
        {item.seats}
        </td>
        <td className="px-12 py-4">
        <p className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</p>
        </td>
        <td class="px-12 py-4">
            <p className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Delete</p>
        </td>
    </tr>
    );
  });
  //small screen
  const Elements = (Buses.state).map((item) => {
    return (
        <>
 {/* //phone */}
 <div className="p-5 bg-gray-100 sm:block lg:hidden md:hidden 2xl:hidden mt-5">
 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:block lg:hidden md:hidden 2xl:hidden">
 <div className="bg-white space-y-3 p-4 rounded-lg shadow">
   <div className="flex items-center space-x-2 text-sm">
     <div>
       <p className="text-blue-500 font-bold hover:underline">{item.plateNo}</p>
     </div>   
   </div>
   <div>
       <span
         className="p-1.5 text-xs font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50">{item.busType}</span>
     </div>
   <div className="text-sm text-gray-700">
   {item.seats}
   </div>
   <div className="text-sm font-medium text-black">
   {item.routeNo}
   </div>
   <p className="font-medium text-blue-600 dark:text-blue-500 hover:underline" onClick={()=>handleDelete(item.ID)}>Delete</p>
 </div>
</div>
</div>
        </>
    );
  });
  return (
    <>
    <TopNavbar goto={e=>window.location.assign('/dashboard/Buses/AddBus')}/>

    {Elements}
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg justify-center text-center flex mt-10 mb-40 ">

    <table className="w-full text-sm text-left text-gray-700 dark:text-gray-400 sm:hidden lg:block md:block 2xl:block">
        <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-12 py-3">
                   Plate Number
                </th>
                <th scope="col" className="px-12 py-3">
                    Route Number
                </th>
                <th scope="col" className="px-12 py-3">
                    Bus Type
                </th>
                <th scope="col" className="px-12 py-3">
                    Seats
                </th>
                <th scope="col" className="px-12 py-3">
                   Action
                </th>
                <th scope="col" className="px-12 py-3">
                   Action
                </th>
            </tr>
        </thead>
        <tbody>
           {cardElements} 
        </tbody>
    </table>
</div>
</>
  )
}
