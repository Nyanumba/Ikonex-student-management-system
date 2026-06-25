import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      <div className="bg-slate-950 text-white flex flex-col justify-center px-20">
        <h1 className="text-6xl font-bold">
          IKONEX
        </h1>

        <p className="mt-6 text-xl text-slate-400">
          Academic performance tracking
          built for modern schools.
        </p>
      </div>

      <div className="flex items-center justify-center bg-white">
        <form
          onSubmit={handleLogin}
          className="w-full max-w-md"
        >
          <h2 className="text-4xl font-bold mb-8">
            Sign In
          </h2>

          <input
            type="email"
            placeholder="Email"
            className="w-full border rounded-xl p-4 mb-4"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border rounded-xl p-4 mb-6"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
          />

          <button
            className="w-full bg-slate-950 text-white py-4 rounded-xl"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;