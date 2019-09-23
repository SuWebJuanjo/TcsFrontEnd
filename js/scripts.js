
var i = 1;


Swal.fire(
    'Hello buddy!',
    'Are you sure you want to visit my owesome website?',
    'success'
  )



function showEvents(){

    i.toString();
    document.getElementById("eventos"+i).style.display="block";    
    i++;  
    if(i > 3)
{
    document.getElementById("showMoreEvents").style.display="none";
    document.getElementById("showLessEvents").style.display="block";
 
}   

return true;

}

function noShowEvents(){

    i--;
    i.toString();
    document.getElementById("eventos"+i).style.display="none";    
      
    if(i == 1)
{
    document.getElementById("showLessEvents").style.display="none";
    document.getElementById("showMoreEvents").style.display="block";
}   

return true;

}