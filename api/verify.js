export default function handler(req, res) {
    const { code } = req.query;
  
    const data = {
      "INT2024-001": {
        name: "Ayushman Sinha",
        organization: "Palate Nourish Treats",
        duration: "Jan 2024 - Mar 2024",
        role: "Frontend Developer Intern"
      },
      "TRN2024-032": {
        name: "Riya Kapoor",
        organization: "GreenTech Solutions",
        duration: "Feb 2024 - Apr 2024",
        role: "Machine Learning Trainee"
      }
    };
  
    if (!code || !data[code]) {
      return res.status(404).json({ valid: false, message: "Invalid certificate code." });
    }
  
    return res.status(200).json({ valid: true, ...data[code] });
  }
  