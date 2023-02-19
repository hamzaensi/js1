/** 

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


*/


/**
 * String 
 */

msg = "hello"; 
/*
msg1='';
for ( i = 0; i < msg.length; i++) {
    
    
    msg1 +=msg[msg.length-i-1];
}

console.log(msg1)

console.log(msg.toUpperCase());
console.log(msg.toLowerCase());
msg = "Bonjour ISET Tataouine Bonjour ISET Bonjour";



msg1= msg.replace('ISET','ISAM');
console.log(msg.charAt(9));

let str = "Please locate where locate 'locate' locate locate occurs!";
let p = str.indexOf("locate",str.indexOf("locate")+1);

//console.log(p);
*/





let str = "Please locate where 'locate' occurs!";
p = str.search("locate");


console.log(p);