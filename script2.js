function valider(){
	const taux_tps=0.05;
	const taux_tvq=0.09975;
	var prix=parseFloat(document.formulaire.txtPrix.value);
	var qte =parseInt(document.formulaire.txtQuantite.value);
	var totalAvantTaxe=prix*qte;
	document.formulaire.txtTotalAvantTaxe.value=totalAvantTaxe.toFixed(2);
	var tps=totalAvantTaxe*taux_tps;
	document.formulaire.txtTotalTps.value=tps.toFixed(2);
	var tvq=totalAvantTaxe*taux_tvq;
	document.formulaire.txtTotalTvq.value=tvq.toFixed(2);
	var total=totalAvantTaxe+tps+tvq;
	document.formulaire.txtTotalApresTaxe.value=total.toFixed(2);
}