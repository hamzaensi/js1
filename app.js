

function calculer(a , b)
{
   
    if(a>b)
    return a;
    else
    return b;
 

}


function affiche()
{
    var a = prompt("Please enter a");
    var b = prompt("Please enter b");
    a = Number(a);
    b = Number(b);
    console.log(calculer(a,b));
}

function direBonjour()
{ console.log('Bonjour');
}



function into()
{
    document.getElementById("zone").innerHTML="Enter"
}

function out()
{
    document.getElementById("zone").innerHTML="Out"
}

function bgColor()
{
    document.getElementById("zone").style.backgroundColor='red'; 
}


document.getElementById("zone").onmousemove = into;
document.getElementById("zone").onmouseout = out;
document.getElementById("zone").onkeydown = bgColor;

