import { useState } from "react";

const Profile = () => {
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

  const [location, setLocation] = useState("");
  const [isLocating, setIsLocating] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
    console.log(user);
  };

  const handleLocateMe = () => {
    setIsLocating(true);
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation(`${position.coords.latitude}, ${position.coords.longitude}`);
        setUser({
          ...user,
          location: {
            type: "Point",
            coordinates: [position.coords.longitude, position.coords.latitude],
          },
        });
        setIsLocating(false);
      },
      (error) => {
        setIsLocating(false);
        console.error("Error getting location:", error);
      }
    );
  };

  return (
    <div className="bg-[#23272F] min-h-screen flex items-center justify-center">
      <div className="max-w-md p-8 bg-white shadow-md rounded-md mt-12 w-[70vw] mx-auto">
        <img
          src="https://via.placeholder.com/150"
          alt="Profile"
          className="w-32 h-32 rounded-full mx-auto mb-4"
        />
        {isEditing ? (
          <form>
            <div className="mb-4">
              <label className="block text-sm font-bold text-gray-700 mb-2">First Name</label>
              <input
                type="text"
                value={user.first_name}
                onChange={(e) => setUser({ ...user, first_name: e.target.value })}
                className="w-full px-4 py-2 border rounded-md focus:ring-[#23272F] focus:border-[#23272F] border-gray-300"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-bold text-gray-700 mb-2">Last Name</label>
              <input
                type="text"
                value={user.last_name}
                onChange={(e) => setUser({ ...user, last_name: e.target.value })}
                className="w-full px-4 py-2 border rounded-md focus:ring-[#23272F] focus:border-[#23272F] border-gray-300"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-bold text-gray-700 mb-2">Email</label>
              <input
                type="email"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                className="w-full px-4 py-2 border rounded-md focus:ring-[#23272F] focus:border-[#23272F] border-gray-300"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-bold text-gray-700 mb-2">Home Address</label>
              <input
                type="text"
                value={user.home_address}
                onChange={(e) => setUser({ ...user, home_address: e.target.value })}
                className="w-full px-4 py-2 border rounded-md focus:ring-[#23272F] focus:border-[#23272F] border-gray-300"
                disabled
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number</label>
              <input
                type="text"
                value={user.phone_number}
                onChange={(e) => setUser({ ...user, phone_number: e.target.value })}
                className="w-full px-4 py-2 border rounded-md focus:ring-[#23272F] focus:border-[#23272F] border-gray-300"
              />
            </div>
            {/* LOC */}
          <div className="mb-6">
            <label htmlFor="location" className="block text-sm font-medium text-gray-700">
              Location
            </label>
            <div className="flex">
              <input
                type="text"
                id="location"
                name="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="mt-1 px-4 py-2 flex-grow border rounded-md focus:ring-[#23272F] focus:border-[#23272F] border-gray-300"
                required
              />
              <button
                type="button"
                onClick={handleLocateMe}
                className={`ml-4 px-4 py-2 rounded-md ${
                  isLocating ? "bg-indigo-600" : "bg-indigo-500"
                } text-white font-semibold ${
                  isLocating ? "cursor-not-allowed" : "hover:bg-indigo-600"
                } focus:outline-none focus:ring-2 ${
                  isLocating ? "focus:ring-indigo-500" : "focus:ring-indigo-600"
                }`}
                disabled={isLocating}
              >
                {isLocating ? "Locating..." : "Locate Me"}
              </button>
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
            <p className="text-sm text-gray-700 mb-4">
              Email: {user.email}
            </p>
            <p className="text-sm text-gray-700 mb-4">
              Home Address: {user.home_address}
            </p>
            <p className="text-sm text-gray-700 mb-4">
              Phone Number: {user.phone_number}
            </p>
            <p className="text-sm text-gray-700 mb-4">
              Location: {user.location.coordinates[1]}, {user.location.coordinates[0]}
            </p>
            <div className="flex justify-center space-x-4 mb-4">
              <button
                onClick={handleEditClick}
                className="px-6 py-3 rounded-md bg-indigo-600 text-white font-semibold hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                Edit
              </button>
              <button
                className="px-6 py-3 rounded-md bg-red-500 text-white font-semibold hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                Logout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;