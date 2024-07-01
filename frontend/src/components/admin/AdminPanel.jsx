import React from 'react';
import { Link } from 'react-router-dom';

function AdminPanel() {
  return (
   
      <div className='m-auto border-2 w-[600px] mt-[200px] p-[60px] bg-gradient-to-r from-slate-300 to-slate-500 rounded-[40px] border-[#ffffff]'>
        <div className='m-auto text-center text-[50px] font-bold pb-8 font-greens-wood text-[#1e293b]'>ADMIN DASHBORD</div>
        <div className="flex justify-center space-x-4">
          <Link to="/admin/add" className="p-2 text-white bg-blue-500 rounded hover:bg-blue-700">Add Template</Link>
          <Link to="/admin/update" className="p-2 text-white bg-green-500 rounded hover:bg-green-700">Update Template</Link>
          <Link to="/admin/delete" className="p-2 text-white bg-red-500 rounded hover:bg-red-700">Delete Template</Link>
        </div>
      </div>
  );
}

export default AdminPanel;
