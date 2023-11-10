console.log(123)

import {capitilize, addDollarSign} from "./modules/utils.js" //although not necessary, we can file extension .js 
//to make the logic visble in the browser console
import Person from "./modules/student.js";
let person1 = new Person("John", 45);
console.log(person1);
person1.greet()

//to use the exported function
console.log(capitilize('eliud karuga')) 
console.log(addDollarSign(100));