// frontend/src/Login.tsx
import { useState } from 'react';
import { signIn } from './auth-client';

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { data, error } = await signIn.email({
      email,
      password,
    });
    if (error) alert(error.message);
    else console.log('Logueado:', data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      <button type="submit">Entrar</button>
    </form>
  );
}
