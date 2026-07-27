export type Announcement = {
  id: string;
  title: string;
  date: string;
  text: string;
};

export const announcements: Announcement[] = [
  { id: "1", title: "Semester Registration Opens", date: "Aug 3, 2026", text: "Continuing students can begin online registration for the 2026/2027 academic year." },
  { id: "2", title: "Library Extended Hours", date: "Aug 5, 2026", text: "The Balme Library will now be open until midnight during exam preparation weeks." },
  { id: "3", title: "SRC Elections", date: "Aug 10, 2026", text: "Nominations for Student Representative Council positions are now open." },
  { id: "4", title: "Career Fair 2026", date: "Aug 14, 2026", text: "Over 40 companies will be on campus for the annual UG Career Fair." },
  { id: "5", title: "Water Supply Interruption", date: "Aug 16, 2026", text: "Maintenance work will affect water supply to Commonwealth Hall this weekend." },
  { id: "6", title: "Wi-Fi Upgrade Complete", date: "Aug 18, 2026", text: "Campus-wide Wi-Fi speeds have been upgraded across all halls and lecture theatres." },
];

export type FAQ = {
  id: string;
  question: string;
  answer: string;
};

export const faqs: FAQ[] = [
  { id: "1", question: "How do I reset my student portal password?", answer: "Visit the IT Services helpdesk in JQB or email support@ug.edu.gh with your student ID." },
  { id: "2", question: "Where can I check my exam timetable?", answer: "Exam timetables are published on the Academic Affairs section of the student portal." },
  { id: "3", question: "How do I apply for a transcript?", answer: "Transcript requests are made through the Academic Affairs Directorate portal for a small fee." },
  { id: "4", question: "Who do I contact for hall accommodation issues?", answer: "Contact your Hall Warden's office or the Housing and Student Affairs unit." },
];

export type Course = {
  code: string;
  title: string;
  credits: number;
};

export const courses: Course[] = [
  { code: "DCIT 324", title: "Mobile Application Development", credits: 3 },
  { code: "DCIT 318", title: "Software Engineering", credits: 3 },
  { code: "DCIT 316", title: "Human-Computer Interaction", credits: 3 },
  { code: "DCIT 306", title: "Computer Networks", credits: 3 },
  { code: "DCIT 308", title: "Database Systems II", credits: 3 },
  { code: "MATH 306", title: "Numerical Methods", credits: 3 },
];

export type TimetableEntry = {
  id: string;
  day: string;
  time: string;
  course: string;
  venue: string;
};

export const timetable: TimetableEntry[] = [
  { id: "1", day: "Monday", time: "8:00 - 10:00", course: "DCIT 324", venue: "JQB Auditorium" },
  { id: "2", day: "Monday", time: "10:00 - 12:00", course: "DCIT 318", venue: "New Bldg. Rm 201" },
  { id: "3", day: "Tuesday", time: "9:00 - 11:00", course: "DCIT 316", venue: "CS Dept. Lab 2" },
  { id: "4", day: "Wednesday", time: "13:00 - 15:00", course: "DCIT 306", venue: "JQB 302" },
  { id: "5", day: "Thursday", time: "11:00 - 13:00", course: "DCIT 308", venue: "New Bldg. Rm 105" },
  { id: "6", day: "Friday", time: "8:00 - 10:00", course: "MATH 306", venue: "Math Dept. Rm 4" },
];

export type FeedEvent = {
  id: string;
  title: string;
  date: string;
  description: string;
};

export const feedEvents: FeedEvent[] = [
  { id: "1", title: "Freshers' Night 2026", date: "Aug 2, 2026", description: "Join us for a night of music, games, and food to welcome the new batch of freshers to campus." },
  { id: "2", title: "Tech Innovation Summit", date: "Aug 6, 2026", description: "Computer Science students showcase final-year projects to industry judges and alumni." },
  { id: "3", title: "Inter-Hall Football Finals", date: "Aug 9, 2026", description: "Commonwealth Hall takes on Legon Hall in the finals of this year's inter-hall competition." },
  { id: "4", title: "Career Fair 2026", date: "Aug 14, 2026", description: "Meet recruiters from over 40 companies at the Great Hall forecourt from 9am to 4pm." },
  { id: "5", title: "Cultural Festival", date: "Aug 20, 2026", description: "Celebrate Ghanaian culture with performances, food stalls, and exhibitions from every hall." },
  { id: "6", title: "Blood Donation Drive", date: "Aug 22, 2026", description: "The Red Cross Society hosts a campus-wide blood donation exercise at the Health Centre." },
];
