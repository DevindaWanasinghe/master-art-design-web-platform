import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../admin/admin.css'

function AdminUpdate() {
  const [templates, setTemplates] = useState([]);
  const [updateTemplate, setUpdateTemplate] = useState({ id: '', name: '', price: '', image_url: '', section: 'Book Cover' });
  const [popupVisible, setPopupVisible] = useState(false);

  const handleChange = (e) => {
    setUpdateTemplate({ ...updateTemplate, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:5000/api/templates/${updateTemplate.id}`, updateTemplate)
      .then(response => {
        console.log('Template updated:', response.data);
        fetchTemplates();  // Fetch templates again to update the list
        setPopupVisible(true);
        setTimeout(() => setPopupVisible(false), 3000);
      })
      .catch(error => {
        console.error('Error updating template:', error);
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

  const handleEdit = (template) => {
    setUpdateTemplate(template);
  };

  useEffect(() => {
    fetchTemplates();
  }, []);

  return (
    <div>
      <div className="max-w-2xl p-4 mx-auto">
        <h2 className="mb-4 text-2xl font-bold">Templates List</h2>
        <ul>
          {templates.map((template) => (
            <li key={template.id} className="mb-2">
              <span>{template.name} - {template.price} - {template.section}</span>
              <button onClick={() => handleEdit(template)} className="p-1 ml-2 text-white bg-yellow-500 rounded">Edit</button>
            </li>
          ))}
        </ul>
      </div>

      {/* Form for updating existing template */}
      <form onSubmit={handleSubmit} className="max-w-2xl p-4 mx-auto">
        <table className="w-full border-collapse">
          <tbody>
            <tr>
              <td className="p-2">
                <label htmlFor="updateName" className="block mb-2 font-bold">Template Name</label>
              </td>
              <td className="p-2">
                <input
                  type="text"
                  id="updateName"
                  name="name"
                  value={updateTemplate.name}
                  onChange={handleChange}
                  placeholder="Template Name"
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </td>
            </tr>
            <tr>
              <td className="p-2">
                <label htmlFor="updatePrice" className="block mb-2 font-bold">Price</label>
              </td>
              <td className="p-2">
                <input
                  type="text"
                  id="updatePrice"
                  name="price"
                  value={updateTemplate.price}
                  onChange={handleChange}
                  placeholder="Price"
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </td>
            </tr>
            <tr>
              <td className="p-2">
                <label htmlFor="updateImageUrl" className="block mb-2 font-bold">Image URL</label>
              </td>
              <td className="p-2">
                <input
                  type="text"
                  id="updateImageUrl"
                  name="image_url"
                  value={updateTemplate.image_url}
                  onChange={handleChange}
                  placeholder="Image URL"
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </td>
            </tr>
            <tr>
              <td className="p-2">
                <label htmlFor="updateSection" className="block mb-2 font-bold">Section</label>
              </td>
              <td className="p-2">
                <select
                  id="updateSection"
                  name="section"
                  value={updateTemplate.section}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded"
                >
                  <option value="Book Cover">Book Cover</option>
                  <option value="Hand Bill">Hand Bill</option>
                  <option value="Facebook Post">Facebook Post</option>
                  <option value="Self Design">Self Design</option>
                </select>
              </td>
            </tr>
            <tr>
              <td className="p-2" colSpan="2">
                <button type="submit" className="w-full p-2 text-white bg-green-500 rounded hover:bg-green-700">
                  Update Template
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
        {popupVisible && <div className="popup">Changes Successfully</div>}
    </div>
  );
}

export default AdminUpdate;
