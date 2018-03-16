function changer(){
    alert("ok");
var comboDept=document.formu.comboDept;
var index=comboDept.selectedIndex;
var comboDiscipline=document.formu.comboDept;
var indexDisc=comboDiscipline.selectedIndex;
//var discipline=comboDiscpline.options[indexDisc].value;
var dis=document.getElementById("discipline").innerHTML;
var opt="<option>Medecine Generale </option>";
if(index==1){
  document.getElementById("discipline").innerHTML+=opt;
}

}
function afficher(){
    
    alert("hello");
}