function ani2(){
 document.getElementById('notify').className = 'notification2'
 setTimeout(hide, 400)
}
function hide(){
 document.getElementById('notify').style.display = 'none'
}

function awaitpl(){
	    document.getElementById('notify').style.display = ''
	    document.getElementById('notify').className = 'notification'
      setTimeout(function(){document.getElementById('log').innerHTML ='<h1 style=color:#ebfa89>*Loading Payload...</h1>'; }, 50);
      setTimeout(function(){document.getElementById("log").innerHTML="<h1 style=color:#ebfa89>"+LoadedMSG+"</h1>"; }, 800);
      setTimeout(ani2, 4000);
}

function awaitpl2(){
	    document.getElementById('notify').style.display = ''
	    document.getElementById('notify').className = 'notification'
      setTimeout(function(){document.getElementById('log').innerHTML ='<h1 style=color:#ebfa89>*Loading Binloader...</h1>'; }, 50);
      setTimeout(function(){document.getElementById("log").innerHTML="<h1 style=color:#ebfa89>"+LoadedMSG+"</h1>"; }, 800);
      setTimeout(ani2, 4000);    
}

function load_exploit(){
    document.getElementById('notify').style.display = ''
    document.getElementById('notify').className = 'notification'
    setTimeout(function(){document.getElementById('log').innerHTML ='<h1 style=color:#ebfa89>*Loading Exploit..Please Wait !!!</h1>'; }, 50); 
}

function load_exploit_success(){
    document.getElementById('notify').style.display = ''
    document.getElementById('notify').className = 'notification'
    setTimeout(function(){document.getElementById('log').innerHTML ='<h1 style=color:#ebfa89>*Jailbreak is already loaded !!!</h1>'; }, 50); 
    setTimeout(ani2, 2000);
}

function load_exploit_done(){
    document.getElementById('notify').style.display = ''
    document.getElementById('notify').className = 'notification'
    setTimeout(function(){document.getElementById('log').innerHTML ='<h1 style=color:#ebfa89>*Jailbreak Loaded !!!</h1>'; }, 50);   
    setTimeout(loadHomeBrew, 100);
}

function autopl(){
	    document.getElementById('notify').style.display = ''
	    document.getElementById('notify').className = 'notification'
      setTimeout(function(){document.getElementById("log").innerHTML="<h1 style=color:#ebfa89>"+LoadedMSG+"</h1>"; }, 100);
      setTimeout(ani2, 2000);
}

// Added AutoHEN
function loadHomeBrew() {
    var secondscheck = localStorage.getItem("CheckBOX2")
    if(secondscheck == "true") {
        setTimeout(load_goldhen2b2, 100)
    }else {
        document.getElementById('notify').style.display = ''
        document.getElementById('notify').className = 'notification'
        setTimeout(function(){document.getElementById('log').innerHTML ='<h1 style=color:#ebfa89>*Jailbreak Success !!! GoldHEN v2.4b18.3 Loaded !!!</h1>'; }, 50);   
        setTimeout(ani2, 4000);
    }
}

function load_otoolbox(){
LoadedMSG="Orbis-Toolbox Loaded !!!";
LoadFromGHBLS("OrbisToolbox.bin");
}

function load_gtabeef138(){
LoadedMSG="Installer gta5 rdr2 prx Loaded !!!";
LoadFromGHBLS("installergta5rdr2prx.bin");
}

function load_dumper(){
LoadedMSG="Dumper v2 Loaded !!!";
LoadFromGHBLS("gamedumper.bin");
}

function load_webrte(){
LoadedMSG="WebRte Loaded !!!";
LoadFromGHBLS("webrte.bin");
}

function load_ps4debug(){
LoadedMSG="PS4Debug v1.0.15  Loaded !!!";
LoadFromGHBLS("ps4debug.bin");
}

function load_cacheinstall(){
LoadedMSG="restore DB Loaded !!!";
LoadFromGHBLS("restore.bin");
}

function load_cacheinstall2(){
LoadedMSG="Backup DB Loaded !!!";
LoadFromGHBLS("backup.bin");
}

function load_pkg(){
LoadedMSG="Backup Pkg v1.1 Loaded!!! Load your game!!!";
LoadFromGHBLS("pkgbackup.bin");
}

function load_linux4gb(){
LoadedMSG="Linux 4G Pro Loaded!!!";
LoadFromGHBLS("linux4gbPhat.bin");
}

function load_linux4gbp(){
LoadedMSG="Linux 4G Pro Loaded!!!";
LoadFromGHBLS("linux4gbpro.bin");
}

function transitionPage(){
    // Hide to left / show from left
    $("#enter").toggle("slide", {direction: "left"}, 500);

    // Show from right / hide to right
    $("#about-2").toggle("slide", {direction: "right"}, 500);
}

$(document).ready(function() {
    $('#enter').click(transitionPage);
    $('#about-2').click(transitionPage);
});