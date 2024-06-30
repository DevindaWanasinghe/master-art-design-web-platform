import React, { useState } from 'react';
import axios from 'axios';
import '../admin/admin.css'

function AdminAdd() {
  const [template, setTemplate] = useState({ name: '', price: '', image_url: '', section: 'Book Cover' });
  const [popupVisible, setPopupVisible] = useState(false);

  const handleChange = (e) => {
    setTemplate({ ...template, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/templates', template)
      .then(response => {
        console.log('Template added:', response.data);
        setPopupVisible(true);
        setTimeout(() => setPopupVisible(false), 3000);
      })
      .catch(error => {
        console.error('Error adding template:', error);
      });
  };

  return (
    <div>
    <form onSubmit={handleSubmit} className="max-w-2xl p-4 mx-auto">
      <table className="w-full border-collapse">
        <tbody>
          <tr>
            <td className="p-2">
              <label htmlFor="name" className="block mb-2 font-bold">Template Name</label>
            </td>
            <td className="p-2">
              <input
                type="text"
                id="name"
                name="name"
                value={template.name}
                onChange={handleChange}
                placeholder="Template Name"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </td>
          </tr>
          <tr>
            <td className="p-2">
              <label htmlFor="price" className="block mb-2 font-bold">Price</label>
            </td>
            <td className="p-2">
              <input
                type="text"
                id="price"
                name="price"
                value={template.price}
                onChange={handleChange}
                placeholder="Price"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </td>
          </tr>
          <tr>
            <td className="p-2">
              <label htmlFor="image_url" className="block mb-2 font-bold">Image URL</label>
            </td>
            <td className="p-2">
              <input
                type="text"
                id="image_url"
                name="image_url"
                value={template.image_url}
                onChange={handleChange}
                placeholder="Image URL"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </td>
          </tr>
          <tr>
            <td className="p-2">
              <label htmlFor="section" className="block mb-2 font-bold">Section</label>
            </td>
            <td className="p-2">
              <select
                id="section"
                name="section"
                value={template.section}
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
              <button type="submit" className="w-full p-2 text-white bg-blue-500 rounded hover:bg-blue-700">
                Add Template
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

export default AdminAdd;
