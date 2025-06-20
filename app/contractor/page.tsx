'use client';

import { useState } from 'react';
import { ShieldCheck, FileText} from 'lucide-react';

export default function ContractorPage() {
  const [access, setAccess] = useState(false);
  const [input, setInput] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input === 'c3h') {
      setAccess(true);
      setError('');
    } else {
      setError('Incorrect password. Please try again.');
      setInput('');
    }
  };

  return (
    <main className="min-h-screen bg-black flex flex-col items-center justify-center py-20 px-4">
      {!access ? (
        <form
          onSubmit={handleSubmit}
          className="bg-gray-900/90 border border-gray-800 p-8 rounded-2xl shadow-2xl flex flex-col items-center gap-4"
        >
          <ShieldCheck className="w-10 h-10 text-blue-400 mb-2" />
          <h1 className="text-2xl font-bold mb-1 text-white">Contractor Access</h1>
          <p className="mb-2 text-gray-400 text-center">Please enter your password to view protected documents and agreements.</p>
          <input
            type="password"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter password"
            className="border border-gray-700 bg-gray-800 rounded px-4 py-2 text-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            autoFocus
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-7 py-2 rounded font-semibold text-lg mt-2 transition"
          >
            Enter
          </button>
          {error && <span className="text-red-500 mt-2">{error}</span>}
        </form>
      ) : (
        <section className="bg-gray-900/90 border border-gray-800 p-10 rounded-2xl shadow-2xl w-full max-w-xl flex flex-col items-center gap-8">
          <h2 className="text-2xl font-bold text-white flex items-center gap-2 mb-4">
            <ShieldCheck className="w-7 h-7 text-blue-400" />
            Contractor Resources
          </h2>
          <p className="text-gray-300 text-center mb-2">
            All necessary forms for onboarding are linked below.  
            Please complete and submit both forms online.
          </p>
          <div className="flex flex-col w-full gap-5">
            <a
              href="https://signnow.com/s/KfDaRkYE"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg px-6 py-3 rounded-xl shadow transition group"
            >
              <FileText className="w-6 h-6 group-hover:scale-110 transition" />
              Complete Independent Contractor Agreement and W9
              <span className="text-blue-200 text-2xl ml-1 group-hover:translate-x-1 transition">&#8599;</span>
            </a>
          </div>
          {/* Cognito Form Embed Placeholder */}
          <div className="w-full mt-8">
            {/* <iframe src="https://www.cognitoforms.com/f/your-form-id" style={{ width: "100%", height: 600, border: 0 }}></iframe> */}
          </div>
        </section>
      )}
    </main>
  );
}
