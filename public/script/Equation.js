class Equation{
  constructor(){
    //Covers the case of Equation(function,Equation)
    if(typeof argument[0] === 'function' && (argument[1] === undefined || argument[1] instanceof Equation){
	    this.f = argument[0];
	    this.arg = [argument[1]];
  }
   //Covers the case of Equation(string)
   else if(typeof argument[0] === 'string'){this.f = getPriorF(argument[0]); this.arg = getPriorArgs(argument[0]);
   }
  
}
