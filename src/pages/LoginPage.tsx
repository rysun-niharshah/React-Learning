/**
 * Login page — form submission delegates to authService; validation can live
 * in hooks/useLoginForm or utils/validators as the form grows.
 */

import { Input } from "../components/ui/Input";

export default function LoginPage() {

  return (
    <>
      <h1 className="text-2xl font-semibold text-gray-900">Sign in</h1>
      <p className="mt-1 text-sm text-gray-500">Use any email/password for demo.</p>  
      <form className="mt-6 space-y-4">
        <Input
          label="Email"
          type="email"
          required
        />
      </form>
    </>
  );
}
