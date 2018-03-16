function chargerComboDate(){
chargerComboAnnee();
chargerComboMois();
chargerComboJour();
}
function chargerComboAnnee(){
 var dateActuel=new Date();
 var annee=dateActuel.getFullYear();
 var nombreAnnee=40;
 var comboAnnee=document.formu.comboAnnee;
 comboAnnee.options.length=nombreAnnee;
 var compteur=0;
 for(var i=annee;i>annee-nombreAnnee;i--){
    comboAnnee.options[compteur].value=" "+i;
    comboAnnee.options[compteur++].text=" "+i;
 }
}


function chargerComboMois(){
    var mois=["janvier","fevrier","mars","avril","mai","juin","juillet","aout","septembre","ocotobre","novembre","decembre"];
    var comboMois= document.formu.comboMois;
    comboMois.options.length=mois.length;
    for(var i=0; i<mois.length;i++){
        comboMois.options[i].value=""+(i+1);
        comboMois.options[i].text=mois[i];
    }
    
}
function chargerComboJour(nbreJour){
    var jours=["01","02","03","04","05","06","07","08","09","10","11","12","13","14","15",'16',"17","18","19","20",
               "21","22","23","24","25","26","27","28","29","30","31" ];
    comboJour=document.formu.comboJour;
    if(nbreJour==undefined){
      nbreJour=jours.length;
    }
    comboJour.options.length=nbreJour;
     for(var i=0; i<jours.length;i++){
        comboJour.options[i].value=" "+(i+1);
        comboJour.options[i].text=jours[i];
    }
    
    
}

function selectionnerMoisAnnee(){
   var comboMois=document.formu.comboMois;
   var indexSelectionMois=comboMois.selectedIndex;
   var mois=parseInt(comboMois.options[indexSelectionMois].value);
   var nbreJour=31;
   switch (mois){
      case 1:  case 3: case 5: case 7: case 8: case 10: case 12:
         nbreJour=31;
         break;
      case 4: case 6: case 9: case 11:
         nbreJour=30;
         break;
      case 2:
         var comboAnnee= document.formu.comboAnnee;
         var indexSelectionAnnee=comboAnnee.selectedIndex;
         var annee=comboAnnee.options[indexSelectionAnnee].value;
         if(estBissextile(annee)){
            nbreJour=28;
         }
         else {
            nbreJour=29;
         }
   }
   chargerComboJour(nbreJour);
}
 function estBissextile(annee){
   var bisex=true;
   if(annee%4!=0){
      bisex=false;
   }
   else{
      if(annee%100==0 && annee%400!==0){
         bisex=false;
      }
   }
   return bisex;
 }

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
