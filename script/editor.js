var input = [document.createElement("DIV")];
sidebar.appendChild(input[0]);
input[0].setAttribute("class","equation");
input[0].setAttribute("contentEditable","true");
input[0].id = "i0";
input[0].style.fontSize = 1/30 * window.innerHeight;
input[0].style.paddingTop = 1/30 * window.innerHeight;
input[0].innerHTML = "<math><semantics><mrow><mi>x</mi><mo>=</mo></math>";

sidebar.onkeydown = function(event) {
  if(event.keyCode==13){
    input.push(document.createElement("DIV"));
    input[input.length - 1].setAttribute("contentEditable","true");
    input[input.length - 1].setAttribute("class","equation");
    input[input.length - 1].setAttribute("id","i" + String(input.length - 1));
    sidebar.insertBefore(input[input.length - 1],document.activeElement.nextSibling);
    document.getElementById("i" + (input.length - 1)).focus();
    return false;
  }
  if(event.keyCode==38){
    if(input.indexOf(document.activeElement) > 0){
     document.activeElement.previousSibling.focus();
    }
  }

  if(event.keyCode==40){
    if(input.indexOf(document.activeElement) != input.indexOf(sidebar.lastElementChild)){
     document.activeElement.nextSibling.focus();
  }
  }

  if(event.keyCode==8){
    if(document.activeElement.innerHTML == "" && input.indexOf(document.activeElement) > 0){
      document.activeElement.previousSibling.focus();
      sidebar.removeChild(document.activeElement.nextSibling);
      input.splice(input.indexOf(document.activeElement.nextSibling),1);
      return false;
    }
  }
  if(event.keyCode < 91 && event.keyCode > 47){

  }
}
sidebar.onmouseover = function(){
  //animArray.push([sidebar.style.right,500]);
}
String.prototype.replaceAll = function(target, replacement) {
  return this.split(target).join(replacement);
};
