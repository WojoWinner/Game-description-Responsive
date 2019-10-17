function search()
{
	var c=document.getElementById("form").value;
	var x='<a href="'+c+'.html"/>'+'<div style="background-color:green;color:white;font-size:25px;text-align:center;">'+c+'</div>'+'</a>';
	document.write(x);
}

