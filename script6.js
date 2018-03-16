function afficherPrix(){
	var comboProd= document.formulaire.produit;
    var index=comboProd.selectedIndex;
	
	
	if(index!=0){
    var prix=comboProd.options[index].value;
    document.getElementById("idPrix").innerHTML=prix+"$";
	}

}
function valider(){
	var comboProd=document.formulaire.produit;
    var index=comboProd.selectedIndex;
    var nomProduit=comboProd.options[index].innerHTML;
	 var produit=comboProd.options[index].value;
	//alert(produit);
	var prix=parseFloat(document.getElementById("idPrix").innerHTML);
	//alert(prix);
	
	var qte=parseInt(document.formulaire.txtQuantite.value);
	//var tab="<tr><td>Produit</td><td>Prix</td><td>Quantite</td></tr>";
	
	if(isNaN(qte)){
	alert ("entre un  nombre svp");
	return;
	}
	var tab="<tr><td>"+nomProduit+"</td><td>"+prix+"$"+"</td><td>"+qte+"</td></tr>";
	document.getElementById("table").innerHTML+=tab;
	
	
	
	
}