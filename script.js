/*function valider(){
	//alert("hello");
	//document.write("HELLO WORLD");
	// 1ere facon :document.forms[“nom Formulaire”].elements[“nom Element”].attribut 
	//TABLEEAU FORMS DANS LA CLASSE DOCUMENTS
	//attribut exemple si on veux recuperer la valeur on va mettre value
	var nom=document.forms["monFormulaire"].elements["txtNom"].value.trim();
	var prenom=document.forms["monFormulaire"].elements["txtPrenom"].value.trim();
	var code=document.forms["monFormulaire"].elements["txtCode"].value.trim();
	var commentaire=document.forms["monFormulaire"].elements["txtCommentaire"].value.trim();
	alert("Bonjour"+ "\n nom saisie: "+nom +"\n"+ "Prenom saisie: "+prenom+"\n"+"code saisie:"+code+"\n Commentaire"
	+ commentaire);
}*/

function valider(){
	
	//2eme facon •document.nomFormulaire.nomElement.attribut
	var nom=document.monFormulaire.txtNom.value.trim();
	var prenom=document.monFormulaire.txtPrenom.value.trim();
	var code=document.monFormulaire.txtCode.value.trim();
	var commentaire=document.monFormulaire.txtCommentaire.value;
	
	if(nom!="" && prenom!=""&& code!="") 
	alert("Bonjour"+ "\n nom saisie: "+nom +"\n"+ "Prenom saisie: "+prenom+"\n"+"code saisie:"+code+"\n Commentaire"
	+ commentaire);
	else 
		alert("les champs ne doit pas etre vide");
}
