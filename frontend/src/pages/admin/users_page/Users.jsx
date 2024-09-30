import React, { useState,useEffect } from "react";
import withSidebar from "@/components/HOC/withSidebar";
import { getUsers } from "../../../endpoints/userInfoEndpoints";

const Users = () => {
  const [users,setUsers] = useState([]);

  useEffect(() => {
    async function fetchData(){
      try{
        const response=await getUsers();
        const Data = await response.json();
        setUsers(Data);
      }catch(err){console.log(err)}
    }
    fetchData();
  }, []);
  // State to manage the selected user and the modal visibility
  const [selectedUser, setSelectedUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filter, setFilter] = useState("All");


  // Function to handle the click on a user row
  const handleUserClick = (user) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedUser(null);
  };

  // Function to filter users by account type
  const handleFilterChange = (role) => {
    setFilter(role);
  };

  // Filtered users based on selected filter
  const filteredUsers = users.filter((user) => (filter === "All" ? true : user.role.toLowerCase() === filter.toLowerCase()));
 
  return (
    <div>
      <h2>Users List</h2>
       {/* Filter Buttons */}
       <div style={filterButtonContainerStyle}>
        <button onClick={() => handleFilterChange("All")} style={filter === "All" ? activeFilterStyle : filterButtonStyle}>
          All
        </button>
        <button onClick={() => handleFilterChange("Admin")} style={filter === "Admin" ? activeFilterStyle : filterButtonStyle}>
          Admins
        </button>
        <button onClick={() => handleFilterChange("Member")} style={filter === "Member" ? activeFilterStyle : filterButtonStyle}>
          Members
        </button>
        <button onClick={() => handleFilterChange("Moderator")} style={filter === "Moderator" ? activeFilterStyle : filterButtonStyle}>
          Moderators
        </button>
      </div>
      {/* Users Table */}
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={headerStyle}>Name</th>
            <th style={headerStyle}>Email</th>
            <th style={headerStyle}>Account Type</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user) => (
            <tr key={user.userId} onClick={() => handleUserClick(user)} style={rowStyle}>
              <td style={cellStyle}>{user.firstName}</td>
              <td style={cellStyle}>{user.email}</td>
              <td style={cellStyle}>{user.role}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal */}
      {isModalOpen && selectedUser && (
        <div style={modalStyle}>
          <h3>{selectedUser.firstName}'s Information</h3>
          <p><strong>Email:</strong> {selectedUser.email}</p>
          <p><strong>Account Type:</strong> {selectedUser.role}</p>
          <p><strong>Last Name:</strong> {selectedUser.lastName}</p>
          <button onClick={closeModal} style={{ marginTop: "10px", padding: "8px 12px" }}>
            Close
          </button>
        </div>
      )}

      {/* Background overlay for modal */}
      {isModalOpen && (
        <div style={overlayStyle} onClick={closeModal} />
      )}
    </div>
  );
};

// CSS styles
const tableStyle = {
  width: "100%",
  borderCollapse: "collapse",
  marginTop: "20px",
};

const headerStyle = {
  borderBottom: "2px solid #ddd",
  textAlign: "left",
  padding: "10px",
};

const rowStyle = {
  cursor: "pointer",
};

const cellStyle = {
  borderBottom: "1px solid #ddd",
  padding: "10px",
  textAlign: "left",
};

const modalStyle = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "white",
  padding: "20px",
  borderRadius: "8px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  zIndex: 1000,
};

const overlayStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  zIndex: 999,
};

const filterButtonContainerStyle = {
  display: "flex",
  gap: "10px",
  marginBottom: "20px",
};

const filterButtonStyle = {
  padding: "8px 12px",
  backgroundColor: "#f0f0f0",
  border: "1px solid #ddd",
  cursor: "pointer",
  borderRadius: "4px",
};

const activeFilterStyle = {
  padding: "8px 12px",
  backgroundColor: "#007bff",
  color: "white",
  border: "1px solid #007bff",
  cursor: "pointer",
  borderRadius: "4px",
};

export default withSidebar(Users);
