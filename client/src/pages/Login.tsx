import { useState } from "react";
import axios from "axios";
import PasswordInput from "../components/PasswordInput";
import { useNavigate } from "react-router-dom";

export function Login  () {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showmessage, setShowMessage] = useState(false);
  const navigate = useNavigate();


  const handlePasswordChange = (password: string) => {
    setPassword(password);
};


 

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true); // Activation du loader
    setShowMessage(false);
    try {
        const response = await axios.post('http://localhost:3000/api/login', {
            email,
            password
        });
        localStorage.setItem('token', response.data.token);
        setMessage('Connexion réussie');
        setError('');
        setTimeout(() => {
          setLoading(false);
          setShowMessage(true);
          setTimeout(() => {
            navigate("/dashboard"); // Redirection après 3 secondes
          }, 1000)
      }, 3000);
       
    } catch (error) {
      setTimeout(() => {
      setLoading(false); // Désactivation du loader après la réponse
      setError('Email ou mot de passe incorrect');
      setMessage('');
      setShowMessage(true);
     }, 1000);
    }

};

    return (
      <div className="relative w-screen h-screen bg-cover bg-center" style={{ backgroundImage: "url('/src/assets/logoFBB.jpg')" }}>
      <div className="float-end mt-2 mr-96 transform-translate-y-1/2 rounded-lg w-96 p-6 bg-opacity-90 shadow-md">
        <h2 className="text-2xl font-bold text-gray-700 text-center mb-6">Connexion</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            {showmessage && <p className="text-red-600">{error}</p>}
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Adresse email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              placeholder="exemple@gmail.com"
              onChange={(e) => setEmail(e.target.value)}
              className="w-80 px-2 py-2 mt-2 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <PasswordInput onPasswordChange={handlePasswordChange}/>

          <div className="text-right mb-3">
            <a href="/resetpassword" className="text-sm mr-4 text-blue-500 hover:underline">
              Mot de passe oublié ?
            </a>
          </div>

         
          <button
            type="submit"
            className="w-80 bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200 flex justify-center items-center"
            disabled={loading} // Désactiver le bouton si en chargement
          >
              {loading ? (
        <span className="border-t-2 border-white border-solid w-5 h-5 rounded-full animate-spin"></span>
    ) : (
        'Se connecter'
    )}
          </button>
          {showmessage && <p className="text-lime-600">{message}</p>
        }
        </form>
      </div>
    </div>
    )
}