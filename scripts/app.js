$(document).ready(function(){
 	
currentTime();
 
	





function currentTime() {
	 var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    h = checkTime(h);
    m = checkTime(m);
    s = checkTime(s);
       $("#userCurrentTime").val(h+":"+m+":"+s);
    var t = setTimeout(currentTime, 1000);


}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}
function checkConvertTime(time) {
	
	if(time > 12 && time < 24)
	{
		time+=24;
	}
	if(time >= 24 && time < 48)
	{
		time = time - 24;

	}
	else if (time > 47)
	{
		time-=48;
	}
	return time;
}

$("#calc").on('click',function() {	
	var now = new Date();
	var curHour = getCurrentHour(now);
	var curMin = getCurrentMin(now);
	var userHour = test($('#inHours').val());
	var userMin = test($('#inMins').val());
	if($('#inHours').val() > 50 || $('#inMins').val() > 180 || !userHour || !userMin)
	{
		$('#LgNumberModal').modal('toggle');
		$('#inHours').val(0);
		$('#inMins').val(0);
		$('#futureTime').val('');
	}
	else
	{
		
	var futHour = parseInt(curHour) + parseInt($('#inHours').val());
	var futMin	= parseInt(curMin) + parseInt($('#inMins').val());		

	
	 futHour = checkConvertTime(futHour);

  	if(futMin > 59 && futMin < 120)
  	{
  		futHour	= parseInt(futHour) + 1;
  		futMin = parseInt(futMin) - 60;
  	}
  	else if(futMin > 119)
  	{
		futHour	= parseInt(futHour) + parseInt(parseInt(futMin)/60);
		
		if(futMin%60 != 0)
		{
			futMin =(futMin/60).toFixed(2);
			futMin = futMin.substr(futMin.length-3,futMin.length);
			
		futMin = parseInt(futMin*60)
		}
		else
		{
		
		}
  	}
  	futHour = checkTime(futHour);
	futMin = checkTime(futMin);	
	$('#futureTime').val(futHour + ":" + futMin);
	//setTimeout()
}
	//$('#futureTime').val(parseInt(curHour)+$(this).val());

});

function getCurrentHour(date) {
    var curHour = date.getHours();
    curHour = checkTime(curHour);
   return curHour;
}
function getCurrentMin(date) {
	var curMin = date.getMinutes();
	curMin = checkTime(curMin);
	return curMin;
}
function checkInput(input)
{
	return /^\+?\d+$/.test(input);

}
function test(input, expect)
{
	return checkInput(input);
}
$('#reset').on('click',function() {
	$('#inHours').val(0);
	$('#inMins').val(0);
	$('#futureTime').val('');
});
 });