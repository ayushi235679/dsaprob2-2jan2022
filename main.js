
function run(){    
    a=document.getElementById("a").value;
    b=document.getElementById("b").value;
    n=document.getElementById("n").value;
    n1=Math.pow(a, n);
    console.log(n1);
    n2=Math.pow(b, n);
    console.log(n2); 
if (n1>n2)
{console.log(" an > bn");
document.getElementById("answer").innerHTML="1";
}
else if (n1<n2)
{console.log(" an < bn");
document.getElementById("answer").innerHTML="2";
}
else
    {console.log("an = bn");
document.getElementById("answer").innerHTML="0";
}
}

