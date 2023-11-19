//there is 2 type 1.variables 2.consts

/*Variable can be define by two keywords let & var 
->let is scopbased variable its scope is under parent braces . simply it is scope based variable.
->var is not scope based variable its scope is big than let.
*/

let acoountName='private';
var accountId=134;

acoountName='dharmesh';

accountId=1321;



/* 
constance can be define by const keyword.
->const variable is unchangebale after one time asingned value.
*/

const collegeName='khyati school of computer application';

//collegeName='gujarat university'; 
//its not works in constance
//it will give error ->TypeError: Assignment to constant variable.

//->we can also define without any keywordd

accountState='gujarat';


console.log(collegeName);

console.table([accountId,acoountName,collegeName,accountState]);