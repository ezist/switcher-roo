function openAdvancedSettings() {
		var x = document.getElementById("AdvancedSettingsContainer");
		if (x.style.display === "none") {
			x.style.display = "block";
		} else {
			x.style.display = "none";
		}
	}
	
function addRemoveSlidersFunction() {
		var x = document.getElementById("addRemoveSlidersContainer");
		if (x.style.display === "none") {
			x.style.display = "block";
		} else {
			x.style.display = "none";
		}
	}
	
function openCustomSlidersMenu() {
		var x = document.getElementById("CustomSlidersContainer");
		if (x.style.display === "none") {
			x.style.display = "block";
		} else {
			x.style.display = "none";
		}
	}
	
function changeCoverageWait() {
	setTimeout(changeCoverage, 20000);
}

function changeCoverage() {
	var coverage = Math.floor(Math.random() * 100) + 1;
	
		if (coverage <= 10) {
			document.getElementById("coverage1").style.display = "block";	
			document.getElementById("coverage2").style.display = "none";	
			document.getElementById("coverage3").style.display = "none";	
			document.getElementById("coverage4").style.display = "none";
			setTimeout(changeCoverage, 20000);
		}
		else if (coverage >= 11 && coverage <=24) {
			document.getElementById("coverage1").style.display = "none";	
			document.getElementById("coverage2").style.display = "block";	
			document.getElementById("coverage3").style.display = "none";	
			document.getElementById("coverage4").style.display = "none";
			setTimeout(changeCoverage, 20000);
		}	
		else if (coverage >= 25 && coverage <=44) {
			document.getElementById("coverage1").style.display = "none";	
			document.getElementById("coverage2").style.display = "none";	
			document.getElementById("coverage3").style.display = "block";	
			document.getElementById("coverage4").style.display = "none";
			setTimeout(changeCoverage, 20000);
		}
		else if (coverage >= 45) {
			document.getElementById("coverage1").style.display = "none";	
			document.getElementById("coverage2").style.display = "none";	
			document.getElementById("coverage3").style.display = "none";	
			document.getElementById("coverage4").style.display = "block";
			setTimeout(changeCoverage, 20000);
		}		
	}

function currentTime() {
		var date = new Date();
		var hours = date.getHours();
		var minutes = date.getMinutes();
		var ampm = hours >= 12 ? 'PM' : 'AM';
		hours = hours % 12;
		hours = hours ? hours : 12; // the hour '0' should be '12'
		minutes = minutes < 10 ? '0'+minutes : minutes;
		var strTime = hours + ':' + minutes + ' ' + ampm;
		document.getElementById('currentTime').innerHTML = strTime;
		setTimeout(currentTime, 1000);
	}
	
function disableBatteryFuntion() {
var tickbox = document.getElementById("disableBatteryCheckbox");
	if (tickbox.checked) {
		var tickbox = "Yes"
	}
	else {
		var tickbox = "No"
	}
	localStorage.setItem("Battery_Disabled", tickbox);
}
function batteryDrain() {
	var isBatteryDisabled = localStorage.getItem("Battery_Disabled"); 
	if (isBatteryDisabled == "Yes") {
		return;
	}
	else {
	setTimeout(batteryDrain2, 40000);	
	}	
}

function batteryDrain2() {
	document.getElementById("battery_full").style.display = "none";
	document.getElementById("battery_34").style.display = "block";	
	setTimeout(batteryDrain3, 40000);
}

function batteryDrain3() {
	document.getElementById("battery_34").style.display = "none";
	document.getElementById("battery_half").style.display = "block";
	setTimeout(batteryDrain4, 40000);
}

function batteryDrain4() {
	document.getElementById("battery_half").style.display = "none";
	document.getElementById("battery_14").style.display = "block";
	setTimeout(batteryDrain5, 40000);
}

function batteryDrain5() {
	document.getElementById("battery_14").style.display = "none";
	document.getElementById("battery_low").style.display = "block";
	document.getElementById("chargeBattery").style.display = "block";	
	lowBatteryWait();
}

function batteryCharge() {
	var doesBatteryNeedCharging = document.getElementById("chargeBattery");
	if (doesBatteryNeedCharging.style.display === "none"){
		return;
	}
	else{
	document.getElementById("chargeBattery").style.display = "none";
	document.getElementById("battery_low").style.display = "none";
	document.getElementById("battery_low_charging").style.display = "block";
	setTimeout(batteryCharge2, 20000);
	}
}

function batteryCharge2() {
	document.getElementById("battery_low_charging").style.display = "none";
	document.getElementById("battery_14_charging").style.display = "block";
	setTimeout(batteryCharge3, 20000);
}

function batteryCharge3() {
	document.getElementById("battery_14_charging").style.display = "none";
	document.getElementById("battery_half_charging").style.display = "block";
	setTimeout(batteryCharge4, 20000);
}

function batteryCharge4() {
	document.getElementById("battery_half_charging").style.display = "none";
	document.getElementById("battery_34_charging").style.display = "block";
	setTimeout(batteryCharge5, 20000);
}

function batteryCharge5() {
	document.getElementById("battery_34_charging").style.display = "none";
	document.getElementById("battery_full").style.display = "block";
	setTimeout(batteryDrain, 20000);
}

function lowBatteryWait() {
	lowBatteryMessage();
	setTimeout(errorLowBattery, 10000);
}

 function errorLowBattery() {
	var areAdminPermsOn = document.getElementById("adminPermsText");
	if (areAdminPermsOn.style.display === "none"){

		var isBatteryLow = document.getElementById("battery_low");
		if (isBatteryLow.style.display === "block") {
			var rng = Math.floor(Math.random() * 100) + 1;
				if (rng == 21) {
				remoteLoginError();
				setTimeout(errorLowBattery, 10000);
			}
				else if (rng == 37) {
				error69();
				setTimeout(errorLowBattery, 10000);
			}
				else if (rng == 69) {
				error621();
				setTimeout(errorLowBattery, 10000);
			}
				else {
				setTimeout(errorLowBattery, 10000);
			}
			
		}
		else {
			return;
		}
	}
	else {
			return;
		}	
	
 }

function showSecondSliderHandle() {
document.getElementById("secondSliderHandleContainer").style.display = "block";	
document.getElementById("secondSliderHandle").style.display = "block";	
}

function switchLockFunction() {
	var lock = document.getElementById("lockClosed");
	if (lock.style.display === "block") {
		openLock();
	}
	else {
		closeLock();
	}
}
 
function openLock() {
document.getElementById("lockOpen").style.display='block'; 
document.getElementById("lockClosed").style.display='none'; 
mySlider.enable();
mySlider2.enable();
mySlider3.enable();
mySlider4.enable();
mySlider5.enable();
mySlider6.enable();
mySlider7.enable();
mySlider8.enable();
mySlider9.enable();
mySlider10.enable();
mySlider11.enable();
mySlider12.enable();
mySlider13.enable();
mySlider14.enable();
mySlider15.enable();
mySlider16.enable();
mySlider17.enable();
mySlider18.enable();
mySlider19.enable();
}

function closeLock() {
document.getElementById("lockOpen").style.display='none'; 
document.getElementById("lockClosed").style.display='block'; 
mySlider.disable();
mySlider2.disable();
mySlider3.disable();
mySlider4.disable();
mySlider5.disable();
mySlider6.disable();
mySlider7.disable();
mySlider8.disable();
mySlider9.disable();
mySlider10.disable();
mySlider11.disable();
mySlider12.disable();
mySlider13.disable();
mySlider14.disable();
mySlider15.disable();
mySlider16.disable();
mySlider17.disable();
mySlider18.disable();
mySlider19.disable();
}

function processingShowFunctionV2() {
	document.getElementById('processingText').innerHTML = "Processing...";
	document.getElementById("processingAnim").style.display='block';  
	var rng = Math.floor(Math.random() * 2500) + 1500;
	setTimeout(processingHideFunctionV2, rng)    
}

function processingHideFunctionV2() {
  document.getElementById('processingText').innerHTML = "";
  document.getElementById("processingAnim").style.display='none';   
}

function breastSizeMaleFunction() {
  document.getElementById("showAdvancedSettings4a").style.display = "block";
  document.getElementById("showAdvancedSettings4b").style.display = "none";  
}

function breastSizeFemaleFunction() {
  document.getElementById("showAdvancedSettings4b").style.display = "block";
  document.getElementById("showAdvancedSettings4a").style.display = "none";  
}

function toggleCreditsFunction(){
var c = document.getElementById("credits");
  if (c.style.display === "none") {
    c.style.display = "block";
  } else {
    c.style.display = "none";
  }
}

function enterPasswordFunction(){
document.getElementById("adminbutton").style.display='none';  
document.getElementById("enterPassword").style.display='block';  
}

function processingPasswordFunction(){
document.getElementById("adminbutton").style.display='none';  
document.getElementById("enterPassword").style.display='none';  
document.getElementById("loading1").style.display='block';  
setTimeout(loadingFunction1, 400);
}

function loadingFunction1(){
document.getElementById("loading1").style.display='none'; 
document.getElementById("loading2").style.display='block'; 
setTimeout(kurwaFunction, 400);
}

function kurwaFunction(){
document.getElementById("loading2").style.display='none'; 
document.getElementById("loading3").style.display='block'; 
setTimeout(loadingFunction3, 400);
}

function loadingFunction3(){
document.getElementById("loading3").style.display='none'; 
document.getElementById("loading4").style.display='block'; 
setTimeout(adminPasswordCheck, 400);
}

function adminPasswordCheck() {
	document.getElementById("loading4").style.display='none'; 
	var password = document.getElementById("password").value;
		if (password == "OwO") {
			document.getElementById("accessGranted").style.display='block';
			setTimeout(adminPermsOn, 1500);
		} else {
			document.getElementById("accessDenied").style.display='block';
			setTimeout(reTry, 2000);
		}
	}

function adminPermsOn() {
		document.getElementById("accessGranted").style.display='none';
		document.getElementById('defaultcss').href='css/admindhtmlxslider.css';
		document.getElementById("adminPermsText").style.display='block';  
		localStorage.setItem("Admin_passwd_entered", "Yes");
		localStorage.setItem("Admin_mode_on", "Yes");
		document.getElementById("adminbuttontoggle").style.display='block';
	}
	
function toggleAdminModeFunction() {
	var isAdminOn = document.getElementById("adminPermsText");
		if (isAdminOn.style.display === "none") {
			isAdminOn.style.display = "block";
			document.getElementById('defaultcss').href='css/admindhtmlxslider.css';
			localStorage.setItem("Admin_mode_on", "Yes");
		} else {
			isAdminOn.style.display = "none";
			document.getElementById('defaultcss').href='css/dhtmlxslider.css';
			localStorage.setItem("Admin_mode_on", "No");
		}	
	}
	
function adminPermsTextOff() {
		document.getElementById('defaultcss').href='css/dhtmlxslider.css';
		document.getElementById("adminPermsText").style.display='none';  
	}
 
function reTry() {
		document.getElementById("accessDenied").style.display='none';
		document.getElementById("adminbutton").style.display='block';
	}
  
 function remoteLoginError() {
 
		document.getElementById("errorMessageContainer").style.display = "block";
		document.getElementById("remoteLoginErrorMessage").style.display = "block";
		document.getElementById("RLEOkayContainer").style.display = "block";
		document.getElementById("RLEOkay").style.display= 'block';   
		document.getElementById("AdvancedSettingsContainer").style.display = "block";
		radiobtn = document.getElementById("radiobuttonFemale");
		radiobtn.checked = true;
		radiobtn2 = document.getElementById("radiobuttonMale");
		radiobtn2.checked = false;
		mySlider12.setValue(100);			// Set shy = 100
		mySlider4.setValue(0);				// Set tall = 0
		mySlider10.setValue(100);			// Set submissive = 100
		mySlider.setValue(100);				// Set fluffiness = 100
		closeLock();
	}
 
 function hideRemoteLoginError () {
		document.getElementById("errorMessageContainer").style.display = "none";
		document.getElementById("remoteLoginErrorMessage").style.display = "none";
		document.getElementById("RLEOkayContainer").style.display = "none";
		document.getElementById("RLEOkay").style.display= 'none';  
	}
	
function error69() {
		document.getElementById("errorMessageContainer").style.display = "block";
		document.getElementById("error69Message").style.display = "block";
		document.getElementById("error69OkayContainer").style.display = "block";
		document.getElementById("error69Okay").style.display= 'block';  
		closeLock();
	}
	
function hideError69() {
		document.getElementById("errorMessageContainer").style.display = "none";
		document.getElementById("error69Message").style.display = "none";
		document.getElementById("error69OkayContainer").style.display = "none";
		document.getElementById("error69Okay").style.display= 'none';  
	}

function error621() {
		document.getElementById("container2").style.display = "none";
		document.getElementById("speciesMenu").style.display = "none";
		document.getElementById("sexMenu").style.display = "none";
		document.getElementById("adaptClothing").style.display= 'none';  
		document.getElementById("error621").style.display = "block";	
		document.getElementById("processingText").style.display = "none";
		mySlider6.setValue(99);	
		mySlider6.disable();	
		error621ChangeSlider();
		showSecondSliderHandle();
	}	
function lowBatteryMessage() {
		var lowBatteryMessageSeen = localStorage.getItem("Low_Battery_Message_Seen");
		if (lowBatteryMessageSeen === "Yes") {
			return;
		}
		else {
			document.getElementById("errorMessageContainer").style.display = "block";
			document.getElementById("lowBatteryMessage").style.display = "block";
			document.getElementById("lowBatteryOkayContainer").style.display = "block";
			document.getElementById("lowBatteryOkay").style.display= 'block';  
		}
}
function hideLowBatteryMessage(){
		document.getElementById("errorMessageContainer").style.display = "none";
		document.getElementById("lowBatteryMessage").style.display = "none";
		document.getElementById("lowBatteryOkayContainer").style.display = "none";
		document.getElementById("lowBatteryOkay").style.display= 'none';  
		var lowBatteryMessageSeen = "Yes";
		localStorage.setItem("Low_Battery_Message_Seen", lowBatteryMessageSeen);	
}
function showOptions() {
		document.getElementById("preferences").style.display = "none";
		document.getElementById("triggerErrors").style.display = "block";
		document.getElementById("goBack").style.display = "block";		
		document.getElementById("disableBattery").style.display='block';  
	}
	
function goBackFunction() {
		document.getElementById("preferences").style.display = "block";
		document.getElementById("triggerErrors").style.display = "none";
		document.getElementById("goBack").style.display = "none";		
		document.getElementById("disableBattery").style.display='none';  
		document.getElementById("triggerRLEButton").style.display = "none";
		document.getElementById("triggerError69Button").style.display = "none";
		document.getElementById("triggerError621Button").style.display = "none";
	}
	
function triggerErrorsFunction() {
		document.getElementById("triggerRLEButton").style.display = "block";
		document.getElementById("triggerError69Button").style.display = "block";
		document.getElementById("triggerError621Button").style.display = "block";
	}
 
function changeSexToMale() {
	var settingSex = "Male";
	localStorage.setItem("Slot0_Sex", settingSex);
	rbfemale = document.getElementById("radiobuttonFemale");
	if (rbfemale.checked) {
		var error2 = Math.floor(Math.random() * 621) + 1;
		if (error2 == 69) {
			document.getElementById("sexMenu").style.color='#FF4550'; 
			document.getElementById("linesNormal").style.display='none'; 
			document.getElementById("linesError").style.display='block'; 
			document.getElementById("errorMessageContainer").style.display = "block";
			document.getElementById("MSSErrorMessage").style.display = "block";	
			document.getElementById("MSSOkayContainer").style.display = "block";	
			document.getElementById("MSSOkay").style.display = "block";			
			changeRadioButtonAppearance();
			rbfemale = document.getElementById("radiobuttonFemale");
			rbfemale.checked = true;
		}
		else {
			rbmale = document.getElementById("radiobuttonMale");
			rbmale.checked = true;
			rbfemale = document.getElementById("radiobuttonFemale");
			rbfemale.checked = false;
			document.getElementById("showAdvancedSettings4a").style.display='block'; 
			document.getElementById("showAdvancedSettings4b").style.display='none'; 
			showOrHideBreastSizeMaleSlider();
			showOrHideGenitalSizeFemaleSlider();
			processingShowFunctionV2();
		}
	}
	else { 
		rbmale = document.getElementById("radiobuttonMale");
		rbmale.checked = true;
		document.getElementById("showAdvancedSettings4a").style.display='block'; 
		document.getElementById("showAdvancedSettings4b").style.display='none'; 
		showOrHideBreastSizeMaleSlider();
		showOrHideGenitalSizeFemaleSlider();
	}
} 
 
function changeSexToFemale() {
	var settingSex = "Female";
	localStorage.setItem("Slot0_Sex", settingSex);
	rbmale = document.getElementById("radiobuttonMale");
	if (rbmale.checked) {  
		var error2 = Math.floor(Math.random() * 621) + 1;
		if (error2 == 69) {
			document.getElementById("sexMenu").style.color='#FF4550'; 
			document.getElementById("linesNormal").style.display='none'; 
			document.getElementById("linesError").style.display='block'; 
			document.getElementById("errorMessageContainer").style.display = "block";
			document.getElementById("MSSErrorMessage").style.display = "block";	
			document.getElementById("MSSOkayContainer").style.display = "block";	
			document.getElementById("MSSOkay").style.display = "block";	
			changeRadioButtonAppearance();
			rbmale = document.getElementById("radiobuttonMale");
			rbmale.checked = true;
		}
		else {
			rbmale = document.getElementById("radiobuttonMale");
			rbmale.checked = false;
			rbfemale = document.getElementById("radiobuttonFemale");
			rbfemale.checked = true;
			document.getElementById("showAdvancedSettings4a").style.display='none'; 
			document.getElementById("showAdvancedSettings4b").style.display='block'; 
			showOrHideGenitalSizeFemaleSlider();
			processingShowFunctionV2();
		}
	}  
	else {  
		rbfemale = document.getElementById("radiobuttonFemale");
		rbfemale.checked = true;
		document.getElementById("showAdvancedSettings4a").style.display='none'; 
		document.getElementById("showAdvancedSettings4b").style.display='block'; 
		showOrHideGenitalSizeFemaleSlider();
	}
 }
 
function hideMSSError () {
	document.getElementById("errorMessageContainer").style.display = "none";
	document.getElementById("MSSErrorMessage").style.display = "none";
	document.getElementById("MSSOkayContainer").style.display = "none";	
	document.getElementById("MSSOkay").style.display = "none";	
	}
 
 function saveCurrentSpecies() {
	var settingSpecies = document.getElementById('speciesChoice').value 
	localStorage.setItem("Slot0_Species", settingSpecies);	 
	processingShowFunctionV2();
 }
 
 function saveCheckbox() {
	var tickbox = document.getElementById("adaptClothingCheckbox");
	if (tickbox.checked) {
		var tickbox = "Yes"
		localStorage.setItem("Slot0_AC_Box_Ticked", tickbox);
	}
	else {
		var tickbox = "No"
		localStorage.setItem("Slot0_AC_Box_Ticked", tickbox);
	} 
 }
 function showSaveSlotButtons() {
	 document.getElementById("saveSlotButtons").style.display='block';  
	 document.getElementById("saveSettingsButton").style.display='none';  
 }
 
function hideSaveSlotButtons() {
	 document.getElementById("saveSlotButtons").style.display='none';  
	 document.getElementById("saveSettingsButton").style.display='block';  
}
 
function showLoadSlotButtons() {
	 document.getElementById("loadSlotButtons").style.display='block';  
	 document.getElementById("loadSettingsButton").style.display='none';  
 }
 
 function hideLoadSlotButtons() {
	 document.getElementById("loadSlotButtons").style.display='none';  
	 document.getElementById("loadSettingsButton").style.display='block';  
 }
 


function hideLoadedPopup() {
	document.getElementById("settingsLoadedPopup").style.display = "none";	
}

function hideUnblockSettingsError() {
	document.getElementById("unblockSettingsOkayContainer").style.display='none'; 
	document.getElementById("unblockSettingsOkay").style.display='none'; 
	document.getElementById("unblockSettingsMessage").style.display='none'; 
	document.getElementById("errorMessageContainer").style.display='none'; 
}

function logOut() {
	document.getElementById("bodyType1Slider").style.display = "none";
	document.getElementById("bodyType2Slider").style.display = "none";
	document.getElementById("bodyType3Slider").style.display = "none";
	document.getElementById("advancedSettings").style.display = "none";
	document.getElementById("advancedSettings2").style.display = "none";
	document.getElementById("adaptClothing").style.display = "none";
	document.getElementById("sexMenu").style.display = "none";
	document.getElementById("speciesMenu").style.display = "none";
	document.getElementById("container2").style.display = "none";
	document.getElementById("adminPermsText").style.display = "none";
	document.getElementById("AdvancedSettingsContainer").style.display = "none";
	document.getElementById("processingText").style.display = "none";
	document.getElementById("credits").style.display = "none";
	document.getElementById("creditsButton").style.display = "none";
	document.getElementById("preferences").style.display = "none";
	document.getElementById("triggerErrors").style.display = "none";
	document.getElementById("triggerError621Button").style.display = "none";
	document.getElementById("triggerError69Button").style.display = "none";
	document.getElementById("triggerRLEButton").style.display = "none";
	document.getElementById("loadSettingsButton").style.display = "none";
	document.getElementById("saveSettingsButton").style.display = "none";
	document.getElementById("adminbutton").style.display = "none";
	document.getElementById("adminbutton2").style.display = "none";
	document.getElementById("goBack").style.display = "none";
	document.getElementById("adminbuttontoggle").style.display = "none";
	document.getElementById("disableBattery").style.display = "none";
	document.getElementById("saveSlotButtons").style.display='none';
	document.getElementById("loadSlotButtons").style.display='none';
	document.getElementById("logOutMessage").style.display = "block";
}

function loadPreviousState() {
	document.getElementById("AdvancedSettingsContainer").style.display='block'; 
			var Species = localStorage.getItem("Slot0_Species");
			if (Species == null) {
				loadPS2();
			}
			else{
		var element = document.getElementById("speciesChoice");
		element.value = Species; 
		loadPS2();
			}
}

function loadPS2() {
		var Sex = localStorage.getItem("Slot0_Sex");
		if (Sex == null) {
			loadPS3();
		}
		else{
		if (Sex == "Male") {
			rbmale = document.getElementById("radiobuttonMale");
			rbmale.checked = true;
			rbfemale = document.getElementById("radiobuttonFemale");
			rbfemale.checked = false;
			loadPS3();
		}
		else {
			rbfemale = document.getElementById("radiobuttonFemale");
			rbfemale.checked = true;
			rbmale = document.getElementById("radiobuttonMale");
			rbmale.checked = false;
			loadPS3();
		}	
		}
}
 
function loadPS3() {
		var AC_Box_Ticked = localStorage.getItem("Slot0_AC_Box_Ticked");
		if (AC_Box_Ticked == null) {
			loadPS4();
		}	
		else {
			if (AC_Box_Ticked == "Yes") {
				var tickbox = document.getElementById("adaptClothingCheckbox");
				tickbox.checked = true;
				loadPS4();
			}
			else {
				loadPS4();
			}	
		}
}
 
function loadPS4() {
		var bodyType1 = localStorage.getItem("Slot0_Body_Type1");
		if (bodyType1 == null) {
			loadPS5();
		}
		else {
			mySlider6.setValue(bodyType1);	
			loadPS5();
		}		
}

function loadPS5() {
		var bodyType2 = localStorage.getItem("Slot0_Body_Type2");
		if (bodyType2 == null) {
			loadPS6();
		}
		else {
			mySlider5.setValue(bodyType2);	
			loadPS6();
		}		
}
 
function loadPS6() {
		var bodyType3 = localStorage.getItem("Slot0_Body_Type3");
		if (bodyType3 == null) {
			loadPS7();
		}
		else {
			mySlider4.setValue(bodyType3);	
			loadPS7();
		}		
}
 
function loadPS7() {
		var hips = localStorage.getItem("Slot0_Hips");
		if (hips == null) {
			loadPS8();
		}
		else {
			mySlider3.setValue(hips);	
			loadPS8();
		}		
}
 
function loadPS8() {
		var genitalSize = localStorage.getItem("Slot0_Genital_Size");
		if (genitalSize == null) {
			loadPS9();
		}
		else {
			mySlider2.setValue(genitalSize);
			loadPS9();
		}		
}
		
function loadPS9() {
		var fluffiness = localStorage.getItem("Slot0_Fluffiness");
		if (fluffiness == null) {
			loadPS10();
		}
		else {
			mySlider.setValue(fluffiness);
			loadPS10();
		}		
}		
  
function loadPS10() {
		var libido = localStorage.getItem("Slot0_Libido");
		if (libido == null) {
			loadPS11();
		}
		else {
			mySlider7.setValue(libido);
			loadPS11();
		}		
}				
		
function loadPS11() {
		var domsub = localStorage.getItem("Slot0_Position_Preference");
		if (domsub == null) {
			loadPS12();
		}
		else {
			mySlider10.setValue(domsub);
			loadPS12();
		}		
}		 
		
function loadPS12() {
		var sensitivity = localStorage.getItem("Slot0_Sensitivity");
		if (sensitivity == null) {
			loadPS13();
		}
		else {
			mySlider11.setValue(sensitivity);
			loadPS13();
		}		
}		 		
 
function loadPS13() {
		var assertiveShy = localStorage.getItem("Slot0_Demeanor");
		if (assertiveShy == null) {
			loadPS14();
		}
		else {
			mySlider12.setValue(assertiveShy);
			loadPS14();
		}		
}				
				
function loadPS14() {
		var buttSize = localStorage.getItem("Slot0_Butt_Size");	
		if (buttSize == null) {
			loadPS15();
		}
		else {
			mySlider13.setValue(buttSize);
			loadPS15();
		}		
}		 
		
function loadPS15() {
		var bellySize = localStorage.getItem("Slot0_Belly_Size");
		if (bellySize == null) {
			loadPS16();
		}
		else {
			mySlider14.setValue(bellySize);
			loadPS16();
		}		
}				
 
function loadPS16() {
		var bellyShape = localStorage.getItem("Slot0_Belly_Shape");
		if (bellyShape == null) {
			loadPS17();
		}
		else {
			mySlider15.setValue(bellyShape);
			loadPS17();
		}		
}			
		
function loadPS17() {
		var intelligence = localStorage.getItem("Slot0_Intelligence");
		if (intelligence == null) {
			loadPS18();
		}
		else {
			mySlider16.setValue(intelligence);
			loadPS18();
		}		
}			 
		
function loadPS18() {
		var cockType = localStorage.getItem("Slot0_Cock_Type");
		if (cockType == null) {
			loadPS19();
		}
		else {
			var element2 = document.getElementById("cockType");
			element2.value = cockType; 
			loadPS19();
		}		
}			
 
function loadPS19() {
		var Sex = localStorage.getItem("Slot0_Sex");
		if (Sex == null) {
			loadPS20();
		}
		else {

			if (Sex == "Male") {
				var breastSizeMale = localStorage.getItem("Slot0_Breast_Size_Male");
				if (breastSizeMale == null) {
					document.getElementById("showAdvancedSettings4a").style.display = "block";
					loadPS20();
				}
				else {
					document.getElementById("showAdvancedSettings4a").style.display = "block";
					document.getElementById("showAdvancedSettings4b").style.display = "none";				
					mySlider9.setValue(breastSizeMale);
					loadPS20();
				}
			}
			else {
				var breastSizeFemale = localStorage.getItem("Slot0_Breast_Size_Female");
				if (breastSizeFemale == null) {
					document.getElementById("showAdvancedSettings4b").style.display = "block";
					loadPS20();
				}
				else{
					document.getElementById("showAdvancedSettings4b").style.display = "block";
					document.getElementById("showAdvancedSettings4a").style.display = "none";				
					mySlider8.setValue(breastSizeFemale);
					loadPS20();
				}
			}
		}
}

function loadPS20() {
		var disableBatteryCheckboxTicked = localStorage.getItem("Battery_Disabled");
		if (disableBatteryCheckboxTicked == null) {
			var tickbox = document.getElementById("disableBatteryCheckbox");
			tickbox.checked = true;
			loadPS21();
		}	
		else {
			if (disableBatteryCheckboxTicked == "Yes") {
				var tickbox = document.getElementById("disableBatteryCheckbox");
				tickbox.checked = true;
				loadPS21();
			}
			else {
				batteryDrain();
				loadPS21();
			}	
		}
}

function loadPS21() {
		var hasUserEnteredPassword = localStorage.getItem("Admin_passwd_entered");
		if (hasUserEnteredPassword == null) {
			loadPS22();
		}	
		else {
			if (hasUserEnteredPassword == "Yes") {
				document.getElementById("adminbutton").style.display='none'; 
				document.getElementById("adminbuttontoggle").style.display='block';
				loadPS22();
			}
			else {
				loadPS22();
			}	
		}
}

function loadPS22() {
		var isAdminModeOn = localStorage.getItem("Admin_mode_on");
		if (isAdminModeOn == null) {
			loadPS23();
		}	
		else {
			if (isAdminModeOn == "Yes") {
				document.getElementById('defaultcss').href='css/admindhtmlxslider.css';
				document.getElementById("adminPermsText").style.display='block';  
				loadPS23();
			}
			else {
				loadPS23();
			}	
		}
}

function loadPS23() {
		var isUsernameButtonDisabled = localStorage.getItem("Username_Button_Hidden");
		if (isUsernameButtonDisabled == null) {
			loadPS24();
		}	
		else {
			if (isUsernameButtonDisabled == "Yes") {
				document.getElementById("usernameButton").style.display='none'; 
				var tickbox = document.getElementById("hideUsernameCheckbox");
				tickbox.checked = true;				
				loadPS24();
			}
			else {
				loadPS24();
			}	
		}
}
		
function loadPS24() { 		
	document.getElementById("AdvancedSettingsContainer").style.display='none'; 	
}

function saveCockType() {
	var cockType = document.getElementById('cockType').value 
	localStorage.setItem("Slot0_Cock_Type", cockType);
}

function hideMobileDeviceMessage() {
	document.getElementById("errorMessageContainer").style.display = "none";
	document.getElementById("mobileDeviceMessage").style.display = "none";
	document.getElementById("mobileDeviceOkayContainer").style.display = "none";
	document.getElementById("mobileDeviceOkay").style.display= 'none';  
	localStorage.setItem("Seen_Mobile_Device_Message", "Yes");		
}

function toggleButtSizeSlider() {
var tickbox = document.getElementById("buttSizeSliderCheckbox");
	if (tickbox.checked) {
		var tickbox = "Yes"
		document.getElementById("buttSizeSlider").style.display= 'block';
	}
	else {
		var tickbox = "No"
		document.getElementById("buttSizeSlider").style.display= 'none';
	}
	localStorage.setItem("Butt_Size_Slider_Enabled", tickbox);
}

function toggleBellySizeSlider() {
var tickbox = document.getElementById("bellySizeSliderCheckbox");
	if (tickbox.checked) {
		var tickbox = "Yes"
		document.getElementById("bellySizeSlider").style.display= 'block';
	}
	else {
		var tickbox = "No"
		document.getElementById("bellySizeSlider").style.display= 'none';
	}
	localStorage.setItem("Belly_Size_Slider_Enabled", tickbox);
}

function toggleBellyShapeSlider() {
var tickbox = document.getElementById("bellyShapeSliderCheckbox");
	if (tickbox.checked) {
		var tickbox = "Yes"
		document.getElementById("bellyShapeSlider").style.display= 'block';
	}
	else {
		var tickbox = "No"
		document.getElementById("bellyShapeSlider").style.display= 'none';
	}
	localStorage.setItem("Belly_Shape_Slider_Enabled", tickbox);
}

function toggleHipsSlider() {
var tickbox = document.getElementById("hipsSliderCheckbox");
	if (tickbox.checked) {
		var tickbox = "Yes"
		document.getElementById("hipsSlider").style.display= 'block';
	}
	else {
		var tickbox = "No"
		document.getElementById("hipsSlider").style.display= 'none';
	}
	localStorage.setItem("Hips_Slider_Enabled", tickbox);
}

function toggleGenitalSizeSlider() {
var tickbox = document.getElementById("genitalSizeSliderCheckbox");
	if (tickbox.checked) {
		var tickbox = "Yes"
		document.getElementById("genitalSizeSlider").style.display= 'block';
	}
	else {
		var tickbox = "No"
		document.getElementById("genitalSizeSlider").style.display= 'none';
	}
	localStorage.setItem("Genital_Size_Slider_Enabled", tickbox);
}

function toggleCockTypeMenu() {
var tickbox = document.getElementById("cockTypeMenuCheckbox");
	if (tickbox.checked) {
		var tickbox = "Yes"
		document.getElementById("cockTypeMenu").style.display= 'block';
	}
	else {
		var tickbox = "No"
		document.getElementById("cockTypeMenu").style.display= 'none';
	}
	localStorage.setItem("Cock_Type_Menu_Enabled", tickbox);
}

function toggleLibidoSlider() {
var tickbox = document.getElementById("libidoSliderCheckbox");
	if (tickbox.checked) {
		var tickbox = "Yes"
		document.getElementById("libidoSlider").style.display= 'block';
	}
	else {
		var tickbox = "No"
		document.getElementById("libidoSlider").style.display= 'none';
	}
	localStorage.setItem("Libido_Slider_Enabled", tickbox);
}

function toggleSensitivitySlider() {
var tickbox = document.getElementById("sensitivitySliderCheckbox");
	if (tickbox.checked) {
		var tickbox = "Yes"
		document.getElementById("sensitivitySlider").style.display= 'block';
	}
	else {
		var tickbox = "No"
		document.getElementById("sensitivitySlider").style.display= 'none';
	}
	localStorage.setItem("Sensitivity_Slider_Enabled", tickbox);
}

function toggleDemeanorSlider() {
var tickbox = document.getElementById("demeanorSliderCheckbox");
	if (tickbox.checked) {
		var tickbox = "Yes"
		document.getElementById("demeanorSlider").style.display= 'block';
	}
	else {
		var tickbox = "No"
		document.getElementById("demeanorSlider").style.display= 'none';
	}
	localStorage.setItem("Demeanor_Slider_Enabled", tickbox);
}

function togglePositionPreferenceSlider() {
var tickbox = document.getElementById("positionPreferenceSliderCheckbox");
	if (tickbox.checked) {
		var tickbox = "Yes"
		document.getElementById("positionPrefSlider").style.display= 'block';
	}
	else {
		var tickbox = "No"
		document.getElementById("positionPrefSlider").style.display= 'none';
	}
	localStorage.setItem("Postion_Pref_Slider_Enabled", tickbox);
}

function toggleIntelligenceSlider() {
var tickbox = document.getElementById("intelligenceSliderCheckbox");
	if (tickbox.checked) {
		var tickbox = "Yes"
		document.getElementById("intelligenceSlider").style.display= 'block';
	}
	else {
		var tickbox = "No"
		document.getElementById("intelligenceSlider").style.display= 'none';
	}
	localStorage.setItem("Intelligence_Slider_Enabled", tickbox);
}

function toggleFluffinessSlider() {
var tickbox = document.getElementById("fluffinessSliderCheckbox");
	if (tickbox.checked) {
		var tickbox = "Yes"
		document.getElementById("fluffinessSlider").style.display= 'block';
	}
	else {
		var tickbox = "No"
		document.getElementById("fluffinessSlider").style.display= 'none';
	}
	localStorage.setItem("Fluffiness_Slider_Enabled", tickbox);
}

function loadSliderSettings() {
	var buttSizeSliderEnabled = localStorage.getItem("Butt_Size_Slider_Enabled");
	var bellySizeSliderEnabled = localStorage.getItem("Belly_Size_Slider_Enabled");
	var bellyShapeSliderEnabled = localStorage.getItem("Belly_Shape_Slider_Enabled");
	var hipsSliderEnabled = localStorage.getItem("Hips_Slider_Enabled");
	var genitalSizeSliderEnabled = localStorage.getItem("Genital_Size_Slider_Enabled");
	var cockTypeMenuEnabled = localStorage.getItem("Cock_Type_Menu_Enabled");
	var libidoSliderEnabled = localStorage.getItem("Libido_Slider_Enabled");
	var sensitivitySliderEnabled = localStorage.getItem("Sensitivity_Slider_Enabled");
	var demeanorSliderEnabled = localStorage.getItem("Demeanor_Slider_Enabled");
	var positionPrefSliderEnabled = localStorage.getItem("Postion_Pref_Slider_Enabled");
	var intelligenceSliderEnabled = localStorage.getItem("Intelligence_Slider_Enabled");
	var fluffinessSliderEnabled = localStorage.getItem("Fluffiness_Slider_Enabled");
	
	if (buttSizeSliderEnabled != "No") {// or if it is null or Yes
		document.getElementById("buttSizeSliderCheckbox").checked = true;
	}
	else {
		document.getElementById("buttSizeSlider").style.display= 'none';
	}

	if (bellySizeSliderEnabled != "No") {
		document.getElementById("bellySizeSliderCheckbox").checked = true;
	}
	else {
		document.getElementById("bellySizeSlider").style.display= 'none';
	}
	
	if (bellyShapeSliderEnabled != "No") {
		if (bellyShapeSliderEnabled == null) {
		document.getElementById("bellyShapeSlider").style.display= 'none';
		document.getElementById("bellyShapeSliderCheckbox").checked = false;
		}
		else {
		document.getElementById("bellyShapeSliderCheckbox").checked = true;
		}
	} 
	else {
		document.getElementById("bellyShapeSlider").style.display= 'none';
	}
	
	if (hipsSliderEnabled != "No") {
		document.getElementById("hipsSliderCheckbox").checked = true;
	}
	else {
		document.getElementById("hipsSlider").style.display= 'none';
	}
	
	if (genitalSizeSliderEnabled != "No") {
		document.getElementById("genitalSizeSliderCheckbox").checked = true;
	}
	else {
		document.getElementById("genitalSizeSlider").style.display= 'none';
	}
	
	if (cockTypeMenuEnabled != "No") {
		if (cockTypeMenuEnabled == null) {
		document.getElementById("cockTypeMenu").style.display= 'none';
		document.getElementById("cockTypeMenuCheckbox").checked = false;
		}
		else {
		document.getElementById("cockTypeMenuCheckbox").checked = true;
		}
	}
	else {
		document.getElementById("cockTypeMenu").style.display= 'none';
	}
	
	if (libidoSliderEnabled != "No") {
		if (libidoSliderEnabled == null) {
		document.getElementById("libidoSlider").style.display= 'none';
		document.getElementById("libidoSliderCheckbox").checked = false;
		}
		else {
		document.getElementById("libidoSliderCheckbox").checked = true;
		}
	}
	else {
		document.getElementById("libidoSlider").style.display= 'none';
	}
	
	if (sensitivitySliderEnabled != "No") {
		if (sensitivitySliderEnabled == null) {
		document.getElementById("sensitivitySlider").style.display= 'none';
		document.getElementById("sensitivitySliderCheckbox").checked = false;
		}
		else {
		document.getElementById("sensitivitySliderCheckbox").checked = true;
		}
	}
	else {
		document.getElementById("sensitivitySlider").style.display= 'none';
	}
	
	if (demeanorSliderEnabled != "No") {
		document.getElementById("demeanorSliderCheckbox").checked = true;
	}
	else {
		document.getElementById("demeanorSlider").style.display= 'none';
	}
	
	if (positionPrefSliderEnabled != "No") {
		document.getElementById("positionPreferenceSliderCheckbox").checked = true;
	}
	else {
		document.getElementById("positionPrefSlider").style.display= 'none';
	}
	
	if (intelligenceSliderEnabled != "No") {
		if (intelligenceSliderEnabled == null) {
		document.getElementById("intelligenceSlider").style.display= 'none';
		document.getElementById("intelligenceSliderCheckbox").checked = false;
		}
		else {
		document.getElementById("intelligenceSliderCheckbox").checked = true;
		}
	}
	else {
		document.getElementById("intelligenceSlider").style.display= 'none';
	}
	
	if (fluffinessSliderEnabled != "No") {
		document.getElementById("fluffinessSliderCheckbox").checked = true;
	}
	else {
		document.getElementById("fluffinessSlider").style.display= 'none';
	}	
}

function visitCounter() {	
	var visitNumber = localStorage.getItem("Visit_Counter");	
	if (visitNumber == null) {		
		var visitNumber = 1;		
		localStorage.setItem("Visit_Counter", visitNumber);
	}
	else {
		visitNumber = parseInt(visitNumber);	
		var visitNumber = visitNumber + 1;	
		localStorage.setItem("Visit_Counter", visitNumber);
	}
}

function visitAdmin() {
	var visitNumber = localStorage.getItem("Visit_Counter");
	visitNumber = parseInt(visitNumber);
	if (visitNumber >= 15) {
		document.getElementById("adminbutton").style.display='none';  
		document.getElementById("adminbuttontoggle").style.display='block';  
	}
	else {
		return;
	}
}

function checkSlots() {
	var Species = localStorage.getItem("Slot1_Species");
	var Sex = localStorage.getItem("Slot1_Sex");
	if (Species == null) {
		document.getElementById('saveSlot1').innerHTML = "Empty Slot";	
		document.getElementById('loadSlot1').innerHTML = "Empty Slot";		
	}
	else {
		document.getElementById('saveSlot1').innerHTML = Sex + " " + Species;
		document.getElementById('loadSlot1').innerHTML = Sex + " " + Species;
	}
	
	var Species = localStorage.getItem("Slot2_Species");
	var Sex = localStorage.getItem("Slot2_Sex");
	if (Species == null) {
		document.getElementById('saveSlot2').innerHTML = "Empty Slot";	
		document.getElementById('loadSlot2').innerHTML = "Empty Slot";		
	}
	else {
		document.getElementById('saveSlot2').innerHTML = Sex + " " + Species;
		document.getElementById('loadSlot2').innerHTML = Sex + " " + Species;
	}
	
	var Species = localStorage.getItem("Slot3_Species");
	var Sex = localStorage.getItem("Slot3_Sex");
	if (Species == null) {
		document.getElementById('saveSlot3').innerHTML = "Empty Slot";	
		document.getElementById('loadSlot3').innerHTML = "Empty Slot";		
	}
	else {
		document.getElementById('saveSlot3').innerHTML = Sex + " " + Species;
		document.getElementById('loadSlot3').innerHTML = Sex + " " + Species;
	}
	
	var Species = localStorage.getItem("Slot4_Species");
	var Sex = localStorage.getItem("Slot4_Sex");
	if (Species == null) {
		document.getElementById('saveSlot4').innerHTML = "Empty Slot";	
		document.getElementById('loadSlot4').innerHTML = "Empty Slot";		
	}
	else {
		document.getElementById('saveSlot4').innerHTML = Sex + " " + Species;
		document.getElementById('loadSlot4').innerHTML = Sex + " " + Species;
	}
	
	var Species = localStorage.getItem("Slot5_Species");
	var Sex = localStorage.getItem("Slot5_Sex");
	if (Species == null) {
		document.getElementById('saveSlot5').innerHTML = "Empty Slot";	
		document.getElementById('loadSlot5').innerHTML = "Empty Slot";		
	}
	else {
		document.getElementById('saveSlot5').innerHTML = Sex + " " + Species;
		document.getElementById('loadSlot5').innerHTML = Sex + " " + Species;
	}
}

function changeUsernameBegin() {
	document.getElementById("usernameButton").style.display='none';
	document.getElementById("enterUsername").style.display='block';
	document.getElementById("clearUsernameButton").style.display='block';
}

function changeUsername() {
	var username = document.getElementById("usernameTextField").value;
	if (username == "") {
		document.getElementById("usernameButton").style.display='block';
		document.getElementById("enterUsername").style.display='none';
		document.getElementById("clearUsernameButton").style.display='none';
	}
	else {
		localStorage.setItem("Username", username);
		document.getElementById("usernameButton").style.display='block';
		document.getElementById("enterUsername").style.display='none';
		document.getElementById("clearUsernameButton").style.display='none';
	}
}

function clearUsername() {
	localStorage.removeItem('Username');
	document.getElementById("usernameButton").style.display='block';
	document.getElementById("enterUsername").style.display='none';
	document.getElementById("clearUsernameButton").style.display='none';	
}

function hideUsernameFuntion() {
	var tickbox = document.getElementById("hideUsernameCheckbox");
	if (tickbox.checked) {
		var tickbox = "Yes"
		localStorage.setItem("Username_Button_Hidden", tickbox);
		document.getElementById("usernameButton").style.display='none'; 
		document.getElementById("enterUsername").style.display='none'; 
	}
	else {
		var tickbox = "No"
		localStorage.setItem("Username_Button_Hidden", tickbox);
		document.getElementById("usernameButton").style.display='block';
	}
}

function toggleUserGreetings() {
	var tickbox = document.getElementById("hideUGCheckbox");
	if (tickbox.checked) {
		var tickbox = "Yes"
		localStorage.setItem("User_Greetings_Disabled", tickbox);
	}
	else {
		var tickbox = "No"
		localStorage.setItem("User_Greetings_Disabled", tickbox);
	}
}

function welcomeUser() {
	var username = localStorage.getItem("Username");
	if (username == null) {		
		return;
	}
	else {
		var userGreetingsDisabled = localStorage.getItem("User_Greetings_Disabled");
		if (userGreetingsDisabled != "Yes") {

			var phrase = Math.floor(Math.random() * 7) + 1;
			if (phrase == 1) {
				document.getElementById('welcomeUserMessage').innerHTML = "Hi," + " " + username;
				showWelcomeUserMessage();
			}
			if (phrase == 2) {
				document.getElementById('welcomeUserMessage').innerHTML = "Hello," + " " + username;
				showWelcomeUserMessage();
			}
			if (phrase == 3) {
				document.getElementById('welcomeUserMessage').innerHTML = "Hewwo," + " " + username;
				showWelcomeUserMessage();
			}
			if (phrase == 4) {
				document.getElementById('welcomeUserMessage').innerHTML = "Good morning," + " " + username;
				showWelcomeUserMessage();
			}
			if (phrase == 5) {
				document.getElementById('welcomeUserMessage').innerHTML = "Good to see you," + " " + username;
				showWelcomeUserMessage();
			}
			if (phrase == 6) {
				document.getElementById('welcomeUserMessage').innerHTML = "Nice to see you," + " " + username;
				showWelcomeUserMessage();
			}	
			if (phrase == 7) {
				document.getElementById('welcomeUserMessage').innerHTML = "Have a nice day," + " " + username;
				showWelcomeUserMessage();
			}		
			else {
				return;
			}
		}
		else {
			return;
		}
	}
}

function showWelcomeUserMessage() {
	document.getElementById("currentTime").style.display='none';
	document.getElementById("welcomeUserMessage").style.display='block';
	setTimeout(hideWelcomeUserMessage, 10000);
}

function hideWelcomeUserMessage() {
	document.getElementById("currentTime").style.display='block';
	document.getElementById("welcomeUserMessage").style.display='none';
}

function toggleBreastSizeMaleOption() {
	var tickbox = document.getElementById("showBreastSizeMaleCheckbox");
	if (tickbox.checked) {
		var tickbox = "Yes"
		localStorage.setItem("Show_BS_Slider_Male", tickbox);
		showOrHideBreastSizeMaleSlider();
	}
	else {
		var tickbox = "No"
		localStorage.setItem("Show_BS_Slider_Male", tickbox);	
		showOrHideBreastSizeMaleSlider();
	}	
}

function toggleGenitalSizeFemaleOption() {
	var tickbox = document.getElementById("showGenitalSizeFemaleCheckbox");
	if (tickbox.checked) {
		var tickbox = "Yes"
		localStorage.setItem("Show_GS_Slider_Female", tickbox);
		showOrHideGenitalSizeFemaleSlider();
	}
	else {
		var tickbox = "No"
		localStorage.setItem("Show_GS_Slider_Female", tickbox);	
		showOrHideGenitalSizeFemaleSlider();
	}	
}

function showOrHideBreastSizeMaleSlider() {
	var show = localStorage.getItem("Show_BS_Slider_Male");
	if (show != "Yes") { // null(default) or "No"
		document.getElementById("showAdvancedSettings4a").style.display='none';
		document.getElementById("showBreastSizeMaleCheckbox").checked = false;
	}
	else {		
		document.getElementById("showBreastSizeMaleCheckbox").checked = true;
		// show that slider only if male sex is selected
		var isFemaleSelected = document.getElementById("radiobuttonFemale");
		if (isFemaleSelected.checked) {
			return;
		}
		else {
			document.getElementById("showAdvancedSettings4a").style.display='block';
		}
	}
}

function showOrHideGenitalSizeFemaleSlider() {
	var show = localStorage.getItem("Show_GS_Slider_Female");
	if (show != "Yes") { // null(default) or "No"
		var isFemaleSelected = document.getElementById("radiobuttonFemale");
		if (isFemaleSelected.checked) {
			document.getElementById("genitalSizeSlider").style.display='none';
			document.getElementById("showGenitalSizeFemaleCheckbox").checked = false;
		}
		else {
			document.getElementById("genitalSizeSlider").style.display='block';
		}
	}
	else {		
		document.getElementById("showGenitalSizeFemaleCheckbox").checked = true;
		document.getElementById("genitalSizeSlider").style.display='block';
	}
}

function setSliderRangeToAdminMode() {
	mySlider.setMin(-20);
	mySlider.setMax(120);
	mySlider2.setMin(-20);
	mySlider2.setMax(120);
	mySlider3.setMin(-20);
	mySlider3.setMax(120);
	mySlider4.setMin(-20);
	mySlider4.setMax(120);
	mySlider5.setMin(-20);
	mySlider5.setMax(120);
	mySlider6.setMin(-20);
	mySlider6.setMax(120);
	mySlider7.setMin(-20);
	mySlider7.setMax(120);
	mySlider8.setMin(-20);
	mySlider8.setMax(120);
	mySlider9.setMin(-20);
	mySlider9.setMax(120);
	mySlider10.setMin(-20);
	mySlider10.setMax(120);
	mySlider11.setMin(-20);
	mySlider11.setMax(120);
	mySlider12.setMin(-20);
	mySlider12.setMax(120);
	mySlider13.setMin(-20);
	mySlider13.setMax(120);
	mySlider14.setMin(-20);
	mySlider14.setMax(120);
	mySlider15.setMin(-20);
	mySlider15.setMax(120);
	mySlider16.setMin(-20);
	mySlider16.setMax(120);
}

function setSliderRangeToNormalMode() {
	mySlider.setMin(0);
	mySlider.setMax(100);
	mySlider2.setMin(0);
	mySlider2.setMax(100);
	mySlider3.setMin(0);
	mySlider3.setMax(100);
	mySlider4.setMin(0);
	mySlider4.setMax(100);
	mySlider5.setMin(0);
	mySlider5.setMax(100);
	mySlider6.setMin(0);
	mySlider6.setMax(100);
	mySlider7.setMin(0);
	mySlider7.setMax(100);
	mySlider8.setMin(0);
	mySlider8.setMax(100);
	mySlider9.setMin(0);
	mySlider9.setMax(100);
	mySlider10.setMin(0);
	mySlider10.setMax(100);
	mySlider11.setMin(0);
	mySlider11.setMax(100);
	mySlider12.setMin(0);
	mySlider12.setMax(100);
	mySlider13.setMin(0);
	mySlider13.setMax(100);
	mySlider14.setMin(0);
	mySlider14.setMax(100);
	mySlider15.setMin(0);
	mySlider15.setMax(100);
	mySlider16.setMin(0);
	mySlider16.setMax(100);
}

function changeBGDefault() {
	document.body.style.background = '#3b395e';
	localStorage.setItem("Background_Color", '#3b395e');
}

function changeBGWhite() {
	document.body.style.background = '#fff';
	localStorage.setItem("Background_Color", '#fff');
}

function changeBGGray() {
	document.body.style.background = '#222';
	localStorage.setItem("Background_Color", '#222');
}

function changeBGBlack() {
	document.body.style.background = '#000';
	localStorage.setItem("Background_Color", '#000');
}

function changeBGCustomBegin() {
	document.getElementById("buttonBGDefault").style.visibility='hidden';  
	document.getElementById("buttonBGWhite").style.visibility='hidden';  
	document.getElementById("buttonBGGray").style.visibility='hidden';  
	document.getElementById("buttonBGBlack").style.visibility='hidden';  
	document.getElementById("buttonBGCustom").style.visibility='hidden'; 
	document.getElementById("buttonBGCustomSet").style.visibility='visible'; 
	document.getElementById("bgColorTextField").style.visibility='visible';	
}

function changeBGCustom() {
	var bgcolor = document.getElementById("bgColorTextField").value;	
	if (bgcolor == "") {		
		document.getElementById("buttonBGCustomSet").style.visibility='hidden'; 
		document.getElementById("bgColorTextField").style.visibility='hidden';

		document.getElementById("buttonBGDefault").style.visibility='visible';  
		document.getElementById("buttonBGWhite").style.visibility='visible';  
		document.getElementById("buttonBGGray").style.visibility='visible';  
		document.getElementById("buttonBGBlack").style.visibility='visible';  
		document.getElementById("buttonBGCustom").style.visibility='visible'; 
	}
	else {
		localStorage.setItem("Background_Color", bgcolor);
		document.body.style.background = bgcolor;
		document.getElementById("buttonBGCustomSet").style.visibility='hidden'; 
		document.getElementById("bgColorTextField").style.visibility='hidden';

		document.getElementById("buttonBGDefault").style.visibility='visible';  
		document.getElementById("buttonBGWhite").style.visibility='visible';  
		document.getElementById("buttonBGGray").style.visibility='visible';  
		document.getElementById("buttonBGBlack").style.visibility='visible';  
		document.getElementById("buttonBGCustom").style.visibility='visible'; 	
	}
}

function setBGColorOnInit() {
	var bgcolor = localStorage.getItem("Background_Color");
	if (bgcolor == null) {		
		return;
	}
	else {
		document.body.style.background = bgcolor;
	}
}

function functionBodyType(Sex, bodyType1) {
	if (Sex == "Male" && bodyType1 >= 85) {
		var Sex = "Femboy";
		return Sex;
	}
	else if (Sex == "Female" && bodyType1 <= 15) {
		var Sex = "Tomboy";
		return Sex;
	}
	else if (Sex == "Male" && bodyType1 <= 84) {
		var Sex = "Male";
		return Sex;
	}
	else if (Sex == "Female" && bodyType1 >= 16) {
		var Sex = "Female";
		return Sex;
	}
}

function makeCustomSlider1() {
	var leftText = document.getElementById("slider1LeftText").value;
	var centerText = document.getElementById("slider1CenterText").value;
	var rightText = document.getElementById("slider1RightText").value;
	
		if (leftText === "") {
			leftText = "&nbsp;";
		}
		
		if (centerText === "") {
			centerText = "&nbsp;";
		}
		
		if (rightText === "") {
			rightText = "&nbsp;";
		}	
		
		document.getElementById('textinmenuLeftCS1').innerHTML = leftText;	
		document.getElementById('textinmenuCenterCS1').innerHTML = centerText;	
		document.getElementById('textinmenuRightCS1').innerHTML = rightText;	
		localStorage.setItem("Custom_Slider1_LeftText", leftText);	
		localStorage.setItem("Custom_Slider1_CenterText", centerText);	
		localStorage.setItem("Custom_Slider1_RightText", rightText);
		localStorage.setItem("Custom_Slider1_Enabled", "Yes");
		document.getElementById("customSlider1Checkbox").checked = true;
		document.getElementById("custom1SliderMenu").style.display= 'block';
}

function makeCustomSlider2() {
	var leftText = document.getElementById("slider2LeftText").value;
	var centerText = document.getElementById("slider2CenterText").value;
	var rightText = document.getElementById("slider2RightText").value;
	
		if (leftText === "") {
			leftText = "&nbsp;";
		}
		
		if (centerText === "") {
			centerText = "&nbsp;";
		}
		
		if (rightText === "") {
			rightText = "&nbsp;";
		}	
		
		document.getElementById('textinmenuLeftCS2').innerHTML = leftText;	
		document.getElementById('textinmenuCenterCS2').innerHTML = centerText;	
		document.getElementById('textinmenuRightCS2').innerHTML = rightText;	
		localStorage.setItem("Custom_Slider2_LeftText", leftText);	
		localStorage.setItem("Custom_Slider2_CenterText", centerText);	
		localStorage.setItem("Custom_Slider2_RightText", rightText);
		localStorage.setItem("Custom_Slider2_Enabled", "Yes");
		document.getElementById("customSlider2Checkbox").checked = true;
		document.getElementById("custom2SliderMenu").style.display= 'block';
}

function makeCustomSlider3() {
	var leftText = document.getElementById("slider3LeftText").value;
	var centerText = document.getElementById("slider3CenterText").value;
	var rightText = document.getElementById("slider3RightText").value;
	
		if (leftText === "") {
			leftText = "&nbsp;";
		}
		
		if (centerText === "") {
			centerText = "&nbsp;";
		}
		
		if (rightText === "") {
			rightText = "&nbsp;";
		}		
		
		document.getElementById('textinmenuLeftCS3').innerHTML = leftText;	
		document.getElementById('textinmenuCenterCS3').innerHTML = centerText;	
		document.getElementById('textinmenuRightCS3').innerHTML = rightText;	
		localStorage.setItem("Custom_Slider3_LeftText", leftText);	
		localStorage.setItem("Custom_Slider3_CenterText", centerText);	
		localStorage.setItem("Custom_Slider3_RightText", rightText);
		localStorage.setItem("Custom_Slider3_Enabled", "Yes");
		document.getElementById("customSlider3Checkbox").checked = true;
		document.getElementById("custom3SliderMenu").style.display= 'block';
}

function toggleCustomSlider1() {
var tickbox = document.getElementById("customSlider1Checkbox");
	if (tickbox.checked) {
		var tickbox = "Yes"
		document.getElementById("custom1SliderMenu").style.display= 'block';
	}
	else {
		var tickbox = "No"
		document.getElementById("custom1SliderMenu").style.display= 'none';
	}
	localStorage.setItem("Custom_Slider1_Enabled", tickbox);
}

function toggleCustomSlider2() {
var tickbox = document.getElementById("customSlider2Checkbox");
	if (tickbox.checked) {
		var tickbox = "Yes"
		document.getElementById("custom2SliderMenu").style.display= 'block';
	}
	else {
		var tickbox = "No"
		document.getElementById("custom2SliderMenu").style.display= 'none';
	}
	localStorage.setItem("Custom_Slider2_Enabled", tickbox);
}

function toggleCustomSlider3() {
var tickbox = document.getElementById("customSlider3Checkbox");
	if (tickbox.checked) {
		var tickbox = "Yes"
		document.getElementById("custom3SliderMenu").style.display= 'block';
	}
	else {
		var tickbox = "No"
		document.getElementById("custom3SliderMenu").style.display= 'none';
	}
	localStorage.setItem("Custom_Slider3_Enabled", tickbox);
}

function loadCustomSlidersOnStartup() {
	loadCustomSlidersValuesOnStartup1();
	loadCustomSlidersValuesOnStartup2();
	loadCustomSlidersValuesOnStartup3();
	loadCustomSlidersNamesOnStartup1();
	loadCustomSlidersNamesOnStartup2();
	loadCustomSlidersNamesOnStartup3();
}

function loadCustomSlidersValuesOnStartup1() {
	var isCS1Enabled = localStorage.getItem("Custom_Slider1_Enabled");	
	if (isCS1Enabled == "Yes") {
		document.getElementById("customSlider1Checkbox").checked = true;
		var CS1Value = localStorage.getItem("Slot0_Custom_Slider1_Value");
		mySlider17.setValue(CS1Value);
	}
	else {
		var CS1Value = localStorage.getItem("Slot0_Custom_Slider1_Value");
		if (CS1Value == null) {
			document.getElementById("custom1SliderMenu").style.display= 'none';
		}
		else {
			mySlider17.setValue(CS1Value);
			document.getElementById("custom1SliderMenu").style.display= 'none';
		}
	}
}

function loadCustomSlidersNamesOnStartup1() {
	var leftText = localStorage.getItem("Custom_Slider1_LeftText");
	var centerText = localStorage.getItem("Custom_Slider1_CenterText");
	var rightText = localStorage.getItem("Custom_Slider1_RightText");
	document.getElementById('textinmenuLeftCS1').innerHTML = leftText;	
	document.getElementById('textinmenuCenterCS1').innerHTML = centerText;	
	document.getElementById('textinmenuRightCS1').innerHTML = rightText;		
}

function loadCustomSlidersValuesOnStartup2() {
	var isCS2Enabled = localStorage.getItem("Custom_Slider2_Enabled");	
	if (isCS2Enabled == "Yes") {
		document.getElementById("customSlider2Checkbox").checked = true;
		var CS2Value = localStorage.getItem("Slot0_Custom_Slider2_Value");
		mySlider18.setValue(CS2Value);
	}
	else {
		var CS2Value = localStorage.getItem("Slot0_Custom_Slider2_Value");
		if (CS2Value == null) {
			document.getElementById("custom2SliderMenu").style.display= 'none';
		}
		else {
			mySlider18.setValue(CS2Value);
			document.getElementById("custom2SliderMenu").style.display= 'none';
		}
	}
}

function loadCustomSlidersNamesOnStartup2() {
	var leftText = localStorage.getItem("Custom_Slider2_LeftText");
	var centerText = localStorage.getItem("Custom_Slider2_CenterText");
	var rightText = localStorage.getItem("Custom_Slider2_RightText");
	document.getElementById('textinmenuLeftCS2').innerHTML = leftText;	
	document.getElementById('textinmenuCenterCS2').innerHTML = centerText;	
	document.getElementById('textinmenuRightCS2').innerHTML = rightText;		
}

function loadCustomSlidersValuesOnStartup3() {
	var isCS3Enabled = localStorage.getItem("Custom_Slider3_Enabled");	
	if (isCS3Enabled == "Yes") {
		document.getElementById("customSlider3Checkbox").checked = true;
		var CS3Value = localStorage.getItem("Slot0_Custom_Slider3_Value");
		mySlider19.setValue(CS3Value);
	}
	else {
		var CS3Value = localStorage.getItem("Slot0_Custom_Slider3_Value");
		if (CS3Value == null) {
			document.getElementById("custom3SliderMenu").style.display= 'none';
		}
		else {
			mySlider19.setValue(CS3Value);
			document.getElementById("custom3SliderMenu").style.display= 'none';
		}
	}
}

function loadCustomSlidersNamesOnStartup3() {
	var leftText = localStorage.getItem("Custom_Slider3_LeftText");
	var centerText = localStorage.getItem("Custom_Slider3_CenterText");
	var rightText = localStorage.getItem("Custom_Slider3_RightText");
	document.getElementById('textinmenuLeftCS3').innerHTML = leftText;	
	document.getElementById('textinmenuCenterCS3').innerHTML = centerText;	
	document.getElementById('textinmenuRightCS3').innerHTML = rightText;		
}