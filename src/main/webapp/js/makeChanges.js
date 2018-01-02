function clearArea() {
  if (document.getElementById('textInput').innerHTML === 'Paste the text you want to modify here.') {
    document.getElementById('textInput').innerHTML = '';
    document.getElementById('textInputViewer').innerHTML = '';
    $('#textInput').css('color', '#000000');
  }
}

function setShadow() {
  var shadowHor = $('#shadowHor').val();
  var shadowVer = $('#shadowVer').val();
  var shadowRad = $('#shadowRad').val();
  var shadowColor = $('#shadowColor').val();
  $('#textInput').css('textShadow', shadowHor + 'px ' + shadowVer + 'px ' + shadowRad + 'px ' + '#' + shadowColor);
  $('textInputViewer').css('textShadow', shadowHor + 'px ' + shadowVer + 'px ' + shadowRad + 'px ' + '#' + shadowColor);
  setCSS();
}

function setBorderWidth() {
  var borderSize = $('#borderSize').val();
  $('#textInput').css('border-width', borderSize + 'px');
  $('textInputViewer').css('border-width', borderSize + 'px');
  setCSS();
}

function setBorderStyle(borderStyle) {
    $('#textInput').css('border-style', borderStyle);
    $('textInputViewer').css('border-style', borderStyle);
    setCSS();
}

function borderColor(jscolor) {
  $('#textInput').css('border-color', '#' + jscolor);
  $('textInputViewer').css('border-color', '#' + jscolor);
  setCSS();
}


function fontColor(jscolor) {
  $('#textInput').css('color', '#' + jscolor);
  $('textInputViewer').css('color', '#' + jscolor);
  setCSS();
}

function bColor(jscolor) {
  $('#textInput').css('background-color', '#' + jscolor);
  $('textInputViewer').css('background-color', '#' + jscolor);
  setCSS();
}

function setFontFamily(fontFamily) {
  $('#textInput').css('font-family', fontFamily);
  $('textInputViewer').css('font-family', fontFamily);
  setCSS();
}

function setFontSize() {
  var selectTag = $('#measure').get(0);
  var fontSize = $('#fontSize').val();
  var units = selectTag[selectTag.selectedIndex].value;
  $('#textInput').css('font-size', fontSize + units);
  $('textInputViewer').css('font-size', fontSize + units);
  setCSS();
}

function bold() {
  var input = $('#textInput').get(0);
  var styleView = $('#textInputViewer').get(0);
  var bold = $('#bold').get(0);
  if(bold.src.match('bold.gif')){
    bold.src = 'images/bold_a.gif';
    input.style.fontWeight += 'bold';
    styleView.style.fontWeight += 'bold';
  }else{
    bold.src = 'images/bold.gif';
    input.style.fontWeight = input.style.fontWeight.replace('bold','');
    styleView.style.fontWeight = input.style.fontWeight;
  }
  setCSS();
}

function italic() {
  var input = $('#textInput').get(0);
  var styleView = $('#textInputViewer').get(0);
  var italic = $('#italic').get(0);
  if(italic.src.match('italic.gif')){
    italic.src = 'images/italic_a.gif';
    input.style.fontStyle += 'italic';
    styleView.style.fontStyle += 'italic';
  }else{
    italic.src = 'images/italic.gif';
    input.style.fontStyle = input.style.fontStyle.replace('italic','');
    styleView.style.fontStyle = styleView.style.fontStyle.replace('italic','');
  }
  setCSS();
}

function uline() {
  var input = $('#textInput').get(0);
  var styleView = $('#textInputViewer').get(0);
  var uline = $('#uline').get(0);
  if(uline.src.match('uline.gif')){
    uline.src = 'images/uline_a.gif';
    input.style.textDecoration = 'underline';
    styleView.style.textDecoration = 'underline';
    $('sthrough').attr('src','images/sthrough.gif');
  }else{
    uline.src = 'images/uline.gif';
    input.style.textDecoration = '';
    styleView.style.textDecoration = '';
  }
  setCSS();
}

function sthrough() {
  var input = $('#textInput').get(0);
  var styleView = $('#textInputViewer').get(0);
  var sthrough = $('#sthrough').get(0);
  if(sthrough.src.match('sthrough.gif')){
    sthrough.src = 'images/sthrough_a.gif';
    input.style.textDecoration = 'line-through';
    styleView.style.textDecoration = 'line-through';
    $('uline').attr('src','images/uline.gif');
  }else{
    sthrough.src = 'images/sthrough.gif';
    input.style.textDecoration = '';
    styleView.style.textDecoration = '';
  }
  setCSS();
}

function allcaps() {
  var input = $('#textInput').get(0);
  var styleView = $('#textInputViewer').get(0);
  var allcaps = $('#allcaps').get(0);
  if(allcaps.src.match('allcaps.gif')) {
    allcaps.src = 'images/allcaps_a.gif';
    input.style.textTransform = 'uppercase';
    input.style.fontVariant = '';
    styleView.style.textTransform = 'uppercase';
    styleView.style.fontVariant = '';
    $('smallcaps').attr('src','images/smallcaps.gif');
  }else {
    allcaps.src = 'images/allcaps.gif';
    input.style.textTransform = '';
    styleView.style.textTransform = '';
  }
  setCSS();
}

function smallcaps() {
  var input = $('#textInput').get(0);
  var styleView = $('#textInputViewer').get(0);
  var smallcaps = $('#smallcaps').get(0);
  if(smallcaps.src.match('allcaps.gif')) {
    smallcaps.src = 'images/smallcaps_a.gif';
    input.style.fontVariant = 'small-caps';
    input.style.textTransform = '';
    styleView.style.fontVariant = 'small-caps';
    styleView.style.textTransform = '';
    $('allcaps').attr('src','images/allcaps.gif');
  }else {
    smallcaps.src = 'images/smallcaps.gif';
    input.style.fontVariant = '';
    styleView.style.fontVariant = '';
  }
  setCSS();
}

function left() {
  var input = $('#textInput').get(0);
  var styleView = $('#textInputViewer').get(0);
  var left = $('#left').get(0);
  if(left.src.match('left.gif')){
    left.src = 'images/left_a.gif';
    input.style.textAlign = 'left';
    styleView.style.textAlign = 'left';
    $('#right').attr('src', 'images/right.gif');
    $('#justify').attr('src', 'images/justify.gif');
    $('#center').attr('src', 'images/center.gif');
  }
  setCSS();
}

function center() {
  var input = $('#textInput').get(0);
  var styleView = $('#textInputViewer').get(0);
  var center = $('#center').get(0);
  if(center.src.match('center.gif')) {
    center.src = 'images/center_a.gif';
    input.style.textAlign = 'center';
    styleView.style.textAlign = 'center';
    $('#left').attr('src', 'images/left.gif');
    $('#right').attr('src', 'images/right.gif');
    $('#justify').attr('src', 'images/justify.gif');
  }
  setCSS();
}

function right() {
  var input = $('#textInput').get(0);
  var styleView = $('#textInputViewer').get(0);
  var right = $('#right').get(0);
  if(right.src.match('right.gif')){
    right.src = 'images/right_a.gif';
    input.style.textAlign = 'right';
    styleView.style.textAlign = 'right';
    $('#left').attr('src', 'images/left.gif');
    $('#justify').attr('src', 'images/justify.gif');
    $('#center').attr('src', 'images/center.gif');
  }
  setCSS();
}

function justify() {
  var input = $('#textInput').get(0);
  var styleView = $('#textInputViewer').get(0);
  var justify = $('#justify').get(0);
  if(justify.src.match('justify.gif')) {
    justify.src = 'images/justify_a.gif';
    input.style.textAlign = 'justify';
    styleView.style.textAlign = 'justify';
    $('#left').attr('src', 'images/left.gif');
    $('#center').attr('src', 'images/center.gif');
    $('#right').attr('src', 'images/right.gif');
  }
  setCSS();
}

function setCSS() {
  $('#cssOutput').css('color', '#000000');
  var instyle = document.getElementById('textInput').style;
  var text = "";
  if(instyle.fontFamily) text += "font-family: " + instyle.fontFamily + ";\n";
  if(instyle.color && RGB2Color(instyle.color) != '#000000') text += "color: " + RGB2Color(instyle.color) + ";\n";
  if(instyle.backgroundColor && RGB2Color(instyle.backgroundColor) != '#FFFFFF') text += "background-color: " + RGB2Color(instyle.backgroundColor) + ";\n";
  if(instyle.fontSize) text += "font-size: " + instyle.fontSize + ";\n";
  if(instyle.fontWeight) text += "font-weight: " + instyle.fontWeight + ";\n";
  if(instyle.fontStyle) text += "font-style: " + instyle.fontStyle + ";\n";
  if(instyle.textDecoration) text += "text-decoration: " + instyle.textDecoration + ";\n";
  if(instyle.textTransform) text += "text-transform: " + instyle.textTransform + ";\n";
  if(instyle.fontVariant) text += "font-variant: " + instyle.fontVariant + ";\n";
  if(instyle.textAlign && instyle.textAlign != "left") text += "text-align: " + instyle.textAlign + ";\n";
  if(instyle.letterSpacing && instyle.letterSpacing != "1pt") text += "letter-spacing: " + instyle.letterSpacing + ";\n";
  if(instyle.wordSpacing && instyle.wordSpacing != "1pt") text += "word-spacing: " + instyle.wordSpacing + ";\n";
  if(instyle.lineHeight && instyle.lineHeight != 1) text += "line-height: " + instyle.lineHeight + ";\n";
  if (instyle.borderStyle != "" && instyle.borderStyle != "none") {
    text += "border-style:" + instyle.borderStyle + ";\n";
    text += "border-width:" + instyle.borderWidth + ";\n";
    text += "border-color:" + RGB2Color(instyle.borderColor) + ";\n";
  } 
  console.log(instyle.textShadow);
  if (instyle.textShadow) text += "text-shadow: " + instyle.textShadow + ";\n";

  $('#cssOutput').val(text);
}

/*Called when the input textarea loses focus.  Shows the <div> element
and sets the new text*/
function loseFocus() {
  var instyle = $('#textInput').css();
  var styleView = $('#textInputViewer').css();
  matchDivLoc();
  styleView.style.display = "block";
}

/*Called when the input area gains focus.  Hides the <div> element*/
function gainFocus() {
  var instyle = $('#textInput').css();
  var styleView = $('#textInputViewer').css();
  
  //if it's the first time the user clicks, select the text
  if(instyle.value == "Paste the text you want to modify here.") {
    //instyle.select();
  }
  
  matchTALoc();
//  styleView.style.visibility = "hidden";
  styleView.style.display = "none";
  
  instyle.focus();
}

/*Copies the text from the input textarea to the div above it*/
function copyTextToDiv() {
  var instyle = $('#textInput').css();
  var styleView = $('#textInputViewer').css();
  
  var fixedText = instyle.value.replace(/\n/g,'<br/>');
  
  var multiSpaces = fixedText.match(/\s{2,}/g);
  var spaceCodes = new Array();
  for(var i=0; multiSpaces && i<multiSpaces.length; i++) {
    spaceCodes[i] = multiSpaces[i].replace(/\s/g,'&nbsp;');
    fixedText = fixedText.replace(multiSpaces[i],spaceCodes[i]);
  }
  
  styleView.innerHTML = fixedText;
}

//-----------------------------------------------------------------------------
//These two functions are used to match the scrollbars on the input textarea
//and the div above it.
function matchDivLoc() {
  var instyle = $('#textInput').css();
  var styleView = $('#textInputViewer').css();
  
  div.scrollTop = ta.scrollTop;
}

function matchTALoc() {
  var instyle = $('#textInput').css();
  var styleView = $('#textInputViewer').css();
  
  ta.scrollTop = div.scrollTop;
}


//Modified lots and tons
function byte2Hex(n) {
  var nybHexString = "0123456789ABCDEF";
  return String(nybHexString.substr((n >> 4) & 0x0F,1)) + nybHexString.substr(n & 0x0F,1);
}

function RGB2Color(colors) {
  if(!colors) return '000000';
  if(!colors.match('rgb')) return colors;
  var rgb = colors.match(/\d+/g);
  return "#" + byte2Hex(rgb[0]) + byte2Hex(rgb[1]) + byte2Hex(rgb[2]);
}

