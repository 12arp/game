var timer=10;
var u=0;
var f=0;

function bubble()
{
    var arpit="";
for(i=1;i<=120;i++)
 { var a = Math.floor(Math.random()*10);
    arpit += `<div class="bubble"> ${a} </div>`
  
   
}document.querySelector("#box4").innerHTML = arpit;


}
function t()
{  
  var o =  setInterval(function()  {
        if(timer>0)
        {
        timer--;
      document.querySelector("#df").textContent=timer;}

      else
      {clearInterval(o);
    document.querySelector("#box4").innerHTML=`<h1>Game over</h1>`;
    }
    }, 1000);
}
function hit()
{ 
     f= Math.floor(Math.random()*10);

    document.querySelector("#k").textContent = f;
}
function score()
{
     u += 10;
     document.querySelector("#vg").textContent=u;
}
function final()
{
    document.querySelector("#box4").addEventListener("click",function(ds)
    {
       var h = Number(ds.target.textContent);
       if(h === f)
       {
        score();
        bubble();
        hit();
       }
    })
}
bubble();
t();
hit();
final();

