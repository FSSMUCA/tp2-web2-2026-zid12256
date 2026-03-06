let nomProduit = "Clavier mécanique"
let prix = 89.99
let quantite = 3
let codePromo = null
let reductionPourcentage = 10
let estMembre = true
let soldeCompte = 250

let sousTotal = prix * quantite;
let reduction = (codePromo !== null && estMembre) ? (sousTotal * reductionPourcentage / 100) : 0;
let total = sousTotal - reduction;
let assezArgent = soldeCompte >= total;
if (assezArgent) soldeCompte -= total;

console.log(`===== RÉCAPITULATIF =====
Produit     : ${nomProduit}
Quantité    : ${quantite}
Prix unit.  : ${prix} MAD
Sous-total  : ${sousTotal.toFixed(2)} MAD
Réduction   : ${reduction.toFixed(3)} MAD
Total       : ${total.toFixed(3)} MAD
Statut      : ${assezArgent ? "Paiement accepté" : "Solde insuffisant"}
Solde       : ${soldeCompte.toFixed(3)} MAD
=========================`);