import { useState, ChangeEvent } from "react";
import Input from "../../components/common/Input"; 

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Email:", email);
    console.log("Password:", password);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  return (
    <div className="bg-[#23272F] min-h-screen flex items-center justify-center">
      <div className="max-w-md p-8 bg-white shadow-md rounded-md mt-12 w-[70vw] mx-auto">
        <h2 className="text-2xl font-bold text-center text-[#23272F] mb-4">
          Login
        </h2>
        <Input
          label="Email"
          type="email"
          name="email"
          value={email}
          onChange={handleInputChange}
          required
        />
        <Input
          label="Password"
          type="password"
          name="password"
          value={password}
          onChange={handleInputChange}
          required
        />
        <div className="flex justify-center">
          <button
            onClick={handleLogin}
            className="px-6 py-3 rounded-md bg-green-600 text-white font-semibold hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
