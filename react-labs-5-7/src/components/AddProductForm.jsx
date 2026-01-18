import React, { useState } from "react";

function AddProductForm({ onsubmit }) {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    description: "",
    category: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onsubmit(formData);
    setFormData({ name: "", price: "", description: "", category: "" });
  };

  return (
    <form className="add-product-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="label">Name:</label>
        <input
          className="form-input"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
        />
      </div>

      <label className="label">Price:</label>
      <input
        className="form-input"
        name="price"
        type="text"
        value={formData.price}
        onChange={handleChange}
      />

      <label className="label">Description</label>
      <input
        className="form-input"
        name="description"
        type="text"
        value={formData.description}
        onChange={handleChange}
      />

      <select className="form-select">
        <option value="Electronics">Electronics</option>
        <option value="Audio">Audio</option>
        <option value="Books">Books</option>
      </select>

      <button type="submit" className="button button-primary">
        Submit
      </button>
    </form>
  );
}

export default AddProductForm;
