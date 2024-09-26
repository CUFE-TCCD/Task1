import React, { useState, useRef, useEffect } from 'react';

const ModalForm = ({ isOpen, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    capacity: "",
    isAvailable: false,
    images: [],
    googleMapsLocation: ""
  });

  const modalRef = useRef(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleClose = () => {
    onClose();
    setFormData({
      name: "",
      address: "",
      capacity: "",
      isAvailable: false,
      images: [],
      googleMapsLocation: ""
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newLocation = {
      ...formData,
      images: formData.images.split(","), // Convert comma-separated URLs to array
    };
    onSubmit(newLocation);
    setFormData({
      name: "",
      address: "",
      capacity: "",
      isAvailable: false,
      images: [],
      googleMapsLocation: ""
    });
  };

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      handleClose(); 
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  if (!isOpen) return null; 

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50 overflow-y-scroll">
      <div
        ref={modalRef}
        className="bg-white rounded-lg p-6 w-full max-w-lg mx-4 sm:mx-6 md:mx-auto md:w-3/4 lg:w-1/2 xl:w-1/3 z-60 pt-8"
      >
        <h2 className="text-2xl font-semibold my-4 mt-8">Add New Location</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Location Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700">Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Capacity</label>
            <input
              type="number"
              name="capacity"
              value={formData.capacity}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">isAvailable</label>
            <input
              type="checkbox"
              name="isAvailable"
              checked={formData.isAvailable}
              onChange={handleChange}
              className="mr-2"
            />
            <span>{formData.isAvailable ? "Yes" : "No"}</span>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">images (comma-separated URLs)</label>
            <input
              type="text"
              name="images"
              value={formData.images}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="https://image1.jpg,https://image2.jpg"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Google Maps Link</label>
            <input
              type="text"
              name="googleMapsLocation"
              value={formData.googleMapsLocation}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={handleClose}
              className="py-2 px-4 border border-gray-400 rounded text-gray-700 hover:bg-gray-100 transition-all duration-300"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-300"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalForm;
