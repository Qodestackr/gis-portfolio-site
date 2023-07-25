import { useState, ChangeEvent } from "react";
import Input from "../../components/common/Input";

function SignUp() {
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const handleSignUp = () => {
    // Signup logic
    console.log(user);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  return (
    <div className="bg-[#23272F] min-h-screen flex items-center justify-center">
      <div className="max-w-md p-8 bg-white shadow-md rounded-md mt-12 w-[70vw] mx-auto">
        <h2 className="text-2xl font-bold text-center text-[#23272F] mb-4">
          Sign Up
        </h2>
        <Input
          label="First Name"
          type="text"
          name="first_name"
          value={user.first_name}
          onChange={handleInputChange}
          required
        />
        <Input
          label="Last Name"
          type="text"
          name="last_name"
          value={user.last_name}
          onChange={handleInputChange}
          required
        />
        <Input
          label="Email"
          type="email"
          name="email"
          value={user.email}
          onChange={handleInputChange}
          required
        />
        <Input
          label="Password"
          type="password"
          name="password"
          value={user.password}
          onChange={handleInputChange}
          required
        />
        <Input
          label="Confirm Password"
          type="password"
          name="confirm_password"
          value={user.confirm_password}
          onChange={handleInputChange}
          required
        />
        <div className="flex justify-center space-x-4 mb-4">
          <button
            onClick={handleSignUp}
            className="px-6 py-3 rounded-md bg-indigo-600 text-white font-semibold hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
