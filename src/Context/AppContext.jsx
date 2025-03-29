import axios from 'axios';
import React, { createContext, use, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const Context = createContext();

function AppContext({ children }) {

    const navigate = useNavigate();
    const [Data, setData] = useState([]);
    const [user, setuser] = useState([]);


    const getUsers = async (id) => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/users?page=${id}`)
            setData(response.data)
            setuser(response.data.data);
        } catch (error) {
            console.log(error)
        }
    }

    const removeUser = async (id) => {
        try {
            await axios.delete(`${import.meta.env.VITE_BASE_URL}/api/users/${id}`)
            setuser(prevUsers => prevUsers.filter(user => user.id !== id));
            console.log("User deleted successfully");
        } catch (error) {
            console.log('error');

        }
    }

    const editUser = async (id) => {
        try {
            const response = await axios.put(`${import.meta.env.VITE_BASE_URL}/api/users/${id}`)
            setuser(prevUsers => prevUsers.map(user => user.id === id ? response.data : user));
            console.log("User updated successfully");
        } catch (error) {
            console.log(error)
        }
    }

    const updateUser = async(id, data) => {
        try {
            const response = await axios.put(`${import.meta.env.VITE_BASE_URL}/api/users/${id}`, data)
            console.log("Updated User Response:", response.data);
        } catch (error) {
            console.log(error)
        }
    }

    const value = {
        navigate, getUsers, removeUser,updateUser, editUser, Data, user
    }

    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    )
}

export default AppContext
export const useData = () => useContext(Context)