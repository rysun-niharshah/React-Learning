/**
 * Login page — form submission delegates to authService; validation can live
 * in hooks/useLoginForm or utils/validators as the form grows.
 */

import { useState } from "react";
import { Input } from "../components/ui/Input";

export default function LoginPage() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin() {
    alert(`Logging in with email: ${email} and password: ${password}`);
    console.log("Submitted");
  }

  return (
    <>
      <h1 className="text-2xl font-semibold text-gray-900">Sign in</h1>
      <p className="mt-1 text-sm text-gray-500">Use any email/password for demo.</p>
      <form className="mt-6 space-y-4" onSubmit={handleLogin}>
        <Input
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Input
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button onClick={handleLogin}>
          Login
        </button>
      </form>
    </>
  );
}
