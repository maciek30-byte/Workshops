export const employees = [
    {
      name: "Jan Kowalski",
      age: 35,
      nationality: "Polish",
      position: "Software Developer",
      salary: 85000,
      department: "IT",
      yearsOfExperience: 8,
      skills: ["JavaScript", "React", "Node.js"],
      email: "jan.kowalski@company.com",
    },
    {
      name: "Anna Nowak",
      age: 28,
      nationality: "Polish",
      position: "Project Manager",
      salary: 92000,
      department: "Management",
      yearsOfExperience: 5,
      skills: ["Agile", "Scrum", "MS Project"],
      email: "anna.nowak@company.com",
    },
    {
      name: "Piotr Wiśniewski",
      age: 42,
      nationality: "Polish",
      position: "Data Analyst",
      salary: 78000,
      department: "Business Intelligence",
      yearsOfExperience: 12,
      skills: ["SQL", "Python", "Tableau"],
      email: "piotr.wisniewski@company.com",
    },
    {
      name: "Magdalena Lewandowska",
      age: 31,
      nationality: "Polish",
      position: "UX Designer",
      salary: 70000,
      department: "Design",
      yearsOfExperience: 6,
      skills: ["Figma", "Adobe XD", "Sketch"],
      email: "magdalena.lewandowska@company.com",
    },
    {
      name: "John Smith",
      age: 39,
      nationality: "American",
      position: "Marketing Specialist",
      salary: 75000,
      department: "Marketing",
      yearsOfExperience: 10,
      skills: ["SEO", "Content Marketing", "Google Analytics"],
      email: "john.smith@company.com",
    },
    {
      name: "Emma Johnson",
      age: 27,
      nationality: "British",
      position: "HR Manager",
      salary: 82000,
      department: "Human Resources",
      yearsOfExperience: 4,
      skills: ["Recruitment", "Employee Relations", "Training"],
      email: "emma.johnson@company.com",
    },
    {
      name: "Hans Mueller",
      age: 45,
      nationality: "German",
      position: "Financial Advisor",
      salary: 95000,
      department: "Finance",
      yearsOfExperience: 15,
      skills: ["Financial Planning", "Risk Assessment", "Investment Strategies"],
      email: "hans.mueller@company.com",
    },
    {
      name: "Maria Garcia",
      age: 33,
      nationality: "Spanish",
      position: "Customer Support",
      salary: 60000,
      department: "Customer Service",
      yearsOfExperience: 7,
      skills: ["CRM Software", "Problem Solving", "Multilingual Support"],
      email: "maria.garcia@company.com",
    },
    {
      name: "Yuki Tanaka",
      age: 29,
      nationality: "Japanese",
      position: "Product Manager",
      salary: 88000,
      department: "Product Development",
      yearsOfExperience: 5,
      skills: ["Product Strategy", "User Stories", "A/B Testing"],
      email: "yuki.tanaka@company.com",
    },
    {
      name: "Luc Dubois",
      age: 37,
      nationality: "French",
      position: "Sales Representative",
      salary: 72000,
      department: "Sales",
      yearsOfExperience: 9,
      skills: ["Negotiation", "CRM", "Presentation"],
      email: "luc.dubois@company.com",
    },
  ];
  
  export type Person = (typeof employees)[number];

  // Definicja interfejsów
interface Address {
    city: string;
    country: string;
}

interface Job {
    title: string;
    industry: string;
}

export interface PPerson {
    name: string;
    age: number;
    gender: 'male' | 'female';
    occupation: string;
    location: Address;
    previousAddresses: Address[];
    jobs: Job[];
    isEmployedFullTime: boolean;
}


export const people: PPerson[] = [
    {
        name: 'Anna Kowalska',
        age: 32,
        gender: 'female',
        occupation: 'Doctor',
        location: { city: 'Warsaw', country: 'Poland' },
        previousAddresses: [
            { city: 'Gdańsk', country: 'Poland' },
            { city: 'Kraków', country: 'Poland' }
        ],
        jobs: [
            { title: 'Doctor', industry: 'Healthcare' },
            { title: 'Intern', industry: 'Education' }
        ],
        isEmployedFullTime: true
    },
    {
        name: 'Jan Nowak',
        age: 45,
        gender: 'male',
        occupation: 'Engineer',
        location: { city: 'Berlin', country: 'Germany' },
        previousAddresses: [
            { city: 'Munich', country: 'Germany' }
        ],
        jobs: [
            { title: 'Engineer', industry: 'Technology' }
        ],
        isEmployedFullTime: true
    },
    {
        name: 'Maria Zielińska',
        age: 24,
        gender: 'female',
        occupation: 'Student',
        location: { city: 'Warsaw', country: 'Poland' },
        previousAddresses: [
            { city: 'London', country: 'UK' }
        ],
        jobs: [
            { title: 'Intern', industry: 'Education' }
        ],
        isEmployedFullTime: false
    },
    {
        name: 'Piotr Wiśniewski',
        age: 19,
        gender: 'male',
        occupation: 'Student',
        location: { city: 'Wrocław', country: 'Poland' },
        previousAddresses: [],
        jobs: [],
        isEmployedFullTime: false
    },
    {
        name: 'Zofia Dąbrowska',
        age: 52,
        gender: 'female',
        occupation: 'Teacher',
        location: { city: 'Poznań', country: 'Poland' },
        previousAddresses: [
            { city: 'Warsaw', country: 'Poland' }
        ],
        jobs: [
            { title: 'Teacher', industry: 'Education' },
            { title: 'Freelancer', industry: 'Technology' }
        ],
        isEmployedFullTime: true
    },
    {
        name: 'Tomasz Nowak',
        age: 39,
        gender: 'male',
        occupation: 'Software Developer',
        location: { city: 'Gdańsk', country: 'Poland' },
        previousAddresses: [
            { city: 'Warsaw', country: 'Poland' }
        ],
        jobs: [
            { title: 'Software Developer', industry: 'Technology' }
        ],
        isEmployedFullTime: true
    },
    {
        name: 'Katarzyna Jabłońska',
        age: 28,
        gender: 'female',
        occupation: 'Designer',
        location: { city: 'Kraków', country: 'Poland' },
        previousAddresses: [
            { city: 'Wrocław', country: 'Poland' }
        ],
        jobs: [
            { title: 'Designer', industry: 'Art' }
        ],
        isEmployedFullTime: true
    },
    {
        name: 'Jakub Kaczmarek',
        age: 16,
        gender: 'male',
        occupation: 'High School Student',
        location: { city: 'Lublin', country: 'Poland' },
        previousAddresses: [],
        jobs: [],
        isEmployedFullTime: false
    },
    {
        name: 'Elżbieta Nowicka',
        age: 50,
        gender: 'female',
        occupation: 'Manager',
        location: { city: 'Warsaw', country: 'Poland' },
        previousAddresses: [
            { city: 'Poznań', country: 'Poland' }
        ],
        jobs: [
            { title: 'Manager', industry: 'Business' }
        ],
        isEmployedFullTime: true
    },
    {
        name: 'Michał Król',
        age: 22,
        gender: 'male',
        occupation: 'Intern',
        location: { city: 'Warsaw', country: 'Poland' },
        previousAddresses: [],
        jobs: [
            { title: 'Intern', industry: 'Technology' }
        ],
        isEmployedFullTime: false
    }
];

// Przykładowe zastosowanie filtrów
console.log(people);



  