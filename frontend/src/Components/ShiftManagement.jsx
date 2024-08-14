// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

// const ShiftManagement = () => {
//   const [shifts, setShifts] = useState([]);
//   const [newShift, setNewShift] = useState({
//     shiftTitle: "",
//     date: "",
//     startTime: "",
//     endTime: "",
//     location: "",
//     numberOfStaffRequired: "",
//   });
//   const [editingShift, setEditingShift] = useState(null);

//   useEffect(() => {
//     // Fetch shifts on component mount
//     const fetchShifts = async () => {
//       try {
//         const response = await axios.get("http://localhost:8000/shifts/");
//         setShifts(response.data);
//       } catch (error) {
//         console.error('Error fetching shifts:', error);
//       }
//     };

//     fetchShifts();
//   }, []);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setNewShift({ ...newShift, [name]: value });
//   };

//   const handleAddShift = async () => {
//     try {
//       if (editingShift) {
//         // Update existing shift
//         const response = await axios.put(`http://localhost:8000/shifts/${editingShift.id}/`, newShift);
//         setShifts(
//           shifts.map((shift) =>
//             shift.id === editingShift.id ? response.data : shift
//           )
//         );
//         setEditingShift(null);
//       } else {
//         // Add new shift
//         const response = await axios.post("http://localhost:8000/shifts/", newShift);
//         setShifts([...shifts, response.data]);
//       }

//       setNewShift({
//         shiftTitle: "",
//         date: "",
//         startTime: "",
//         endTime: "",
//         location: "",
//         numberOfStaffRequired: "",
//       });
//     } catch (error) {
//       console.error('Error adding/updating shift:', error);
//     }
//   };

//   const handleDeleteShift = async (id) => {
//     try {
//       await axios.delete(`http://localhost:8000/shifts/${id}/`);
//       setShifts(shifts.filter((shift) => shift.id !== id));
//     } catch (error) {
//       console.error('Error deleting shift:', error);
//     }
//   };

//   const handleEditShift = (shiftToEdit) => {
//     setNewShift(shiftToEdit);
//     setEditingShift(shiftToEdit);
//   };

//   const handleKeyDown = (e) => {
//     if (e.key === 'Enter') {
//       handleAddShift();
//     }
//   };

//   return (
//     <div className="h-screen w-full bg-gray-100 p-8">
//       <div className="mb-8 flex items-center justify-between">
//         <h1 className="text-2xl font-semibold text-gray-800">
//           {editingShift ? "Edit Shift" : "Add a new Shift"}
//         </h1>
//         <button
//           className="rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700"
//           onClick={handleAddShift}
//         >
//           {editingShift ? "Update Shift" : "Add Shift"}
//         </button>
//       </div>
//       <div className="mt-8">
//         <div className="mt-4 rounded bg-white p-4 shadow-md">
//           <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
//             <input
//               type="text"
//               name="shiftTitle"
//               value={newShift.shiftTitle}
//               onChange={handleChange}
//               placeholder="Shift Title"
//               className="rounded border border-gray-300 p-2"
//               onKeyDown={handleKeyDown}
//             />
//             <input
//               type="date"
//               name="date"
//               value={newShift.date}
//               onChange={handleChange}
//               className="rounded border border-gray-300 p-2"
//               onKeyDown={handleKeyDown}
//             />
//             <input
//               type="time"
//               name="startTime"
//               value={newShift.startTime}
//               onChange={handleChange}
//               className="rounded border border-gray-300 p-2"
//               onKeyDown={handleKeyDown}
//             />
//             <input
//               type="time"
//               name="endTime"
//               value={newShift.endTime}
//               onChange={handleChange}
//               className="rounded border border-gray-300 p-2"
//               onKeyDown={handleKeyDown}
//             />
//             <input
//               type="text"
//               name="location"
//               value={newShift.location}
//               onChange={handleChange}
//               placeholder="Location"
//               className="rounded border border-gray-300 p-2"
//               onKeyDown={handleKeyDown}
//             />
//             <input
//               type="number"
//               name="numberOfStaffRequired"
//               value={newShift.numberOfStaffRequired}
//               onChange={handleChange}
//               placeholder="Staff Required"
//               className="rounded border border-gray-300 p-2"
//               onKeyDown={handleKeyDown}
//             />
//           </div>
//         </div>
//       </div>
//       <div className="mt-10 rounded bg-white p-4 shadow-md">
//         <h2 className="text-xl font-semibold text-gray-800">Shift List</h2>

//         <div className="divide-y divide-gray-300">
//           {shifts.map((shift) => (
//             <div key={shift.id} className="flex items-center justify-between py-4">
//               <div className="flex-1">
//                 <span className="font-medium text-gray-700">
//                   {shift.shiftTitle}: {shift.date} - {shift.startTime} to {shift.endTime}
//                 </span>
//                 <span className="ml-4 text-gray-500">{shift.location}</span>
//               </div>
//               <span className="mr-4 text-gray-600">
//                 {shift.numberOfStaffRequired} Staff
//               </span>
//               <div className="flex space-x-4">
//                 <FontAwesomeIcon
//                   icon={faEdit}
//                   className="cursor-pointer text-blue-500"
//                   onClick={() => handleEditShift(shift)}
//                 />
//                 <FontAwesomeIcon
//                   icon={faTrash}
//                   className="cursor-pointer text-red-500"
//                   onClick={() => handleDeleteShift(shift.id)}
//                 />
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ShiftManagement;


import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";


const ShiftManagement = () => {
  const [shifts, setShifts] = useState([
    // Initial shifts (mock data)
    {
      id: 1,
      shiftTitle: "Morning Shift",
      date: "2024-08-15",
      startTime: "08:00",
      endTime: "12:00",
      location: "Coimbatore",
      numberOfStaffRequired: "5",
    },
    {
      id: 2,
      shiftTitle: "Afternoon Shift",
      date: "2024-08-15",
      startTime: "12:00",
      endTime: "16:00",
      location: "Chennai",
      numberOfStaffRequired: "3",
    },
  ]);

  const [newShift, setNewShift] = useState({
    shiftTitle: "",
    date: "",
    startTime: "",
    endTime: "",
    location: "",
    numberOfStaffRequired: "",
  });

  const [editingShift, setEditingShift] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewShift({ ...newShift, [name]: value });
  };

  const handleAddShift = async () => {
    try {
      if (editingShift) {
      // Update existing shift
      setShifts(
        shifts.map((shift) =>
          shift.id === editingShift.id ? { ...editingShift, ...newShift } : shift
        )
      );
      setEditingShift(null);
    } else {
        // Add new shift
        const response = await axios.post("http://localhost:8000/shifts/", newShift);
        setShifts([...shifts, response.data]);
      }

      setNewShift({
        shiftTitle: "",
        date: "",
        startTime: "",
        endTime: "",
        location: "",
        numberOfStaffRequired: "",
      });
    } catch (error) {
      console.error('Error adding/updating shift:', error);
    }
  };


  const handleDeleteShift = (id) => {
    setShifts(shifts.filter((shift) => shift.id !== id));
  };

  const handleEditShift = (shiftToEdit) => {
    setNewShift(shiftToEdit);
    setEditingShift(shiftToEdit);
  };

  return (
    <div className="h-screen w-full bg-gray-100 p-8">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-800">
          {editingShift ? "Edit Shift" : "Add a new Shift"}
        </h1>
        <button
          className="rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700"
          onClick={handleAddShift}
        >
          {editingShift ? "Update Shift" : "Add Shift"}
        </button>
      </div>
      <div className="mt-8">
        <div className="mt-4 rounded bg-white p-4 shadow-md">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <input
              type="text"
              name="shiftTitle"
              value={newShift.shiftTitle}
              onChange={handleChange}
              placeholder="Shift Title"
              className="rounded border border-gray-300 p-2"
            />
            <input
              type="date"
              name="date"
              value={newShift.date}
              onChange={handleChange}
              className="rounded border border-gray-300 p-2"
            />
            <input
              type="time"
              name="startTime"
              value={newShift.startTime}
              onChange={handleChange}
              className="rounded border border-gray-300 p-2"
            />
            <input
              type="time"
              name="endTime"
              value={newShift.endTime}
              onChange={handleChange}
              className="rounded border border-gray-300 p-2"
            />
            <input
              type="text"
              name="location"
              value={newShift.location}
              onChange={handleChange}
              placeholder="Location"
              className="rounded border border-gray-300 p-2"
            />
            <input
              type="number"
              name="numberOfStaffRequired"
              value={newShift.numberOfStaffRequired}
              onChange={handleChange}
              placeholder="Staff Required"
              className="rounded border border-gray-300 p-2"
            />
          </div>
        </div>
      </div>
      <div className="mt-10 rounded bg-white p-4 shadow-md">
        <h2 className="text-xl font-semibold text-gray-800">Shift List</h2>

        <div className="divide-y divide-gray-300">
          {shifts.map((shift) => (
            <div key={shift.id} className="flex items-center justify-between py-4">
              <div className="flex-1">
                <span className="font-medium text-gray-700">
                  {shift.shiftTitle}: {shift.date} - {shift.startTime} to {shift.endTime}
                </span>
                <span className="ml-4 text-gray-500">{shift.location}</span>
              </div>
              <span className="mr-4 text-gray-600">
                {shift.numberOfStaffRequired} Staff
              </span>
              <div className="flex space-x-4">
                <FontAwesomeIcon
                  icon={faEdit}
                  className="cursor-pointer text-blue-500"
                  onClick={() => handleEditShift(shift)}
                />
                <FontAwesomeIcon
                  icon={faTrash}
                  className="cursor-pointer text-red-500"
                  onClick={() => handleDeleteShift(shift.id)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShiftManagement;
