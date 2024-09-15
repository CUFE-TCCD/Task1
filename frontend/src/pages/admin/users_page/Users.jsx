import React, { useState } from "react";
import withSidebar from "@/components/HOC/withSidebar";

const Users = () => {
  // example for user data
  const [users] = useState([
    { id: 1, name: "John Doe", email: "john@example.com", accountType: "Admin", moreInfo: "more info about John." },
    { id: 2, name: "Jane Smith", email: "jane@example.com", accountType: "User", moreInfo: "more info about Jane." },
    { id: 3, name: "Karen Mike", email: "karen@example.com", accountType: "Moderator", moreInfo: "more info about Karen." },
  ]);

  // State to manage the selected user and the modal visibility
  const [selectedUser, setSelectedUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  return (
    <div>
      <h2>Users List</h2>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={headerStyle}>Name</th>
            <th style={headerStyle}>Email</th>
            <th style={headerStyle}>Account Type</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} onClick={() => handleUserClick(user)} style={rowStyle}>
              <td style={cellStyle}>{user.name}</td>
              <td style={cellStyle}>{user.email}</td>
              <td style={cellStyle}>{user.accountType}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal */}
      {isModalOpen && selectedUser && (
        <div style={modalStyle}>
          <h3>{selectedUser.name}'s Information</h3>
          <p><strong>Email:</strong> {selectedUser.email}</p>
          <p><strong>Account Type:</strong> {selectedUser.accountType}</p>
          <p><strong>More Info:</strong> {selectedUser.moreInfo}</p>
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

export default withSidebar(Users);
