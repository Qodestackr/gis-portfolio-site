import { useState, ChangeEvent } from "react";
import Input from "../../components/common/Input";

function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [user, setUser] = useState({
    id: 3,
    username: "newuser",
    first_name: "John",
    last_name: "Doe",
    email: "newuser@example.com",
    home_address: "123 Main St",
    phone_number: "123-456-7890",
    location: {
      type: "Point",
      coordinates: [77.601835, 12.91092],
    },
  });

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
    console.log(user);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  return (
    <div className="bg-[#23272F] min-h-screen flex items-center justify-center">
      <div className="max-w-md p-8 bg-white shadow-md rounded-md mt-12 w-[70vw] mx-auto">
        <img
          src="https://via.placeholder.com/150"
          alt="Profile"
          className="w-32 h-32 rounded-full mx-auto mb-4" />
        {isEditing ? (
          <form>
            <Input
              label="First Name"
              type="text"
              name="first_name"
              value={user.first_name}
              onChange={handleInputChange}
              required />
            <Input
              label="Last Name"
              type="text"
              name="last_name"
              value={user.last_name}
              onChange={handleInputChange}
              required />
            <Input
              label="Email"
              type="email"
              name="email"
              value={user.email}
              onChange={handleInputChange}
              required />
            <Input
              label="Home Address"
              type="text"
              name="home_address"
              value={user.home_address}
              onChange={handleInputChange} />
            <Input
              label="Phone Number"
              type="text"
              name="phone_number"
              value={user.phone_number}
              onChange={handleInputChange}
              required />
            {/* LOC */}
            <div className="mb-6">
              <label
                htmlFor="location"
                className="block text-sm font-medium text-gray-700"
              >
                Location
              </label>
              <div className="flex">
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={`${user.location.coordinates[1]}, ${user.location.coordinates[0]}`}
                  className="mt-1 px-4 py-2 flex-grow border rounded-md focus:ring-[#23272F] focus:border-[#23272F] border-gray-300"
                  required
                  disabled />
                {/* You can keep the "Locate Me" button as it is */}
              </div>
            </div>
            {/*  */}
            <div className="flex justify-center space-x-4 mb-4">
              <button
                onClick={handleSaveClick}
                className="px-6 py-3 rounded-md bg-indigo-600 text-white font-semibold hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                Save
              </button>
              <button
                onClick={() => setIsEditing(false)} // Cancel button to exit edit mode without saving
                className="px-6 py-3 rounded-md bg-red-500 text-white font-semibold hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                Cancel
              </button>
            </div>
          </form>
        ) : (
          <div>
            <h2 className="text-2xl font-bold text-center text-[#23272F] mb-4">
              {user.first_name} {user.last_name}
            </h2>
            <p className="text-sm text-gray-700 mb-4">Email: {user.email}</p>
            <p className="text-sm text-gray-700 mb-4">
              Home Address: {user.home_address}
            </p>
            <p className="text-sm text-gray-700 mb-4">
              Phone Number: {user.phone_number}
            </p>
            <p className="text-sm text-gray-700 mb-4">
              Location: {user.location.coordinates[1]},{" "}
              {user.location.coordinates[0]}
            </p>
            <div className="flex justify-center space-x-4 mb-4">
              <button
                onClick={handleEditClick}
                className="px-6 py-3 rounded-md bg-indigo-600 text-white font-semibold hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                Edit
              </button>
              <button className="px-6 py-3 rounded-md bg-red-500 text-white font-semibold hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500">
                Logout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Profile;
