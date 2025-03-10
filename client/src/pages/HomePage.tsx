import { Link } from "react-router-dom";

function HomePage() {
    return (
        <div className="flex flex-col items-center justify-center w-screen h-screen bg-gray-100">
            <h1 className="text-4xl font-bold mb-4">Bienvenue dans l'application School_management</h1>
            <Link to="/login" className="text-blue-500 text-lg font-bold px-4 py-2 rounded">Connexion</Link>
            <Link to="/register" className="mt-2 font-bold text-blue-500 text-lg">Créer un compte</Link>
        </div>
    );
}

export default HomePage;
