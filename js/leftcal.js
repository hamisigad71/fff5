var monArr=Array("January","February","March","April","May","June","July","August","September","October","November","December");
var preInDate="";
var preOutDate="";
function updateInDates(frm)
{
	updateInDates2(frm);
	updateOutDatesByList(frm);
}
function updateInDates2(frm)
{
	if(frm) {
	if(frm.dateCheckIn) {
		
		if(!isValidDate(frm.dateCheckIn.value))
		{
			alert("Invalid In Date Selected");
			frm.dateCheckIn.value=preInDate;
			return false;
		}
		var dateArr=frm.dateCheckIn.value.split("/");
		frm.lstCheckIn.value=eval(dateArr[0]);
		frm.lstCheckIn1.value=eval(dateArr[1])+"-"+dateArr[2];
		preInDate=frm.dateCheckIn.value;
	}
	}
	
}
function updateOutDates(frm)
{
	if(frm) {
		if(frm.dateCheckOut) {
					
		if(!isValidDate(frm.dateCheckOut.value))
		{
			alert("Invalid Out Date Selected");
			frm.dateCheckOut.value=preOutDate;
			return false;
		}
		var dateArr=frm.dateCheckOut.value.split("/");
		frm.lstCheckOut.value=eval(dateArr[0]);
		frm.lstCheckOut1.value=eval(dateArr[1])+"-"+dateArr[2];
		preInDate=frm.dateCheckIn.value;
		preOutDate=frm.dateCheckOut.value;
		}
	}
}
function updateOutDatesByList(frm)
{
	dateArr=frm.lstCheckIn1.value.split("-");
	dd=frm.lstCheckIn.value;
	if(dd<10)	
		dd='0'+dd;
	if(dateArr[0]<10)
		mm="0"+dateArr[0];
	else
		mm=dateArr[0];
	indate=dd+"/"+mm+"/"+dateArr[1];
	frm.dateCheckIn.value=indate;
	if(!isValidDate(frm.dateCheckIn.value))
	{
		alert("Invalid In Date Selected");
		frm.dateCheckIn.value=preInDate;
		updateInDates2(frm);
		return false;
	}
	outdate=addDays(indate,1);
	frm.dateCheckOut.value=outdate;
	frm.lstCheckOut.value=eval(outdate.substring(0,2));
	frm.lstCheckOut1.value=eval(outdate.substring(3,5))+"-"+outdate.substring(6,10);
	preInDate=frm.dateCheckIn.value;
	preOutDate=frm.dateCheckOut.value;
}

function updateOutDatesByList2(frm)
{ 
	dateArr=frm.lstCheckOut1.value.split("-");
	dd=frm.lstCheckOut.value;
	if(dd<10)	
		dd='0'+dd;
	if(dateArr[0]<10)
		mm="0"+dateArr[0];
	else
		mm=dateArr[0];
	outdate=dd+"/"+mm+"/"+dateArr[1];
	frm.dateCheckOut.value=outdate;
	if(!isValidDate(frm.dateCheckOut.value))
	{
		alert("Invalid Out Date Selected");
		frm.dateCheckOut.value=preOutDate;
		updateOutDates(frm);
		return false;
	}

	checkIn = frm.dateCheckIn.value;
	checkOut = frm.dateCheckOut.value;

	arrIn = checkIn.split("/")
	arrOut = checkOut.split("/")

	var objIn = new Date (arrIn[2], arrIn[1]-1, arrIn[0]);
	var objOut = new Date (arrOut[2], arrOut[1]-1, arrOut[0]);

	if(objIn.getTime() > objOut.getTime())
	{
		alert("Check Out Date cannot be less than Check In Date");
		frm.dateCheckOut.value=preOutDate;
		updateOutDates(frm);
		return false;
	}
	preInDate=frm.dateCheckIn.value;
	preOutDate=frm.dateCheckOut.value;
}

function fnResBoxSubmit()
{
	dateArr=document.frmSearch.lstCheckOut1.value.split("-");
	if(document.frmSearch.lstCheckOut.value<10)
	dd='0'+document.frmSearch.lstCheckOut.value;
	else
	dd=document.frmSearch.lstCheckOut.value;
	if(dateArr[0]<10)
	mm="0"+dateArr[0];
	else
	mm=dateArr[0];
	outdate=dd+"/"+mm+"/"+dateArr[1];

	dateArr=document.frmSearch.lstCheckIn1.value.split("-");
	if(document.frmSearch.lstCheckIn.value<10)
	dd='0'+document.frmSearch.lstCheckIn.value;
	else
	dd=document.frmSearch.lstCheckIn.value;
	if(dateArr[0]<10)
	mm="0"+dateArr[0];
	else
	mm=dateArr[0];
	indate=dd+"/"+mm+"/"+dateArr[1];

	document.frmSearch.dateCheckIn.value=indate;
	document.frmSearch.dateCheckOut.value=outdate;
	document.frmSearch.submit();
}

var dtCh= "/";
var minYear=1900;
var maxYear=2100;

function isInteger(s){
	var i;
    for (i = 0; i < s.length; i++){   
        // Check that current character is number.
        var c = s.charAt(i);
        if (((c < "0") || (c > "9"))) return false;
    }
    // All characters are numbers.
    return true;
}

function stripCharsInBag(s, bag){
	var i;
    var returnString = "";
    // Search through string's characters one by one.
    // If character is not in bag, append to returnString.
    for (i = 0; i < s.length; i++){   
        var c = s.charAt(i);
        if (bag.indexOf(c) == -1) returnString += c;
    }
    return returnString;
}

function daysInFebruary (year){
	// February has 29 days in any year evenly divisible by four,
    // EXCEPT for centurial years which are not also divisible by 400.
    return (((year % 4 == 0) && ( (!(year % 100 == 0)) || (year % 400 == 0))) ? 29 : 28 );
}
function DaysArray(n) {
	for (var i = 1; i <= n; i++) {
		this[i] = 31
		if (i==4 || i==6 || i==9 || i==11) {this[i] = 30}
		if (i==2) {this[i] = 29}
   } 
   return this
}

function isDate(day,month,year){
	var daysInMonth = DaysArray(12)
	if (month<1 || month>12){
		return false
	}
	if (day<1 || day>31 || (month==2 && day>daysInFebruary(year)) || day > daysInMonth[month]){
		return false
	}
	if (year==0 || year<minYear || year>maxYear){
		return false
	}
return true;
}

function addDays(dtStr,dayAdd)
{
	if(dayAdd<1)
		return false;
	dateArr=dtStr.split("/")
	var strMonth=dateArr[1];
	var strDay=dateArr[0];
	var strYear=dateArr[2];
	strYr=strYear
	if (strDay.charAt(0)=="0" && strDay.length>1) strDay=strDay.substring(1)
	if (strMonth.charAt(0)=="0" && strMonth.length>1) strMonth=strMonth.substring(1)
	for (var i = 1; i <= 3; i++) {
		if (strYr.charAt(0)=="0" && strYr.length>1) strYr=strYr.substring(1)
	}
	month=parseInt(strMonth)
	day=parseInt(strDay)
	year=parseInt(strYr)
	for(i=0;i<dayAdd;i++)
	{
		day=day+1;
		if( !isDate(day,month,year) ) 
		{
			day=1;
			month=month+1;
			if( !isDate(day,month,year) ) 
			{
				month=1;
				year=year+1;
			}
		}

	}
	strDay = (day<10) ? '0'+day : day ;
	strMonth = (month<10) ? '0'+month : month ;
	strDate = strDay + "/" + strMonth + "/" + year;
	return strDate;
}
function addDaysCount(theDate, days) {
    return new Date(theDate.getTime() + days*24*60*60*1000);
}
function isValidDate(dtStr)
{
	dateArr = dtStr.split("/")
	var strMonth = dateArr[1];
	var strDay = dateArr[0];
	var strYear = dateArr[2];
	strYr = strYear
	if (strDay.charAt(0) == "0" && strDay.length > 1) strDay = strDay.substring(1)
	if (strMonth.charAt(0) == "0" && strMonth.length > 1) strMonth = strMonth.substring(1)
	for (var i = 1; i <= 3; i++) {
		if (strYr.charAt(0)=="0" && strYr.length>1) strYr = strYr.substring(1)
	}
	month = parseInt(strMonth)
	day = parseInt(strDay)
	year = parseInt(strYr)

	var objDate = new Date (strYr, strMonth-1, strDay);

	if (month-1 != objDate.getMonth()) return false;
  	if (day != objDate.getDate()) return false;
  	if (year != objDate.getFullYear()) return false;

	dateArr2 = todayDate.split("/");
	var strMonth2 = dateArr2[1];
	var strDay2 = dateArr2[0];
	var strYear2 = dateArr2[2];
	strYr2 = strYear2
	if (strDay2.charAt(0)=="0" && strDay2.length>1) strDay2 = strDay2.substring(1)
	if (strMonth2.charAt(0)=="0" && strMonth2.length>1) strMonth2 = strMonth2.substring(1)
	for (var i = 1; i <= 3; i++) {
		if (strYr2.charAt(0)=="0" && strYr2.length>1) strYr2 = strYr2.substring(1)
	}
	month2 = parseInt(strMonth2)
	day2 = parseInt(strDay2)
	year2 = parseInt(strYr2)
		
	if(year2 < year)
		return true;
	else
	{
		if(month2<month)
			return true;
		else
		{
			if(day2<=day)
				return true;
			else
			{
				return false;
			}
		}
	}
}

