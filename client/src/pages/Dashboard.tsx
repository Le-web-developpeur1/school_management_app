import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { Search } from "lucide-react";
import SideBar from "../components/SideBar";

const stats = [
  { title: "Total Élèves", value: 350 },
  { title: "Total Enseignants", value: 45 },
  { title: "Total Classes", value: "10" },
  { title: "Absences Aujourd'hui", value: 5 },
];

const absencesData = [
  { day: "Lun", absences: 4 },
  { day: "Mar", absences: 7 },
  { day: "Mer", absences: 3 },
  { day: "Jeu", absences: 6 },
  { day: "Ven", absences: 5 },
  { day: "Sam", absences: 1 },
];

export default function Dashboard() {

  return (
    <div  className="w-full flex">
      <SideBar/>
      {/* Main Content */}
      <main className="flex-1 p-8">
        <p className="text-2xl font-semibold mb-6 text-center">Bienvenue dans votre espace personnel.</p>
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-semibold">Tableau de Bord</h1>
              <div className="relative w-72">
                <input
                  type="text"
                  placeholder="Rechercher..."
                  className="w-full p-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Search className="absolute left-3 top-2 text-gray-500" size={20} />
              </div>
          
          </div>
          
          
          <div className="grid grid-cols-4 gap-4 mb-6">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white p-4 shadow rounded-lg">
                <h3 className="text-lg font-semibold">{stat.title}</h3>
                <p className="text-2xl font-bold text-blue-600">{stat.value}</p>
              </div>
            ))}
          </div>
          
          {/* Graphique des absences */}
          <div className="bg-white p-6 shadow rounded-lg">
            <h2 className="text-lg font-semibold mb-4">Absences cette semaine</h2>
            <ResponsiveContainer width="80%" height={400}>
              <BarChart data={absencesData}>
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="absences" fill="#3182CE" />
              </BarChart>
            </ResponsiveContainer>
          </div>
      </main>
    </div>
  );
}
