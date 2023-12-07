var messagesXML;
var xmlLoaded = false;
var json = false;
function GetMessages(e) {
	if(!xmlLoaded)
	{		console.log(e + "ajax/getalert/xml");
		 $.ajax({
			url: e + "ajax/getalert/xml",
			type: "get",
			dataType:'json',
			async: false,
			success: function(e) {
					json = e,
					messagesXML = json,
					xmlLoaded = true
						},
			error:function()
			{
				//console.log('Error i getting data');
			}
					 });

		
			return messagesXML;

	} else {
		return messagesXML;
	}
}

function AlertMessage(e, a) {
var s = GetMessages(a);
   // s = $.parseJSON(s), message = s[e], alert(message);
	
	
	//promise.done(function(){
			if(xmlLoaded)
			{
				alert(s[e]);
				//alert(s);
				//console.log("In AlertMessage : " );
				//console.log("msg is "+s.e);
				//console.log("messageis "+e);
			}
			else
			{
				s= false;
			}
	//});
		
}

function returnAlertMessage(e, a) {
    var s = GetMessages(a);
    if(xmlLoaded)
			{
				return s[e];
			}
			else
			{
				return false;
				}
    //return s = $.parseJSON(s), message = s[e], message;
}
var scriptName = $("script[src*=getAlert]"),
    lang = scriptName.attr("data"),
    data1Val = scriptName.attr("data1");
