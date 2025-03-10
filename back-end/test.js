const bcrypt = require('bcryptjs');

const enteredPassword = "mm123"; // Mot de passe entré par l'utilisateur
const storedPassword = "$2b$10$oWxxnpV7wPxVP85d1EPIF.lTUL7xL58Ai6jsVFWo5/U"; // Hash stocké en base

bcrypt.compare(enteredPassword, storedPassword, (err, isMatch) => {
    if (err) throw err;
    console.log("Est-ce que les mots de passe correspondent ?", isMatch);
});
