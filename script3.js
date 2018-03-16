function afficherPrix(){
var comboProd= document.formulaire.produit;
//alert(typeof(comboProd));
var index=comboProd.selectedIndex;
//alert(typeof(index));
var prix=comboProd.options[index].value;
document.formulaire.txtPrix.value=prix;

}
function valider(){
const taux_tps=0.05;
const taux_tvq=0.09975;
var quantite=document.formulaire.txtQuantite.value;
//alert(typeof(quantite));
var prix=document.formulaire.txtPrix.value;
if(quantite==""){
	alert("le champ ne doit pas etre vide");
return;
}
quantite=parseInt(quantite);
if(isNaN(quantite)){
	alert("quantite doit etre un nombre");
return;
}
var totalAvantTaxe=prix*quantite;
alert(totalAvantTaxe);
	document.formulaire.txtTotalAvantTaxe.value=totalAvantTaxe.toFixed(2);

	var tps=totalAvantTaxe*taux_tps;
	document.formulaire.txtTotalTps.value=tps.toFixed(2);
	var tvq=totalAvantTaxe*taux_tvq;
	document.formulaire.txtTotalTvq.value=tvq.toFixed(2);
	var total=totalAvantTaxe+tps+tvq;
	document.formulaire.txtTotalApresTaxe.value=total.toFixed(2);
	
}