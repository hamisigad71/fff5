function getXMLHttp() {
           var x = false;
           try {
              x = new XMLHttpRequest();
           }catch(e) {
             try {
                x = new ActiveXObject("Microsoft.XMLHTTP");
             }catch(ex) {
                try {
                    req = new ActiveXObject("Msxml2.XMLHTTP");
                }
                catch(e1) {
                    x = false;
                }
             }
          }
          return x;
        }	
//$(document).ready(function() {
//		getBookingCode(138866,31271);
//	});
function getBookingCode(hotel_id,site_id,bcode){
	//$('#bcode').val('');
	$('#BookingEngineBookingCodeField').html('');
	$('#BookingEngineBookingCodeField').hide();
	//$('#PromoCodeId').val('');
	if(hotel_id>0 &&  site_id>0){
		var codeHTML = '';
		var PROTOCOL = location.protocol;
		var HOST = location.hostname;
		var url = PROTOCOL+"//"+HOST+"/ajax/getBookingCode/"+hotel_id+"/"+site_id+"";
		var xmlHttp = getXMLHttp();
			xmlHttp.onreadystatechange = function()
		{
			if(xmlHttp.readyState == 4)
			{
				console.log(xmlHttp.responseText);
				if(xmlHttp.responseText!="" && xmlHttp.responseText!="[]"){
					var data = JSON.parse(xmlHttp.responseText);
					codeHTML +='<div class="form-group"><label for="apartment">'+offer_code+'</label>';
					codeHTML +='<select name="bcode" id="bcode" class="form-control" onchange="setBookingCode(this.value);">';
					codeHTML +='<option value="">'+select_offer_code+'</option>';
					$.each(data, function(key, val) {
					   var selectd = '';
					   if(key == bcode){
						   var selectd = 'selected="selected"';
					   }
					  codeHTML +='<option value="'+key+'" '+selectd+'>'+val+'</option>';
					});
					codeHTML +='</select></div>';
					console.log('------');
				}
					if(document.getElementById('BookingEngineBookingCodeField') && codeHTML!=''){
						$('#BookingEngineBookingCodeField').show();
						document.getElementById('BookingEngineBookingCodeField').innerHTML = codeHTML;
					}
				
			}
		}
		xmlHttp.open("GET", url, true);
		xmlHttp.send(null);
	}
}
function setBookingCode(bcode){
	$('#PromoCodeId').val(bcode);
}
function unsetBookingCode(){
	$('#bcode').val('');
	$('#PromoCodeId').val('');
}

function getRatePlans(hotel_id,site_id,){
	//$('#bcode').val('');
	$('#BookingEngineRateListField').html('');
	$('#BookingEngineRateListField').hide();
	//$('#PromoCodeId').val('');
	if(hotel_id>0 &&  site_id>0){
            var codeHTML = '';
            var PROTOCOL = location.protocol;
            var HOST = location.hostname;
            var url = PROTOCOL+"//"+HOST+"/ajax/getRatePlanList/"+hotel_id+"/"+site_id+"";
            var xmlHttp = getXMLHttp();
                    xmlHttp.onreadystatechange = function()
            {
                    if(xmlHttp.readyState == 4)
                    {
                            console.log( xmlHttp.responseText );
//                            if(xmlHttp.responseText!="" && xmlHttp.responseText!="[]"){
//                                    var data = JSON.parse(xmlHttp.responseText);
//                                    codeHTML +='<div class="form-group"><label for="apartment">'+offer_code+'</label>';
//                                    codeHTML +='<select name="bcode" id="bcode" class="form-control" onchange="setBookingCode(this.value);">';
//                                    codeHTML +='<option value="">'+select_offer_code+'</option>';
//                                    $.each(data, function(key, val) {
//                                       var selectd = '';
//                                       if(key == bcode){
//                                               var selectd = 'selected="selected"';
//                                       }
//                                      codeHTML +='<option value="'+key+'" '+selectd+'>'+val+'</option>';
//                                    });
//                                    codeHTML +='</select></div>';
//                            }
//                            if(document.getElementById('BookingEngineBookingCodeField') && codeHTML!=''){
//                                    $('#BookingEngineBookingCodeField').show();
//                                    document.getElementById('BookingEngineBookingCodeField').innerHTML = codeHTML;
//                            }

                    }
            }
            xmlHttp.open("GET", url, true);
            xmlHttp.send(null);
    }
}
