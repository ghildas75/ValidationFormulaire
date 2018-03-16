var elementActif;
function selectionnerProduit(etr){

    var listTd=etr.getElementsByTagName("td");
    document.formulaire.txtProduit.value=listTd[0].innerHTML;
    document.formulaire.txtPrix.value=listTd[1].innerHTML;
    document.formulaire.txtQuantite.value=listTd[2].innerHTML;
    elementActif=etr;
    document.formulaire.txtProduit.disabled=false;
    document.formulaire.txtPrix.disabled=false;
    document.formulaire.txtQuantite.disabled=false;
    
}
function modifier(){
    var produit=document.formulaire.txtProduit.value;
    var quantite=document.formulaire.txtQuantite.value;
    var prix=document.formulaire.txtPrix.value;
    var listTd=elementActif.getElementsByTagName("td");
    listTd[0].innerHTML=produit;
    listTd[1].innerHTML=Quantite;
    listTd[2].innerHTML=prix;
      elementActif=undefined;
      nettoyer();
}
function nettoyer(){
   document.formulaire.txtProduit.value="";
   document.formulaire.txtQuantite.value="";
   document.formulaire.txtPrix.value="";
   document.formulaire.txtProduit.disabled=true;
   document.formulaire.txtPrix.disabled=true;
   document.formulaire.txtQuantite.disabled=true;
   document.formulaire.btnModifier.disabled=true;  
}
