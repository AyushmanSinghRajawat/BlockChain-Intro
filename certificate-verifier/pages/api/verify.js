// pages/api/verify.js
export default function handler(req, res) {
  const { code } = req.query;

  const certificates = {
    'INT2025UFCT-a0987': {
      name: 'Ayushman Singh Rajawat',
      organization: 'OctaNet Services',
      role: 'Web Development Intern',
      duration: 'April 2025 - May 2025',
    },
    'INT2025UFCT-c0882': {
      name: 'Heeral Sahu',
      organization: 'Badoniya & Company',
      role: 'Web Development Intern',
      duration: 'Feb 2025 - May 2025',
    }
  };

  if (certificates[code]) {
    res.status(200).json({ valid: true, ...certificates[code] });
  } else {
    res.status(404).json({ valid: false });
  }
}
