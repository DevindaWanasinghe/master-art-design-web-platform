import React, { useState } from 'react';
import axios from 'axios';

function AdminPanel() {
  const [template, setTemplate] = useState({ name: '', price: '', image_url: '', section: 'Book Cover' });

  const handleChange = (e) => {
    setTemplate({ ...template, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/templates', template)
      .then(response => {
        console.log('Template added:', response.data);
      })
      .catch(error => {
        console.error('Error adding template:', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={template.name} onChange={handleChange} placeholder="Template Name" />
      <input type="text" name="price" value={template.price} onChange={handleChange} placeholder="Price" />
      <input type="text" name="image_url" value={template.image_url} onChange={handleChange} placeholder="Image URL" />
      <select name="section" value={template.section} onChange={handleChange}>
        <option value="Book Cover">Book Cover</option>
        <option value="Brochure">Brochure</option>
        <option value="Facebook Post">Facebook Post</option>
        <option value="Self Design">Self Design</option>
      </select>
      <button type="submit">Add Template</button>
    </form>
  );
}

export default AdminPanel;
