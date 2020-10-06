function attendance(conducted, absent){
	var percent = (conducted-absent)/conducted*100;
	return percent;
}
function check(){
	var conducted = document.forms["form"]["conducted"].value;
	var absent = document.forms["form"]["absent"].value;
	if(conducted == ""){
		alert("Enter hours conducted");
		document.form.conducted.focus();
		return false;
	}
	if(absent == ""){
		alert("Enter hours absent");
		document.form.absent.focus() ;
		return false;
	}
	if(parseInt(absent) > parseInt(conducted)){
		alert("Number of hours absent cannot be greater than hours conducted.")
		document.form.absent.focus();
		return false;
	}
	var percent = attendance(conducted, absent);
	if(percent < 75)
		var to_attend = absent*4 - conducted;
	var current = percent;
	current = Math.round(current*100) / 100;
	var count = 0;
	while(percent > 75){
		if(attendance(conducted+1, absent+1) < 75)	break;
		count++;
		absent++;
		conducted++;
		percent = attendance(conducted, absent);
	}
	document.querySelector('.showResult').innerHTML = "Current Attendance = " + current + "%";
	if(count > 1){
		
		document.querySelector('.showDescription').innerHTML = "You can miss " + count + " class.";

	}
	else if(count == 1)
	{
		
		document.querySelector('.showDescription').innerHTML = "You can miss " + count + " class.";

	}
	else if(current < 75){
		
		document.querySelector('.showDescription').innerHTML = "You cannot miss any class.\n" + "You need to attend " + to_attend + " more classes for 75% attendance.";

	}
	else{
		
		document.querySelector('.showDescription').innerHTML = "You cannot miss any class.";
	}
	
		return false;
}