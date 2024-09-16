import React, { useState } from "react";
import withSidebar from "@/components/HOC/withSidebar";
import Location from '@/components/admin/Location';
import ModalForm from "@/components/admin/ModalForm";

let dummyLocationData = [
  {
    id: 1,
    locationName : 'Blue room',
    address: 'in the colleage building',
    capacity : 200,
    available : false,
    Images : [
      'https://t4.ftcdn.net/jpg/04/06/66/89/360_F_406668973_3X2cGom7KOgKaLfH7Fyjw7nnUegRlunf.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ9X9XpoRLlzOSikKsFFLiezHVjgowjpMlLg&s',
      'https://media.istockphoto.com/id/1318491139/photo/eiffel-tower-and-spring-tulips-on-field-of-mars-paris-france.jpg?s=612x612&w=0&k=20&c=6_MdByJ654lWqA0bH1T7IICr2MUtXWllplcU-PvGbIg=',
      'https://cdn.pixabay.com/photo/2015/10/06/18/26/eiffel-tower-975004_1280.jpg'
    ] ,
    googleMapsLink : 'https://www.google.com/maps?q=Central+Park'
  },
  {
    id : 2,
    locationName : 'Any room',
    description :"A famous suspension bridge in San Francisco.",
    address: 'in the colleage ',
    capacity : 500,
    available : true,
    Images : [
      'https://t4.ftcdn.net/jpg/04/06/66/89/360_F_406668973_3X2cGom7KOgKaLfH7Fyjw7nnUegRlunf.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ9X9XpoRLlzOSikKsFFLiezHVjgowjpMlLg&s',
      'https://media.istockphoto.com/id/1318491139/photo/eiffel-tower-and-spring-tulips-on-field-of-mars-paris-france.jpg?s=612x612&w=0&k=20&c=6_MdByJ654lWqA0bH1T7IICr2MUtXWllplcU-PvGbIg=',
      'https://cdn.pixabay.com/photo/2015/10/06/18/26/eiffel-tower-975004_1280.jpg'
    ] ,
    googleMapsLink : 'https://www.google.com/maps?q=Central+Park'
  }
];

const Locations = () => {
  const [allLocations, setAllLocations] = useState(dummyLocationData);

  function DeleteLocation(id) {
    setAllLocations((locations) => locations.filter((location) => location.id !== id));
  }

  function UpdateLocation(updatedLocation) {
    setAllLocations((locations) =>
      locations.map((location) =>
        location.id === updatedLocation.id ? updatedLocation : location
      )
    );
  }

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleAddLocation = (newLocation) => {
    newLocation.id = allLocations.length + 1; // Adjust ID assignment as needed
    setAllLocations([...allLocations, newLocation]);
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className="flex justify-center mt-8">
        <button
          className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 transition-all duration-300"
          onClick={handleOpenModal}
        >
          Add New Location
        </button>
      </div>
      {allLocations.map((LocationData) => (
        <Location
          DeleteLocation={DeleteLocation}
          LocationData={LocationData}
          isModalFormOpen={isModalOpen}
          onUpdateLocation={UpdateLocation}
          key={LocationData.id}
        />
      ))}
      <ModalForm
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleAddLocation}
      />
    </div>
  );
};

export default withSidebar(Locations);
