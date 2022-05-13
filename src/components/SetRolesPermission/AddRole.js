import React from 'react'
function AddRole() {

  return (

    <div className=''>
      <div className=" w-full h-full md: block justify-start pt-[100px] pb-[80px] p-8 ">
        <div className="block w-full">
          <h2 className='font-bold'>ADD USER ROLE</h2>
        </div>
        <div className="flex pt-8">
          <div className="flex-col">
            <h3 className="mt-2">User Role:</h3>
            <h3 className="mt-2">Permissions:</h3>
          </div>
          <div className="pl-4">
            <div className='mt-2 '>
              <input type="text" id='' placeholder='Enter Role Name' className='border border-solid-2 border-black rounded' />
            </div>
            <div>
                              
            <h1 className="font-bold text-blue-700"> Select Permissions</h1>
              <tr className='flex flex-col'>

                  <td className="flex"><input type="checkbox" id='delete1' className="mt-2 mr-2" />Check All Permissions</td>
                  <td className="flex"><input type="checkbox" id='read2' className="mt-2 mr-2" />assign driver to bus</td>
                  <td className="flex"><input type="checkbox" id='add2' className="mt-2 mr-2" />edit driver to bus</td>
                  <td className="flex"><input type="checkbox" id='edit2' className="mt-2 mr-2" />delete driver to bus</td>
                  <td className="flex"><input type="checkbox" id='delete2' className="mt-2 mr-2" />View drivers</td>
                  <td className="flex"><input type="checkbox" id='delete2' className="mt-2 mr-2" />add driver</td>
                  <td className="flex"><input type="checkbox" id='delete2' className="mt-2 mr-2" />edit driver</td>
                  <td className="flex"><input type="checkbox" id='delete2' className="mt-2 mr-2" />View buses</td>
                  <td className="flex"><input type="checkbox" id='delete2' className="mt-2 mr-2" />Add bus</td>
                  <td className="flex"><input type="checkbox" id='delete2' className="mt-2 mr-2" />edit bus</td>
                  <td className="flex"><input type="checkbox" id='delete2' className="mt-2 mr-2" />delete bus</td>

                  <td className="flex"><input type="checkbox" id='delete2' className="mt-2 mr-2" />view route</td>
                  <td className="flex"><input type="checkbox" id='delete2' className="mt-2 mr-2" />add route</td>
                  <td className="flex"><input type="checkbox" id='delete2' className="mt-2 mr-2" />update route</td>
                  <td className="flex"><input type="checkbox" id='delete2' className="mt-2 mr-2" />delete route</td>
                

              </tr>
            </div>

          </div>
        </div>
        <div className="flex mt-12">
          <div className="pr-9">
            <button className="bg-white border-2 border-black px-4 w-[100px] text-[14px] hover:bg-black hover:text-white">Cancel</button>
          </div>
          <div>
            <button className="bg-white border-2 border-black px-4 w-[100px] text-[14px] hover:bg-black hover:text-white">Save</button>
          </div>
        </div>


      </div>

    </div >
  )
}

export default AddRole