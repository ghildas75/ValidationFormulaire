function afficherSalaire(){
	//alert("ok");
	var comboSalaire=document.formulaire.employe;
	var index=comboSalaire.selectedIndex;
	var tauxHoraire=comboSalaire.options[index].value;
	//alert(tauxHoraire);
	document.getElementById("Taux").innerHTML= tauxHoraire+"$";
	
}

function valider(){
	//alert("hello");
	var tauxHoraire=parseFloat(document.getElementById("Taux").innerHTML);
	//alert(tauxHoraire);
	
	var nbreHeure=parseFloat(document.formulaire.idNbreHeure.value);
	//alert(nbreHeure);
	var salaire;
	if(nbreHeure<=35)
		salaire=nbreHeure*tauxHoraire;
	else 
		
	salaire=(nbreHeure-35)*(2*tauxHoraire)+(35*tauxHoraire);
   //alert(salaire);
     document.getElementById("idPaieBrut").innerHTML=salaire+"$";
}