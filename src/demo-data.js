const DEMO_NAMES = [
  "Aarav Sharma", "Aditi Verma", "Akash Gupta", "Ananya Singh", "Arjun Mehta",
  "Diya Patel", "Ishaan Kumar", "Kavya Nair", "Kabir Joshi", "Meera Iyer",
  "Neha Rao", "Rohan Das", "Saanvi Shah", "Vivaan Malhotra", "Zoya Khan",
  "Aditya Bose", "Anika Reddy", "Dev Patel", "Ira Chawla", "Karan Gill",
  "Mira Kapoor", "Nikhil Jain", "Pari Sinha", "Reyansh Kulkarni", "Tara Menon",
  "Yash Bhatia", "Simran Kaur", "Rahul Sethi", "Sneha Das", "Varun Pillai",
];

export function createDemoData(date) {
  const students = DEMO_NAMES.map((name, index) => ({
    id: `demo-student-${String(index + 1).padStart(3, "0")}`,
    name,
    rollNumber: `DEMO-${String(index + 1).padStart(3, "0")}`,
  }));
  const records = students.slice(0, 24).map((student, index) => ({
    studentId: student.id,
    date,
    status: index % 6 === 0 ? "Absent" : "Present",
  }));
  return { students, records };
}
