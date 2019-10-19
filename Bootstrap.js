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

