var derTable = [
  ["cos","Math.cos(~)","-(!)sin(~)","-(!)*Math.sin(~)"],
  ["sin","Math.sin(~)","(!)cos(~)","(!)*Math.cos(~)"],
  ["tan","Math.tan(~)","(!)sec^2(~)","(!)/(Math.cos(~))/(Math.cos(~))"],
  ["sec","1/Math.cos(~)","(!)tan(~)sec(~)","(!)*Math.tan(~)/Math.cos(~)"],
  ["csc","1/Math.sin(~)","-(!)csc(~)cot(~)","-(!)/Math.sin(~)/Math.tan(~)"],
  ["cot","1/Math.tan(~)","-(!)csc^2(~)","-(!)/Math.sin(~)/Math.sin(~)"],
  ["sqrt","Math.sqrt(~)","(!)/(2sqrt(~))","(!)/2/Math.sqrt(~)"],
  ["ln","Math.ln(~)","!/~","(!)/(~)"],
  ["arctan","Math.atan(~)","(!)/((~)^2+1)","(!)/((~)^2+1)"],
  ["arcsin","Math.asin(~)","(!)/sqrt(1-(~)^2)","(!)/Math.sqrt(1-(~)*(~))"],
  ["arccos","Math.acos(~)","-(!)/sqrt(1-(~)^2)","(!)/Math.sqrt(1-(~)*(~))"]
];

function derivative(eqn){
  if(!isNaN(eqn)){
    return 0;
  }
  if(eqn.match(/[a-z]/i) && eqn.length == 1){
    return 1;
  }
  if(eqn.indexOf("(") > -1){
    var first = eqn.indexOf("(");
    var last = eqn.indexOf(")");
    for(i = 0; i < derTable.length; i++){
      if(eqn.slice(0,3) == derTable[i][0] && eqn.length == last + 1 && first == derTable[i][0].length){
        return derTable[i][2].replaceAll("~",eqn.slice(first + 1,last)).replaceAll("!",derivative(eqn.slice(first + 1,last)));
      }
    }
  }
  if(eqn.indexOf("+") > - 1){
    return derivative(eqn.slice(0,eqn.indexOf("+"))) + "+" + derivative(eqn.slice(eqn.search("+") + 1,eqn.length));
  }
  if(eqn.indexOf("-") > - 1){
    return derivative(eqn.slice(0,eqn.indexOf("+"))) + "-" + derivative(eqn.slice(eqn.search("+") + 1,eqn.length));
  }
  if(eqn.indexOf("*") > -1){
    return derivative(eqn.slice(0,eqn.indexOf("*"))) + "*" + eqn.slice(eqn.search("*") + 1,eqn.length) + "+" + derivative(eqn.slice(eqn.search("*") + 1,eqn.length)) + "*" + eqn.slice(0,eqn.indexOf("*"));
  }
  if(eqn.indexOf("^") > -1){
    return
  }
}
function simplify(eqn){
  eqn.replaceAll("--","+");
  eqn.replaceAll(" ","");
}
