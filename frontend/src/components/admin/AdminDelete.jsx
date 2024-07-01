import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../admin/admin.css'

function AdminDelete() {
  const [templates, setTemplates] = useState([]);
  const [popupVisible, setPopupVisible] = useState(false);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/api/templates/${id}`)
      .then(() => {
        console.log('Template deleted');
        fetchTemplates(); // Refresh the list of templates after deletion
        setPopupVisible(true);
        setTimeout(() => setPopupVisible(false), 3000);
      })
      .catch(error => {
        console.error('Error deleting template:', error);
      });
  };

  const fetchTemplates = () => {
    axios.get('http://localhost:5000/api/templates')
      .then(response => {
        setTemplates(response.data);
      })
      .catch(error => {
        console.error('Error fetching templates:', error);
      });
  };

  useEffect(() => {
    fetchTemplates();
  }, []);

  return (
    <div className='m-auto border-2 w-[800px] mt-[100px] p-[60px] bg-gradient-to-r from-slate-200 to-slate-400 rounded-[40px] border-[#ffffff]'>
    <div className="max-w-2xl p-4 mx-auto">
      <h2 className="text-[30px] font-bold text-center mt-[-15px] mb-10">Existing Templates</h2>
      <ul>
        {templates.map(template => (
          <li key={template.id} className="flex items-center justify-between p-2 border-b border-gray-300">
            <span>{template.name} - {template.section}</span>
            <button
              onClick={() => handleDelete(template.id)}
              className="p-2 text-white bg-red-500 rounded hover:bg-red-700"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
      {popupVisible && <div className="popup">Changes Successfully</div>}
    </div>
  );
}

export default AdminDelete;
