function showHelp() {
  alert("Måste ange ett nummer!");
} 

function setIDs() {
          var ids = ["ml", "cl", "dl", "l", "krm","tsk", "msk"];
          for (i = 0; i < ids.length; i++) {
            document.getElementById(ids[i]).innerHTML = "0";
          }
        }
        
        function getSelectedText(elementId) {
          var elt = document.getElementById(elementId);

          if (elt.selectedIndex == -1)
            return null;

          return elt.options[elt.selectedIndex].text;
        }
 
function setResult() {
 	    var text = getSelectedText('enhet');    
        var a = document.getElementById('textIn').value;
        
      if (isNaN(a)) {
          setIDs();
      } else {
  
        var inputInt = parseFloat(a);
        
        if (text == "ml") {
          
          if (a == "") {
            setIDs();
          } else {
             document.getElementById("ml").innerHTML = a;
            
            var cl = inputInt * 0.1;
            document.getElementById("cl").innerHTML = cl.toFixed(2);
            
            var dl = inputInt * 0.01
            document.getElementById("dl").innerHTML = dl.toFixed(2);
        
            var l = inputInt * 0.001
            document.getElementById("l").innerHTML = l.toFixed(3);
            
            var krm = inputInt * 1;
            document.getElementById("krm").innerHTML = krm.toFixed(2);
            
            var tsk = inputInt * 0.2;
            document.getElementById("tsk").innerHTML = tsk.toFixed(2);
            
            var msk = inputInt * 0.066;
            document.getElementById("msk").innerHTML = msk.toFixed(2);
          } 
        } else if (text == "cl") {
          if (a == "") {
            setIDs();
          } else {
            document.getElementById("cl").innerHTML = a;
            
            var ml = inputInt * 10;
            document.getElementById("ml").innerHTML = ml.toFixed(2);
            
            var dl = inputInt * 0.1;
            document.getElementById("dl").innerHTML = dl.toFixed(2);
            
            var l = inputInt * 0.01;
            document.getElementById("l").innerHTML = l.toFixed(2);
            
            var krm = inputInt * 10;
            document.getElementById("krm").innerHTML = krm.toFixed(2);
            
            var tsk = inputInt * 2;
            document.getElementById("tsk").innerHTML = tsk.toFixed(2);
            
            var msk = inputInt * 0.66;
            document.getElementById("msk").innerHTML = msk.toFixed(2);
          }
        } else if (text == "dl") {
          if (a == "") {
            setIDs();
          } else {
            document.getElementById("dl").innerHTML = a;
            
            var ml = inputInt * 100;
            document.getElementById("ml").innerHTML = ml.toFixed(2);
            
            var cl = inputInt * 10;
            document.getElementById("cl").innerHTML = cl.toFixed(2);
            
            var l = inputInt * 0.1;
            document.getElementById("l").innerHTML = l.toFixed(2);
            
            document.getElementById("krm").innerHTML = ml.toFixed(2);
            
            var tsk = inputInt * 20;
            document.getElementById("tsk").innerHTML = tsk.toFixed(2);
            
            var msk = inputInt * 6.67;
            document.getElementById("msk").innerHTML = msk.toFixed(2);
          }
        } else if (text == "l") {
          if (a == "") {
            setIDs();
          } else {
            document.getElementById("l").innerHTML = a;
            
            var ml = inputInt * 1000;
            document.getElementById("ml").innerHTML = ml.toFixed(2);
            
            var cl = inputInt * 100;
            document.getElementById("cl").innerHTML = cl.toFixed(2);
            
            var dl = inputInt * 10;
            document.getElementById("dl").innerHTML = dl.toFixed(2);
            
            document.getElementById("krm").innerHTML = ml.toFixed(2);
            
            var tsk = inputInt * 200;
            document.getElementById("tsk").innerHTML = tsk.toFixed(2);
            
            var msk = inputInt * 66.67;
            document.getElementById("msk").innerHTML = msk.toFixed(2);
            
          }
        } else if (text == "krm") {
          if (a == "") {
            setIDs();
          } else {
            document.getElementById("krm").innerHTML = a;
            
            var ml = inputInt * 1;
            document.getElementById("ml").innerHTML = ml.toFixed(2);
            
            var cl = inputInt * 0.1;
            document.getElementById("cl").innerHTML = cl.toFixed(2);
            
            var dl = inputInt * 0.01;
            document.getElementById("dl").innerHTML = dl.toFixed(2);
            
            var l = inputInt * 0.001;
            document.getElementById("l").innerHTML = l.toFixed(3);
            
            var tsk = inputInt * 0.2;
            document.getElementById("tsk").innerHTML = tsk.toFixed(2);
            
            var msk = inputInt * 0.066;
            document.getElementById("msk").innerHTML = msk.toFixed(2);
            
          }
        } else if (text == "tsk") {
          if (a == "") {
            setIDs();
          } else {
            document.getElementById("tsk").innerHTML = a;
            
            var ml = inputInt * 5;
            document.getElementById("ml").innerHTML = ml.toFixed(2);
            
            var cl = inputInt * 0.5;
            document.getElementById("cl").innerHTML = cl.toFixed(2);
            
            var dl = inputInt * 0.05;
            document.getElementById("dl").innerHTML = dl.toFixed(2);
            
            var l = inputInt * 0.005;
            document.getElementById("l").innerHTML = l.toFixed(2);
            
            var krm = inputInt * 5;
            document.getElementById("krm").innerHTML = krm.toFixed(2);
            
            var msk = inputInt * 0.33;
            document.getElementById("msk").innerHTML = msk.toFixed(2);
            }
          } else if (text == "msk") {
          if (a == "") {
            setIDs();
          } else {
            document.getElementById("msk").innerHTML = a;
            
            var ml = inputInt * 15;
            document.getElementById("ml").innerHTML = ml.toFixed(2);
            
            var cl = inputInt * 1.5;
            document.getElementById("cl").innerHTML = cl.toFixed(2);
            
            var dl = inputInt * 0.15;
            document.getElementById("dl").innerHTML = dl.toFixed(2);
            
            var l = inputInt * 0.015;
            document.getElementById("l").innerHTML = l.toFixed(2);
            
            var tsk = inputInt * 3;
            document.getElementById("tsk").innerHTML = tsk.toFixed(2);
            
            var krm = inputInt * 15;
            document.getElementById("krm").innerHTML = krm.toFixed(2);
            
          }
          }
  			}      
 			}
 
$("#textIn").keyup(function(){
 	setResult();       
});
    
function update() {
	setResult();		
}