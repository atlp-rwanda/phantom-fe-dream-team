import React from "react"


function App() {
    return (<div>
        <h2 className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-4 mt-4">Welcome To Phantom</h2>
        <h3 className="text-3xl font-bold underline">Date : {new Date().toDateString()}</h3>
       
    </div>)
}
export default App;

