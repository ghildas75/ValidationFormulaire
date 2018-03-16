function afficherPrix(){
	
    var comboProd= document.formulaire.produit;

    var index=comboProd.selectedIndex;

    var prix=comboProd.options[index].value;
   
    document.getElementById("idPrix").innerHTML=prix+"$";

}

function valider(){
	const taux_tps=0.05;
	const taux_tvq=0.09975;
	var qte=parseInt(document.formulaire.txtQuantite.value);
	var prix=parseFloat(document.getElementById("idPrix").innerHTML);
	//alert(prix);
	var totalAvanTaxe=prix*qte;
	document.getElementById("idTotalAvantTaxe").innerHTML=totalAvanTaxe.toFixed(2)+"$";
	var totalTps=taux_tps*totalAvanTaxe;
	document.getElementById("idTps").innerHTML=totalTps.toFixed(2)+"$";
	var totalTvq=taux_tvq*totalAvanTaxe;
	document.getElementById("idTvq").innerHTML=totalTvq.toFixed(2)+"$";
	var totalApresTAXE=  totalAvanTaxe+totalTvq+totalTps;
	document.getElementById("idTotalApresTaxe").innerHTML=totalApresTAXE.toFixed(2)+"$";
	
	
}