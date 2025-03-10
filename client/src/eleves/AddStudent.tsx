import { useState } from "react";


export function AddStudent() {
    const [formData, setFormData] = useState({
      nom: "",
      prenom: "",
      dateNaissance: "",
      pere: "",
      mere: "",
      contactParents: "",
      classe: "",
    });
  
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("Élève ajouté:", formData);
      // Ici on ajoutera la logique pour sauvegarder dans la base de données
    };
  
    return (
      <div className="p-8 w-screen">
        <h1 className="text-2xl font-semibold mb-6">Ajouter un élève</h1>
        <form onSubmit={handleSubmit} className="bg-white p-6 shadow rounded-lg">
          <div className="grid grid-cols-2 gap-4">
            {/* Input Nom */}
            <input
                type="text"
                name="nom"
                placeholder="Nom"
                required
                onChange={handleChange}
                className="border p-2 rounded w-full" 
            />

            {/* Input Prenom */}
            <input
                type="text"
                name="prenom"
                placeholder="Prénom"
                required
                onChange={handleChange}
                className="border p-2 rounded w-full" 
            />

            {/* Input date de naissance */}
            <input
                type="date"
                name="dateNaissance"
                required
                onChange={handleChange}
                className="border p-2 rounded w-full" 
            />

            {/* Input nom du père */}
            <input 
                type="text" 
                name="pere" placeholder="Prenom du père" 
                required 
                onChange={handleChange} 
                className="border p-2 rounded w-full" 
            />
                        
            {/* Input nom de la mère */}
            <input
                type="text"
                name="mere"
                placeholder="Prenom et nom de la mère" 
                required onChange={handleChange} 
                className="border p-2 rounded w-full" 
            />
                        
            {/* Input contact parent */}
            <input 
                type="text" 
                name="contactParents" 
                placeholder="Contact des parents" 
                required onChange={handleChange} 
                className="border p-2 rounded w-full" 
            />

            {/* Input classe */}
            <input 
                type="text" 
                name="classe" 
                placeholder="Classe" 
                required onChange={handleChange} 
                className="border p-2 rounded w-full" 
            />
            
          </div>
          <button type="submit" className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Ajouter</button>
        </form>
      </div>
    );
  }
  
