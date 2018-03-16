function afficherDisciplines(){
    var tabCoutAdm=[0,888.50,955.76,523.89,843.17];
    var tabDisciplineAdm=["choisir une discipline","Gestion", "Compatibilite","Economie","informatique"];
    var tabCoutMed=[0,1789.45,2345.12,2645.12,2534.34,2645.12,3402.34];
    var tabDisciplineMed=["choisir une discipline", "Medecine generale","Gynecologie","Pediatrie","urolkogie","orthopedie"];
    var indexSelectionne=document.formu.comboDept.selectedIndex;
    var comboDiscipline=document.formu.comboDiscipline;
    
    if(indexSelectionne==1){
        comboDiscipline.options.length=tabDisciplineAdm.length;
        for(var i=0; i<tabDisciplineAdm.length;i++){
            comboDiscipline.options[i].text=tabDisciplineAdm[i];
            comboDiscipline.options[i].value=" "+tabCoutAdm[i];
            
        }
    }
    else if(indexSelectionne==2){
        comboDiscipline.options.length=tabDisciplineMed.length;
                for(var i=0; i<tabDisciplineMed.length;i++){
            comboDiscipline.options[i].text=tabDisciplineMed[i];
            comboDiscipline.options[i].value=" "+tabCoutMed[i];
            
        }
        
    }
    else if (indexSelectionne ==0){
        comboDiscipline.options.length=1;
        comboDiscipline.options[0].text="choisir une discipline";
        comboDiscipline.options[0].value="0";
    }
    
    
    
}
function afficherEtudiants(){
  var tabEtudiantGestion=["choisir un etudiant","Pierre Andre","Samir Ghilas"] ;
  var tabEtudiantComptabilite=["choisir un etudiant","Robin du Bois","Jennifer Lopez"];
  var tabEtudiantOrthopedie=["choisir un etudiant","Jackson Five","Courteny Spring"];
  var indexDepSelection=document.formu.comboDept.selectedIndex;
  var indexDiscSelection=document.formu.comboDiscipline.selectedIndex;
  var comboEtudiant=document.formu.comboEtudiant;
  if(indexDepSelection==1 && indexDiscSelection==1){
    comboEtudiant.options.length=tabEtudiantGestion.length;
    for(var i=0; i<tabEtudiantGestion.length;i++){
        comboEtudiant.options[i].text=tabEtudiantGestion[i];
    }
  }
  
  else if (indexDepSelection==1 && indexDiscSelection==2){
    comboEtudiant.options.length=tabEtudiantComptabilite.length;
    for( var i=0; i<tabEtudiantComptabilite.length;i++){
        comboEtudiant.options[i].text=tabEtudiantComptabilite[i];
    }
    
  }
  
  var coutSession=document.formu.comboDiscipline.options[indexDiscSelection].value;
  document.getElementById("coutSession").innerHTML=coutSession;
}

function activerPaiement(){
    var indexSelection=document.formu.comboEtudiant.selectedIndex;
    if(indexSelection>0){
        document.formu.txtPaiement.disabled=false;
    }
    else {
        document.formu.txtPaiement.disabled=true;
        document.formu.txtPaiement.txtPaiement.value="";
        
    }
}
function calculerSolde(){
    //alert("ok");
    var txtMontantPaiement=document.formu.txtPaiement.value;
    alert(txtMontantPaiement);
    var montantPaiement=parseFloat(txtMontantPaiement);
    var txtCoutSession=document.getElementById("coutSession").innerHTML;
    var coutSession=parseFloat(txtCoutSession);
    var solde=coutSession-montantPaiement;
    alert(solde);
    document.getElementById("solde").innerHTML=solde;
    
    
}
