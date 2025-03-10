import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Register() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false); // État pour le loader
    const navigate = useNavigate(); // Hook pour la redirection
    const [showmessage, setShowMessage] = useState(false);

  


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true); // Activer le loader
        setShowMessage(false); // Masquer le message pendant le chargement

        try {
            await axios.post("http://localhost:3000/api/register", {
                username,
                email,
                password,
            });

            setMessage("Utilisateur enregistré avec succès !");
            setTimeout(() => {
                setLoading(false);
                setShowMessage(true);
                setTimeout(() => {
                    navigate("/login"); // Redirection après 3 secondes
                }, 1000);
            }, 3000);
        } catch (error) {
            setLoading(false); // Désactiver le loader après la réponse
            setMessage("Échec de l'inscription. Veuillez réessayer.");
            setShowMessage(true);
        }
    };

    return (
        <div className="flex justify-center items-center w-screen h-screen bg-gray-200">
            <div className="bg-white p-6 rounded-lg shadow-md w-96">
                <h2 className="text-2xl font-semibold text-center mb-4">Inscription</h2>

                {showmessage && message && (
                    <p className={`text-center text-sm mb-4 ${message.includes("✅") ? "text-green-600" : "text-red-600"}`}>
                        {message}
                    </p>
                )}

                <form onSubmit={handleSubmit} className="space-y-3">
                    <input
                        type="text"
                        placeholder="Nom d'utilisateur"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full p-2 border rounded focus:ring focus:ring-blue-300"
                        required
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-2 border rounded focus:ring focus:ring-blue-300"
                        required
                    />
                    <input
                        type="password"
                        placeholder="Mot de passe"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full p-2 border rounded focus:ring focus:ring-blue-300"
                        required
                    />
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200 flex justify-center items-center"
                        disabled={loading} // Désactiver le bouton si en chargement
                    >
                        {loading ? (
                            <span className="border-t-2 border-white border-solid w-5 h-5 rounded-full animate-spin"></span>
                        ) : (
                            "S'inscrire"
                        )}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Register;
