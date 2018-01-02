function getHtml() {
	 var inner = document.getElementById("myInstance1").innerHTML;
	 document.getElementById("innerHTML").innerHTML = inner;
}

function clearArea() {
	  if (document.getElementById('myInstance1').innerHTML === '<p style="color: grey">Paste the text you want to modify here.</p>') {
	    document.getElementById('myInstance1').innerHTML = '';
	  }
}