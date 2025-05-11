import { useRouter } from 'next/router';
import { useState } from 'react';

export default function Home() {
  const [code, setCode] = useState('');
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (code.trim()) {
      router.push(`/verify/${code}`);
    }
  };

  return (
    <div className="container">
      <h1>Certificate Verification</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Enter Verification Code"
          required
        />
        <br />
        <button type="submit">Verify</button>
      </form>
    </div>
  );
}
