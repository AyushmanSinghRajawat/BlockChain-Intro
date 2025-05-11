import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function VerifyPage() {
  const { code } = useRouter().query;
  const [data, setData] = useState(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (!code) return;
    fetch(`/api/verify?code=${code}`)
      .then((res) => res.json())
      .then((result) => {
        if (result.valid) setData(result);
        else setNotFound(true);
      });
  }, [code]);

  if (!code) return <p className="status-message">Loading...</p>;
  if (notFound) return <h2 className="status-message">❌ Invalid Certificate Code</h2>;
  if (!data) return <h2 className="status-message">⏳ Verifying...</h2>;

  return (
    <div className="container">
      <h1>✅ Certificate Verified</h1>
    <p>The student's information has been successfully verified.</p>
      <table>
        <tbody>
          <tr><th>Name</th><td>{data.name}</td></tr>
          <tr><th>Organization</th><td>{data.organization}</td></tr>
          <tr><th>Role</th><td>{data.role}</td></tr>
          <tr><th>Duration</th><td>{data.duration}</td></tr>
        </tbody>
      </table>
    </div>
  );
}
