// pages/api/verify.js
export default function handler(req, res) {
  const { code } = req.query;

  const certificates = {
    'INT2024-001': {
      name: 'Ayushman',
      organization: 'OpenAI Interns',
      role: 'AI Research Intern',
      duration: 'Jan 2024 - May 2024',
    },
    'INT2024-002': {
      name: 'Jane Doe',
      organization: 'Tech Labs',
      role: 'Frontend Developer',
      duration: 'Feb 2024 - Apr 2024',
    }
  };

  if (certificates[code]) {
    res.status(200).json({ valid: true, ...certificates[code] });
  } else {
    res.status(404).json({ valid: false });
  }
}
