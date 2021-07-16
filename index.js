// Write your solution in this file!
/*const employee = {
    name: 'Christina',
    streetAddress: "13 Camelot"
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    return employee = 'Chris'
}
*/

function updateEmployeeWithKeyAndValue(obj, key, value) {
    return Object.assign({}, obj, {[key]: value});
}
    let employee = {name:'',
    streetAddress: '13 Camelot'
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
 employee [key] = value;
 return employee;
}

function deleteFromEmployeeByKey(obj, key, value) {
    return Object.assign({}, obj, {[key]: value});
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]
    return employee
}