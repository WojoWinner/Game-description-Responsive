function search()
{
	var c=document.getElementById("form").value;
	var x='<a href="'+c+'.html">'+'<body style="background-color:black;">'+'<div style="background-color:green;color:white;font-size:25px;text-align:center;">'
	+'<img src="img/'+c+'.png" width="25px" height="25px">'+c+'</div>'+'</body>'+'</a>';
	document.write(x);
	
}

