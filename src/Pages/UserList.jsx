import React, { useEffect, useState } from 'react'
import { AiFillEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { useParams } from 'react-router-dom'
import { useData } from '../Context/AppContext';
import Pagenavigation from '../Components/Pagenavigation';
import Footer from '../Components/Footer';
import { RxCross2 } from "react-icons/rx";

function UserList() {

  const { pageId } = useParams();
  const { getUsers, removeUser, navigate, user } = useData();
  const [showAction, setShowAction] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      await getUsers(pageId);
      setLoading(false);
    };
    fetchUsers();
  }, [pageId]);

  return (
    <>
      <div className='w-full min-h-screen px-3 sm:px-5 md:px-8 pt-3 sm:pt-5 md:pt-8  bg-gradient-to-b from-cyan-200 to-white'>
        <div className=''>
          <h1 className='text-lg sm:text-xl md:text-2xl  font-bold mb-3'>User List - Page{pageId}</h1>
          {loading ?
            <div className='flex justify-center items-center h-screen'>
              <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
            </div> :
            <>
              {user.length === 0 ?
                <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                  <h1 className='text-2xl font-bold'>No users found. Please check another page or reload.</h1>
                </div> :
                <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0.5 md:gap-2 lg:gap-4'>
                  {user.map((item) => (
                    <div key={item.id} className='relative bg-white gap-4 flex items-center p-4 m-2 rounded-lg shadow-md min-w-fit'>
                      {showAction !== item.id ?
                        <>
                          <div onClick={
                            () => {
                              setShowAction(item.id)
                            }
                          } className='w-full h-full cursor-pointer flex items-center gap-4'>
                            <img className='rounded-full w-10 h-10 sm:w-14 sm:h-14 md:w-20 md:h-20' src={item.avatar} alt="avtar" />
                            <div className="">
                              <h2 className='text-lg font-semibold'>{item.first_name} {item.last_name}</h2>
                              <p>{item.email}</p>
                            </div>
                          </div>
                        </> :
                        <div className='flex items-center justify-between h-10 sm:h-14 md:h-20 w-full relative px-6'>
                          <button onClick={
                            () => {
                              navigate(`/edit-user/${item.id}`, { state: item })
                              setShowAction(null)
                            }
                          } className=' text-green-500 hover:text-green-700 text-sm sm:text-base md:text-lg mr-2 flex items-center gap-2'> <h1 className='text-sm sm:text-base md:text-lg '>EDIT USER</h1><AiFillEdit /></button>
                          <button onClick={() => {
                            removeUser(item.id, pageId)
                            setShowAction(null)
                          }} className=' text-red-500 hover:text-red-700 text-sm sm:text-base md:text-lg flex items-center gap-2'><h1 className='text-sm sm:text-base md:text-lg '>DELETE USER</h1><MdDelete /></button>
                          <button className='absolute top-0 right-0' onClick={() => { setShowAction(null) }}><RxCross2 /></button>
                        </div>
                      }
                    </div>
                  ))}
                </div>
              }
            </>}
        </div>
      </div>
      <div className='w-full px-10 pt-8 flex justify-center items-center'>
        <div className='flex justify-center items-center w-fit '>
          <Pagenavigation />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default UserList