

function jumpTo(path,confirmMessage) {
	var answer = confirm(confirmMessage);
	if (answer == 1)	{
		location.href = path;
	}
}
/*
// JavaScript Document
function chkVal(o) {
	if(o.options[o.selectedIndex].defaultSelected) {
		alert("Default was selected");
	}
}
*/
function getXMLHTTP() { //fuction to return the xml http object
	var xmlhttp=false;
	try{
		xmlhttp=new XMLHttpRequest();
	}
	catch(e)	{
		try{
			xmlhttp= new ActiveXObject("Microsoft.XMLHTTP");
		}
		catch(e){
			try{
				xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
			}
			catch(e1){
				xmlhttp=false;
			}
		}
	}
	return xmlhttp;
}
function getreload(strURL,divId,newlang)
{
	if (typeof newlang === 'undefined') { newlang = '';}
	//alert(strURL);
	//alert(divId);
	//alert(newlang);

	var req = getXMLHTTP(); // fuction to get xmlhttp object
	if (req)
	{
		req.onreadystatechange = function()
		{
			if (req.readyState == 4) { //data is retrieved from server
				if (req.status == 200) { // which reprents ok status
					document.getElementById(divId).innerHTML="";
					document.getElementById(divId).innerHTML=req.responseText;
					if( divId =='newlanguage'){ 
						
						var oldlang =  document.getElementById("oldlang").value; 
						var oldurl = window.location.href;
						if( oldurl.indexOf("/"+oldlang+"/") >= 0){
							// Found Lang on URL
							var newurl = oldurl.replace("/"+oldlang+"/", "/"+newlang+"/");
							//window.location.href = newurl;
							document.getElementById("searchFrmReload").action = newurl;
                            document.getElementById('searchFrmReload').submit();
						}else{
							
							var base_path =  document.getElementById("base_path").value;
							
							//var newurl = oldurl.replace(base_path, base_path+'/'+newlang);
							// to avoid redirect to 404 page issue if no controller & action means index
							var newurl = oldurl.replace(base_path, base_path+'/'+newlang+'/reservation/hoteldetails');
							//window.location.href = newurl;
							document.getElementById("searchFrmReload").action = newurl;
                            document.getElementById('searchFrmReload').submit();
						}

						
						
					}else{
						//location.reload(true);
						document.getElementById('searchFrmReload').submit();
					}
					//
										
					return false;
					//history.go(0);
				}
				/*else
				{
					alert("There was a problem while using XMLHTTP:\n");
				}*/
			}
		}
		req.open("GET", strURL, true); //open url using get method
		req.send(null);
	}
}
function changelang(v1)
{
	document.getElementById('ch_lang').submit();
}
