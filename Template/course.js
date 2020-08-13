function populate(s1,s2){
	var s1 = document.getElementById(s1);
	var s2 = document.getElementById(s2);
	s2.innerHTML = "";
	if(s1.value == "science"){
		var optionArray = ["|","biologoy11|Biologoy11","chemistry11|Chemistry11","computer11|Computer11","english11|English11","mathematics11|Mathematics11","physics11|Physics11","biology12|Biology12","chemistry12|Chemistry12","english12|English12","mathematics12|Mathematics12","nepali12|Nepali12","physics12|Physics12"];
    } 
 
    else if(s1.value == "management"){
		var optionArray = ["|","economics11|Economics11","english11|English11","hotelmanagement11|Hotelmanagement11","nepali11|Nepali11","principleofaccounting11|Principleofaccounting11","businessmathematics12|Businessmathematics12","economics12|Economics12","english12|English12","hotelmanagement12|Hotelmanagement12","marketing12|Marketing12","principleofaccounting12|Principleofaccounting12"];
	} 
	for(var option in optionArray){
		var pair = optionArray[option].split("|");
		var newOption = document.createElement("option");
		newOption.value = pair[0];
		newOption.innerHTML = pair[1];
		s2.options.add(newOption);
    }
}

// function populate(s1,s2){
// 	var s1 = document.getElementById(s1);
// 	var s2 = document.getElementById(s2);
// 	s2.innerHTML = "";
// 	if(s1.value == "11"){
// 		var optionArray = ["|","science|Science","management|Management"];
//     } 
 
//     else if(s1.value == "management"){
// 		var optionArray = ["|","science|Science","management|Management"];
// 	} 
// 	for(var option in optionArray){
// 		var pair = optionArray[option].split("|");
// 		var newOption = document.createElement("option");
// 		newOption.value = pair[0];
// 		newOption.innerHTML = pair[1];
// 		s2.options.add(newOption);
//     }
// }
