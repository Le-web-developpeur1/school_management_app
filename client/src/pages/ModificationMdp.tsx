function ModificationMdp () {
    return(
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-5 items-center justify-center bg-gray-100 rounded-lg" >
           <div>
                <p className="text-sm font-medium text-gray-700 border-b">Veuillez définir votre mot de passe tout en respectant les consignes ci-dessous !</p>
                <form className="">
                <div className="">
                        <label htmlFor=""  className="block text-sm mt-4 font-medium text-gray-700"> Ancien mot de passe</label>
                        <input type="password" 
                        className="w-full px-4 py-3 mt-2 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required/>
                </div>
                <div className="">
                        <label htmlFor=""  className="block text-sm mt-4 font-medium text-gray-700">Nouveau mot de passe</label>
                        <input type="password" 
                        className="w-full px-4 py-3 mt-2 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required/>
                </div>
                <div className="">
                        <label htmlFor="" className="block text-sm mt-4 font-medium text-gray-700">Confirmer le mot de passe</label>
                        <input type="password" 
                        className="w-full px-4 py-3 mt-2 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required/>
                </div>
                    <button type="submit"
                    className="w-1/2 py-3 mt-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        Valider
                        </button>
                </form>
                <div className="mt-5 p-1 border-b">
                    <h3 className="block text-sm font-medium text-gray-700 border-b">Consignes :</h3>
                    <ul className="mt-2 text-sm font-medium text-gray-700">
                        <li>Le mot de passe doit contenir au moins un chiffre.</li>
                        <li>Le mot de passe doit comporter de 5 à 10 caractères.</li>
                        <li>La confirmation du mot de passe est obligatoire.</li>
                    </ul>
                </div>
           </div>
        </div>
    )
  }
  export default ModificationMdp; 