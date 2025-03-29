import axios from 'axios';
import React, { createContext, use, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const Context = createContext();

function AppContext({ children }) {

    const navigate = useNavigate();
    const [Data, setData] = useState([]);
    const [user, setuser] = useState([]);


    const getUsers = async (pageid) => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/users?page=${pageid}`)
            setData(response.data)
            setuser(response.data.data);
        } catch (error) {
            console.log(error)
        }
    }

    const removeUser = async (userid,pageid) => {
        try {
            const response = await axios.delete(`${import.meta.env.VITE_BASE_URL}/api/users/${userid}`)
            console.log(response.status)
            if (response.status === 200 || response.status === 204) {
                setuser(prevUsers => prevUsers.filter(user => user.id !== userid));
                await getUsers(pageid);
            }
            alert('User deleted successfully');
        } catch (error) {
            console.log('error' , error);
        }
    }

    const updateUser = async (id, data) => {
        try {
            const userData = {
                first_name: data.firstName,
                last_name: data.lastName,
                email: data.email,
                avatar: data.avatar
            };
            
            const response = await axios.put(`${import.meta.env.VITE_BASE_URL}/api/users/${id}`, userData);
            console.log(response.status)
            setuser(prevUsers => 
                prevUsers.map(user => 
                    user.id === id ? { 
                        ...user, 
                        first_name: data.firstName,
                        last_name: data.lastName,
                        email: data.email,
                        avatar: data.avatar || user.avatar
                    } : user
                )
            );
            return response.data;
        } catch (error) {
            console.error("Update error:", error);
            throw error;
        }
    }

    const value = {
        navigate, getUsers, removeUser, updateUser, Data, user
    }

    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    )
}

export default AppContext
export const useData = () => useContext(Context)