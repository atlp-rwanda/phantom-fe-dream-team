import React,{Fragment,useState} from 'react'
import TopNavbar from '../Dashboard/TopNavbar';
import { useSelector,useDispatch } from "react-redux";
import { deleteBus, selectAllPosts,updateBuses} from "../../redux/reducers/busesReducer";
import ReadOnlyRow from "./readonlyrow"
import EditableRow from './editablerow';

export default function buses() {
  const [editbusid,setEditbusid]=useState(null)
  const dispatch = useDispatch();
//get all data
  const posts = useSelector(selectAllPosts)
//edit form
  const [editFormData, setEditFormData] = useState({
    plateNo: "",
    routeNo: "",
    busType: "",
    seats: ""
  });

  //update buses
  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };
  const handleEditFormSubmit = (event,item) => {
    event.preventDefault();
    dispatch(updateBuses(
      {id:item.id ,
      plateNo:editFormData.plateNo,
      routeNo:editFormData.routeNo,
      busType:editFormData.busType,
      seats:editFormData.seats
    }))
    setEditbusid(null);
}
//end


//edit button
const handleEditClick=(event,item)=>{
  event.preventDefault();
  setEditbusid(item.id);
  //get edit form data
  const formValues = {
    plateNo: item.plateNo,
    routeNo:  item.routeNo,
    busType: item.busType,
    seats: item.seats
  };
  setEditFormData(formValues);
}
//cancel button
const handleCancelClick=()=>{
  setEditbusid(null);
}
  //on large screen
  const cardElements = posts.map((item) => {
    return (
    <Fragment>
    {/* <ReadOnlyRow item={item}/>
    <EditableRow/> */}
     {editbusid === item.id ? (
                <EditableRow
                  item={item}
                  editFormData={editFormData}
                  handleEditFormChange={handleEditFormChange}
                  handleEditFormSubmit={handleEditFormSubmit}
                  handleCancelClick={handleCancelClick}
                />
              ) : (
                <ReadOnlyRow 
                  item={item}
                  handleEditClick={handleEditClick}
                />
              )}
    </Fragment>
    );
  });
  //on small screen
  const Elements = posts.map((item) => {
    return (
        <>
 <div className="p-5 bg-gray-100 sm:block lg:hidden md:hidden 2xl:hidden mt-5">
 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:block lg:hidden md:hidden 2xl:hidden">
 <div className="bg-white space-y-3 p-4 rounded-lg shadow">
   <div className="flex items-center space-x-2 text-sm">
     <div className='flex flex-row'>
        <p className='mr-2'>PlateNo: </p>
       <p className="text-blue-500 font-bold hover:underline">{item.plateNo}</p>
     </div>   
   </div>
   <div>
       <span
         className="p-1.5 text-xs font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50">{item.busType}</span>
     </div>
   <div className="text-sm text-gray-700 flex flex-row">
   <p className='mr-2'>Seats: </p>
   {item.seats}
   </div>
   <div className="text-sm font-medium text-black flex flex-row">
   <p className='mr-2'>RouteNo: </p>
   {item.routeNo}
   </div>
   <p className="font-medium text-blue-600 dark:text-blue-500 hover:underline"  
   onClick={() => {
                  dispatch(deleteBus(item.id));
                }}>Delete</p>
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
                <th scope="col" className="px-12 py-3 sr-only">
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
