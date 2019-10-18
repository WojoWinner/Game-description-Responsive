function search()
{
	let c=document.getElementById("form").value;
	let x='<a href="'+c+'.html">'+'<body style="background-color:black;">'+'<div style="background-color:green;color:white;font-size:25px;text-align:center;">'
	+'<img src="img/'+c+'.png" width="25px" height="25px">'+c+'</div>'+'</body>'+'</a>';
	
	if(c=="Panda" || c=="Funny" || c=="Strong" || c=="Pizza" || c=="panda" || c=="strong" || c=="funny" || c=="pizza")
	{
		let z='<a href="Bootstrap.html">'+'<body style="background-color:black;">'+'<div style="background-color:green;color:white;font-size:25px;text-align:center;">'
		+'<img src="img/'+c+'.png" width="25px" height="25px">'+c+'</div>'+'</body>'+'</a>';
		document.write(z);
	}
	else
	{
		document.write(x);
	}
}

