import { useState } from "react";
import Input from "../../components/common/Input";

const Signup = () => {
  const [location, setLocation] = useState("");
  const [isLocating, setIsLocating] = useState(false);

  const handleLocateMe = () => {
    setIsLocating(true);
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation(
          `${position.coords.latitude}, ${position.coords.longitude}`
        );
        setIsLocating(false);
      },
      (error) => {
        setIsLocating(false);
        console.error("Error getting location:", error);
      }
    );
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Signup form submitted with location:", location);
  };


  return (
    <div className="bg-[#23272F] min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full p-8 bg-white shadow-md rounded-md">
        <h1 className="text-3xl font-semibold text-center text-[#23272F] mb-6">
          Sign Up
        </h1>
        <form onSubmit={handleSubmit}>
          <Input
            label="Username"
            type="text"
            name="username"
            value=""
            onChange={() => {}}
            required
          />
          <Input
            label="Email"
            type="email"
            name="email"
            value=""
            onChange={() => {}}
            required
          />
          <Input
            label="Password"
            type="password"
            name="password"
            value=""
            onChange={() => {}}
            required
          />
          <Input
            label="Home Address"
            type="text"
            name="home_address"
            value=""
            onChange={() => {}}
            required
          />
          <Input
            label="Phone Number"
            type="tel"
            name="phone_number"
            value=""
            onChange={() => {}}
            required
          />
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
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="mt-1 px-4 py-2 flex-grow border rounded-md focus:ring-[#23272F] focus:border-[#23272F] border-gray-300"
                required
              />

              <button
                type="button"
                onClick={handleLocateMe}
                className={`ml-4 px-4 py-2 rounded-md ${
                  isLocating ? "bg-green-600" : "bg-green-500"
                } text-white font-semibold ${
                  isLocating ? "cursor-not-allowed" : "hover:bg-green-600"
                } focus:outline-none focus:ring-2 ${
                  isLocating ? "focus:ring-green-500" : "focus:ring-green-600"
                }`}
                disabled={isLocating}
              >
                {isLocating ? "Locating..." : "Locate Me"}
              </button>
            </div>
          </div>
          <div className="flex items-center justify-center mt-6">
            <button
              type="submit"
              className="px-6 py-3 rounded-md bg-green-600 text-white font-semibold hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              Sign Up
            </button>
          </div>
          <div className="mt-4 text-center">
            <span className="text-sm text-gray-600">
              Already have an account?{" "}
              <a href="#" className="text-indigo-600 hover:text-indigo-800">
                Log In
              </a>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
