import { createContext, useState } from "react";

export const InternshipContext = createContext();

export const InternshipProvider = ({ children }) => {

  const [internships, setInternships] = useState([]);

  const addInternship = (internship) => {
    setInternships((prev) => [...prev, internship]);
  };

  return (
    <InternshipContext.Provider value={{ internships, addInternship }}>
      {children}
    </InternshipContext.Provider>
  );
};