import { useState } from 'react';
import { FaEye, FaEyeSlash } from "react-icons/fa";

import './PasswordInput.css'; // Assurez-vous de créer et d'inclure ce fichier CSS

function PasswordInput({onPasswordChange}) {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState("");

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    onPasswordChange(e.target.value);
  };

    return (
        <div className="password-input-container">
            <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Mot de passe <span className="text-red-500">*</span>
            </label>
            <input
              type={passwordVisible ? "text" : "password"}
              id="password"
              placeholder="••••••••••••"
              className="w-80 px-2 py-2 mt-2 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              value={password}
              onChange={handlePasswordChange}
            />
            </div>
            <button
            type="button"
            onClick={togglePasswordVisibility}
            className="px-2 py-2 toggle-button"
            >
                {passwordVisible ? <FaEyeSlash/> : <FaEye/>}
            </button>

         
        </div>
    );
}

export default PasswordInput;
