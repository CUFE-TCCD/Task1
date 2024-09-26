import React, { useState , useEffect } from "react";
import withSidebar from "@/components/HOC/withSidebar";
import Location from '@/components/admin/Location';
import ModalForm from "@/components/admin/ModalForm";
import {getAllLocations , deleteLocation , updateLocation , addLocation} from '../../../endpoints/locationsEndpoints'


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
  const [allLocations, setAllLocations] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [authError , setAuthError] = useState(false)

  useEffect(() => {
    const loadLocations = async () => {
      try {
        const data = await getAllLocations();
        setAllLocations(data.data);
        setAuthError(false)
      } catch (error) {
        console.error("Error fetching locations:", error);
        setAuthError(true)
      }
    };
    loadLocations();
  }, []);

  async function DeleteLocation(id) {
    try {
      console.log(id)
      await deleteLocation(id);
      setAllLocations((locations) => locations.filter((location) => location._id !== id));
    } catch (error) {
      console.error("Error deleting location:", error);
    }
  }

  async function UpdateLocation(updatedLocation) {
    try {
      const updatedData = await updateLocation(updatedLocation._id, updatedLocation);
      setAllLocations((locations) =>
        locations.map((location) => (location._id === updatedLocation._id ? updatedLocation : location))
      );
    } catch (error) {
      console.error("Error updating location:", error);
    }
  }


  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleAddLocation = async (newLocation) => {
    try {
      const addedLocation = await addLocation(newLocation);
      console.log(addedLocation)
      setIsModalOpen(false);
      window.location.reload();
    } catch (error) {
      console.log(error.message)
      console.error("Error adding location:", error);
    }
  };

  console.log(allLocations)

  return (
    !authError ?
    <div  >  
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
          key = {LocationData._id}
        />
      ))}
      <ModalForm
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleAddLocation}
      />
    </div>
    :
    <h1 className="flex justify-center text-2xl">Authenticatie first</h1>
  );
};

export default withSidebar(Locations);
