import { useState } from "react";
import { Link } from "react-router-dom";
import SideBar from "../components/SideBar";

// Liste des élèves
const studentsData = [
  { id: 1, nom: "Doe", prenom: "John", classe: "CM2" },
  { id: 2, nom: "Smith", prenom: "Anna", classe: "5ème" },
];

export function ListeEleves() {
  const [students, setStudents] = useState(studentsData);

  return (
    <div className="flex h-screen w-screen">
      <SideBar/>
      <div className="flex-1 p-8">
      <h1 className="text-2xl font-semibold mb-6">Liste des élèves</h1>
      <Link to="/addstudent" className="bg-blue-500 text-white px-4 py-2 rounded">
        Ajouter un élève
      </Link>
      <div className="mt-6 bg-white p-4 shadow rounded-lg">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2">Nom</th>
              <th className="border p-2">Prénom</th>
              <th className="border p-2">Classe</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id} className="border">
                <td className="border p-2">{student.nom}</td>
                <td className="border p-2">{student.prenom}</td>
                <td className="border p-2">{student.classe}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </div>
      
    </div>
  );
}


