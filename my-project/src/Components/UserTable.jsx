// src/Components/UserTable.jsx
import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import { saveAs } from "file-saver"; // Ensure correct import

const UserTable = () => {
  const [users, setUsers] = useState([]);

  // Fetch data from Firestore when component loads
  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "users"));
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setUsers(data);
      } catch (error) {
        console.error("Error fetching user data: ", error);
      }
    };

    fetchData();
  }, []);

  // Handle download as text
  const handleDownload = () => {
    const content = users.map(
      (user) =>
        `Username: ${user.username}, Password: ${user.password}, Timestamp: ${user.timestamp.toDate()}`
    );
    const blob = new Blob([content.join("\n")], { type: "text/plain;charset=utf-8" });
    saveAs(blob, "user_data.txt");
  };

  return (
    <div className="user-table-container p-5">
      <h1 className="text-2xl mb-5 text-white">User Data Table</h1>

      <button
        className="mb-5 p-2 bg-blue-500 text-white rounded"
        onClick={handleDownload}
      >
        Download Data
      </button>

      <table className="table-auto w-full bg-white rounded shadow">
        <thead>
          <tr>
            <th className="border px-4 py-2">Username</th>
            <th className="border px-4 py-2">Password</th>
            <th className="border px-4 py-2">Timestamp</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td className="border px-4 py-2">{user.username}</td>
              <td className="border px-4 py-2">{user.password}</td>
              <td className="border px-4 py-2">
                {user.timestamp.toDate().toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
