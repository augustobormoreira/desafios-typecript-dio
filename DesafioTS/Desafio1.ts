//Setting the type directly on the creation of the object
/*let employee1: { code: number, name: string} = {
    code : 10,
    name : 'John'
};
*/

//Setting the type using interface
interface Employee {
    code: number,
    name: string
}

let employee1: Employee = {
    code: 10,
    name: 'John'
}


console.log(employee1.code)
console.log(employee1.name);
