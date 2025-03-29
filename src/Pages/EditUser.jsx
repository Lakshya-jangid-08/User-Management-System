import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { AiOutlineUser, AiOutlineMail, AiFillCamera } from "react-icons/ai";
import { MdSave } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { useData } from '../Context/AppContext';

function EditUser() {
  const navigate = useNavigate();
  const location = useLocation();
  const user = location.state || {};
  const {updateUser} = useData();

  const [formData, setFormData] = useState({
    firstName: user.first_name || '',
    lastName: user.last_name || '',
    email: user.email || '',
    avatar: user.avatar || ''
  });
  
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, avatar: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        await updateUser(user.id, formData);
        navigate(-1);
    } catch (error) {
        alert('Failed to update user');
    }
};

  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-cyan-200 to-white p-6">
      <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Edit User</h2>
          <button onClick={() => navigate(-1)} className="text-gray-500 hover:text-red-500"><RxCross2 size={24} /></button>
        </div>

        <div className="flex flex-col items-center mb-4">
          <label className="relative cursor-pointer">
            <img src={formData.avatar || "https://via.placeholder.com/150"} alt="Avatar" className="w-24 h-24 rounded-full border-2 border-gray-300 object-cover" />
            <input type="file" accept="image/*" className="hidden" onChange={handleImageUpload} />
            <AiFillCamera className="absolute bottom-0 right-0 bg-white p-1 rounded-full text-gray-700 w-6 h-6 border border-gray-300" />
          </label>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="flex items-center text-gray-600 mb-1"><AiOutlineUser className="mr-2" /> First Name</label>
            <input type="text" name="firstName" value={formData.firstName} onChange={(e) => setFormData({ ...formData, firstName: e.target.value })} required 
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none" />
          </div>

          <div>
            <label className="flex items-center text-gray-600 mb-1"><AiOutlineUser className="mr-2" /> Last Name</label>
            <input type="text" name="lastName" value={formData.lastName} onChange={(e)=>{setFormData({ ...formData, lastName: e.target.value})}} required 
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none" />
          </div>

          <div>
            <label className="flex items-center text-gray-600 mb-1"><AiOutlineMail className="mr-2" /> Email</label>
            <input type="email" name="email" value={formData.email} onChange={(e)=>{setFormData({ ...formData, email : e.target.value})}} required 
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none" />
          </div>

          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 flex items-center justify-center gap-2">
            <MdSave /> Save Changes
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditUser;
