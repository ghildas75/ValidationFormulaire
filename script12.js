function chargerComboDate(){
  chargerComboAnnee();
  chargerComboMois();
  chargerComboJour();
}



function chargerComboAnnee(){
var dateActuel=new Date();
var annee=dateActuel.getFullYear();
alert(annee);
var nbreAnnee=40;
var comboAnnee=document.formu.comboAnnee;
var nbreElement=comboAnnee.options.length;
for(var i=0;i<nbreElement;i++) {
    comboAnnee.options.remove[i];
    
}
var compteur=0;
for(var i=annee;i>(annee-nbreAnnee);i--){
    var option= new Option(" "+i," "+i);
    comboAnnee.options.add(option,i);
}
}
function chargerComboMois(){
    var mois=["janv","fev", "mars", "avr", "mai", "juin", "juill", "aout", "sept", "oct" ,"nov" , "dec" ];
    alert(mois.length);
    var comboMois=document.formu.comboMois;
    var nbreElement=comboMois.options.length;
    alert(nbreElement);
    for(var i=0;i<nbreElement;i++) {
     comboMois.options.remove[i];
    }
    for(var i=0;i<mois.length;i++){
        var option= new Option(mois[i]," "+(i+1));
        comboMois.options.add(option,i);
    }
}
function chargerComboJour(){
     var jours=["01","02","03","04","05","06","07","08","09","10","11","12","13","14","15",'16',"17","18","19","20",
               "21","22","23","24","25","26","27","28","29","30","31" ];
     var comboJour=document.formu.comboJour;
     var nbreElement=comboJour.options.length;
      for(var i=0;i<jours.length;i++){
        var option= new Option(jours[i],""+(i+1));
        comboJour.options.add(option,i);
    }
     
}