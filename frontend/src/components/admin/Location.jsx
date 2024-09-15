import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { MdDeleteForever } from "react-icons/md";

const responsive = {
  AnyDesign: {
    breakpoint: { max: 10000, min: 0 },
    items: 1
  }
};

const Location = ({ LocationData, DeleteLocation, onUpdateLocation , isModalFormOpen }) => {
  const [viewOrUpdateMode, setViewOrUpdateMode] = useState(true);
  const [updatedData, setUpdatedData] = useState(LocationData);
  const [isModalOpen, setModalOpen] = useState(false);
  const [newImageUrl, setNewImageUrl] = useState(""); 
  const [toReload , setToReload] = useState('f')

  const handleUpdate = () => {
    onUpdateLocation(updatedData);
    setViewOrUpdateMode(true);
  };

  useEffect(function () {
    // onUpdateLocation();
    handleUpdate()
  } , [toReload ])

  const handleCloseUpdate = () => {
    setUpdatedData(LocationData);
    setViewOrUpdateMode(true);
  };

  const handleDeleteImage = (index) => {
    const updatedImages = updatedData.Images.filter((_, i) => i !== index);
    setUpdatedData({ ...updatedData, Images: updatedImages })
    setToReload((reload) => {
      if(reload === 'f')
      {
        return 'g'
      }
      if(reload === 'g'){
        return 'f'
      }
    })
  };

  const handleAddImage = () => {
    if (newImageUrl) {
      setUpdatedData({ ...updatedData, Images: [...updatedData.Images, newImageUrl] });
      setNewImageUrl("");
      setToReload((reload) => {
        if(reload === 'f')
        {
          return 'g'
        }
        if(reload === 'g'){
          return 'f'
        }
      })
    }
  };

  const handleCloseModal = () => {
    setModalOpen(false)
    setNewImageUrl('')
  }

  return (
    <div className="location-block h-[29rem] overflow-y-scroll bg-white shadow-lg rounded-lg overflow-hidden my-8 w-full max-w-screen-lg mx-auto flex flex-col lg:flex-row">
      <div className="relative w-full lg:w-1/2">
        <Carousel
          responsive={responsive}
          showDots={true}
          infinite={true}
          swipeable={false}
          removeArrowOnDeviceType={isModalOpen || isModalFormOpen ? 'AnyDesign' : ''}
        >
          {LocationData.Images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-64 object-cover sm:h-96 lg:h-[27rem]"
            />
          ))}
        </Carousel>
      </div>

      <div className="p-6 w-full lg:w-1/2 relative flex flex-col mx-2 mr-8">
        {viewOrUpdateMode ? (
          <h2 className="text-2xl font-semibold mb-2">{updatedData.locationName}</h2>
        ) : (
          <input
            value={updatedData.locationName}
            className="text-2xl font-semibold mb-2"
            onChange={(e) => setUpdatedData({ ...updatedData, locationName: e.target.value })}
          />
        )}

        <div className="mb-4">
          <p className="text-gray-700">
            <strong>Address:</strong>{" "}
            {viewOrUpdateMode ? (
              updatedData.address
            ) : (
              <input
                type="text"
                value={updatedData.address}
                className="bg-gray-200 border-black border-2 rounded-md"
                onChange={(e) => setUpdatedData({ ...updatedData, address: e.target.value })}
              />
            )}
          </p>
          <p className="text-gray-700">
            <strong>Capacity:</strong>{" "}
            {viewOrUpdateMode ? (
              updatedData.capacity
            ) : (
              <input
                type="number"
                value={updatedData.capacity}
                className="bg-gray-200 border-black border-2 rounded-md"
                onChange={(e) => setUpdatedData({ ...updatedData, capacity: parseInt(e.target.value) })}
              />
            )}
          </p>
          <p className="text-gray-700">
            <strong>Available:</strong>{" "}
            {viewOrUpdateMode ? (
              <span className={updatedData.available ? 'text-green-600 text-bold' :'text-red-600 text-bold'}>{updatedData.available ? "Yes" : "No"}</span>
              
            ) : (
              <select
                className="bg-gray-200 border-black border-2 rounded-md"
                value={updatedData.available ? "Yes" : "No"}
                onChange={(e) => setUpdatedData({ ...updatedData, available: e.target.value === "Yes" })}
              >
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            )}
          </p>
        </div>

        <div className="mt-auto lg:absolute lg:bottom-0 lg:w-full lg:p-6 mr-5">
          <button
            onClick={() => window.open(updatedData.googleMapsLink, "_blank")}
            className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 transition-all duration-300 my-2"
          >
            Show on Google Maps
          </button>

          {viewOrUpdateMode ? (
            <button
              onClick={() => setViewOrUpdateMode(false)}
              className="w-full bg-green-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-green-600 transition-all duration-300 my-2"
            >
              Update Location
            </button>
          ) : (
            <div className="flex justify-between">
              <button
                onClick={handleCloseUpdate}
                className="w-1/2 bg-green-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-green-600 transition-all duration-300 my-2"
              >
                Close
              </button>
              <button
                onClick={handleUpdate}
                className="w-1/2 bg-green-500 text-white font-semibold py-2 px-4 mx-2 rounded-lg hover:bg-green-600 transition-all duration-300 my-2"
              >
                Save
              </button>
            </div>
          )}

          <button
            onClick={() => DeleteLocation(updatedData.id)}
            className="w-full bg-red-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-red-600 transition-all duration-300 my-1"
          >
            Delete Location
          </button>

          {/* Manage Images Modal Trigger */}
          <button
            onClick={() => setModalOpen(true)}
            className="w-full bg-yellow-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-yellow-600 transition-all duration-300 my-2"
          >
            Manage Images
          </button>
        </div>
      </div>

      {/* Modal for managing images */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
            <h2 className="text-xl font-semibold mb-4">Manage Images</h2>

            {updatedData.Images.map((image, index) => (
              <div key={index} className="flex items-center justify-between mb-2">
                <p className="truncate w-3/4">{image}</p>
                <button
                  onClick={() => handleDeleteImage(index)}
                  className="text-red-500 hover:text-red-700"
                >
                  <MdDeleteForever size={24} />
                </button>
              </div>
            ))}

            {/* Input to add new image */}
            <div className="mt-4 flex">
              <input
                type="text"
                value={newImageUrl}
                onChange={(e) => setNewImageUrl(e.target.value)}
                placeholder="Enter image URL"
                className="border border-gray-300 rounded-lg p-2 w-full mr-2"
              />
              <button
                onClick={handleAddImage}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all duration-300"
              >
                Add
              </button>
            </div>

            {/* Close Modal Button */}
            <button
              onClick={handleCloseModal}
              className="mt-4 w-full bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition-all duration-300"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Location;
