
function activerAutre(){
    var autres=document.formu.chkAutre.checked;
    if(autres == true){
        document.formu.txtAutre.disabled=false;
    }
    else{
     document.formu.txtAutre.disabled=false;
     document.formu.txtAutre.value="";
    }
}



function valider(){
    //document.write("hello");
    var nom=document.formu.txtNom.value;
    var prenom=document.formu.txtPrenom.value;
   //document.write(nom);
   var langueFr=document.formu.chkFrancais.checked;
   var langueAn=document.formu.chkAnglais.checked;
   var autreLangue=document.formu.chkAutre.checked;
   var langueParlees="";
   if(langueFr){
    languesParlees=document.formu.chkFrancais.value;
   }
   if(langueAn){
    if(langueParlees!=""){
        langueParlees+=" ,";
    }
    langueParlees=document.formu.chkAnglais.value;
   }
  if(autreLangue){
    var txtautreLangue=document.formu.txtAutre.value;
    if(txtautreLangue!=""){
        if(langueParlees!=""){
            languesParlees+=" ,";
             }
        langueParlees+=txtautreLangue;
        
    }
     

}
 var listSexe=document.formu.radiosexe;
 alert("listSexe");
 var sexe=" ";
 for (i=0; i<listSexe.length;i++){
    if(listSexe[i].checked){
        sexe=listSexe[i].value;
        break;
    }
 }
 
var indexEtatCivil=document.formu.cboEtatCivil.selectedIndex;
var etatCivil=document.formu.cboEtatCivil.options[indexEtatCivil].text;
var commentaire=document.formu.txtCommentaire.value;
var adresse="";
var numero=document.formu.txtNumero.value;
var rue=document.formu.txtRue.value;
var app=document.formu.txtApp.value;
var ville=document.formu.txtVille.value;
var codePostal=document.formu.txtCodePostale.value;
var indexProvince=document.formu.cboProvince.value;
var province=document.formu.cboProvince.value;
adresse+=numero+" "+rue;
if(app !=""){
    adresse+= "app "+ app;
}

adresse+="," + ville+ ", "+ province +" ,"+ codePostal;
var photo=document.formu.txtPhoto.files[0].name;
document.getElementById("AffichageNomPrenom").innerHTML=nom+" "+prenom;
document.getElementById("adresse").innerHTML=adresse;
document.getElementById("sexe").innerHTML=sexe;
document.getElementById("idAffichageEtatCivil").innerHTML=etatCivil;
document.getElementById("parler").innerHTML=langueParlees;
document.getElementById("idAffichageCommentaire").innerHTML=commentaire;
document.getElementById("photo").src=photo;
document.getElementById("zoneAffichage").style.display="block";

}
