import React from 'react'
import { useData } from '../Context/AppContext'

function Pagenavigation() {
    const {Data, navigate } = useData();
    
    return (
        <div className="overflow-x-scroll overflow-y-hidden w-[100%] h-16 flex justify-center items-center bg-white shadow-md rounded-lg mt-4 mb-4 px-10 py-3 ">
          <div className="flex space-x-2 whitespace-nowrap gap-3">
            {Array.from({ length: Data.total_pages }).map((_, index) => (
              <div
                onClick={() => navigate(`/user-list/page/${index + 1}`)}
                key={index}
                className="flex items-center justify-center w-10 h-10 bg-cyan-400 rounded-lg cursor-pointer hover:bg-cyan-500"
              >
                <h1 className="text-white font-bold">{index + 1}</h1>
              </div>
            ))}
          </div>
        </div>
      );
      
}

export default Pagenavigation