function search()
{
	let c=document.getElementById("form").value;
	
	
	if(c=="Panda" || c=="Funny" || c=="Strong" || c=="Pizza" || c=="panda" || c=="strong" || c=="funny" || c=="pizza" || c=="Start" || c=="start")
	{
		let z='<a href="Bootstrap.html">'+'<body style="background-color:black;">'+'<div style="background-color:green;color:white;font-size:25px;text-align:center;">'
		+'<img src="img/'+c+'.png" width="25px" height="25px">'+c+'</div>'+'</body>'+'</a>';
		document.write(z);
	}
	else if(c=="Mochi" || c=="mochi" || c=="TwoKatanas" || c=="twokatanas" || c=="Shuriken" || c=="shuriken" || c=="KunaiKnife" || c=="kunaiknife" ||
	c=="Legier's Katana" || c=="legier's katana" || c=="Pictures" || c=="pictures" )
	{
		
		let x='<a href="'+c+'.html">'+'<body style="background-color:black;">'+'<div style="background-color:green;color:white;font-size:25px;text-align:center;">'
	+'<img src="img/'+c+'.png" width="25px" height="25px">'+c+'</div>'+'</body>'+'</a>';
	
	document.write(x);
	}
	else if(c=="")
	{
		let a="Najpierw musisz coś wpisać";
		document.getElementById("form").style.color="red";
		document.getElementById("form").value=a;
	}
	else
	{
		let b="Błędna nazwa przedmiotu";
		document.getElementById("form").style.color="red";
		document.getElementById("form").value=b;
	}
	
}

function Day()
{
   let d = document.body.className="Day";  
   let x = document.getElementsByClassName("Dayy");
   let day = document.getElementsByClassName("dropdown-item");
   let pictures = document.getElementsByClassName("Pictures");
   let hove = document.getElementsByClassName("hover");
   document.querySelector(".navbar").className="navbar navbar-dark bg-warning navbar-expand-lg";
   document.querySelector(".footer").className="footer footer-copyright text-center text-light bg-warning py-3";
   document.querySelector(".dropdown-menu ").style.backgroundColor="white";
  
   
   let k;
   let i;
   let j;
   let p;
   for (i = 0; i < x.length; i++) 
   {
    x[i].style.color = "gold";
	
	} 
	for (j=0; j < day.length; j++)
	{
		day[j].className="dropdown-item Dhov";
	}
	for (k=0; k < hove.length; k++)
	{
		hove[k].className="hover hoverDay Pictures";
	}
	for (p = 0; p < pictures.length; p++)
	{
		pictures[p].style.backgroundColor="aliceblue";
	}
   d;
}
function Night()
{
   let n = document.body.className="Night";  
   let x = document.getElementsByClassName("Nightt");
   let night= document.getElementsByClassName("dropdown-item");
   let pictures = document.getElementsByClassName("Pictures");
   let hove = document.getElementsByClassName("hover");
   document.querySelector(".navbar").className="navbar navbar-dark bg-dark navbar-expand-lg";
   document.querySelector(".footer").className="footer footer-copyright text-center text-muted bg-dark py-3";
   document.querySelector(".dropdown-menu ").style.backgroundColor="gray";
   
   let i;
   let j;
   let p;
   let k;
   for (i = 0; i < x.length; i++) 
   {
    x[i].style.color = "cyan";
	} 
	for (j=0; j < night.length; j++)
	{
		night[j].className="dropdown-item Nhov";
	}
	for (k=0; k < hove.length; k++)
	{
		hove[k].className="hover hoverNight Pictures";
	}
	for (p=0; p < pictures.length; p++)
	{
		pictures[p].style.backgroundColor="gray";
	}
   n;
}