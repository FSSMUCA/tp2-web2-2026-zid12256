let nom = "   Fatima   "
let age = "23"
let email = "fatima@example"
let scoreJeu = "150pts"
let estAdmin = "false"
let derniereConnexion = null
let nombreConnexions = "0"

let nomC = nom.trim() || "Inconnu";
let ageN = parseInt(age);
let ageC = (Number.isNaN(ageN) || ageN <= 0) ? "valeur invalide" : ageN + " (valide)";
let emailC = (email.includes("@") && email.indexOf(".", email.indexOf("@")) !== -1) ? email : email + " (invalide : pas de point après @)";
let scoreC = parseInt(scoreJeu) || 0;
let adminC = estAdmin === "true";
let dcC = derniereConnexion ?? "Jamais connecté";
let nbC = Number(nombreConnexions) === 0 ? "Aucune connexion" : Number(nombreConnexions);

console.log(`===== RAPPORT UTILISATEUR =====
nom               : "${nomC}" (corrigé : espaces supprimés)
age               : ${ageC}
email             : "${emailC}"
scoreJeu          : ${scoreC} (extrait depuis "${scoreJeu}")
estAdmin          : ${adminC} (attention : Boolean("false") = true, conversion manuelle requise)
derniereConnexion : "${dcC}" (valeur par défaut via ??)
nombreConnexions  : "${nbC}" (0 après conversion)
===============================`);