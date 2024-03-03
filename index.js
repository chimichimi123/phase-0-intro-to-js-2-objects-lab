// Write your solution in this file!
 const employee = {
    name: "steve",
    streetaddress: "12 broadway"
 }

 function updateEmployeeWithKeyAndValue(obj, key, value) {
    const newobj = {...obj};
    newobj[key] = value
        return newobj
 }

 function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value;
    return obj;
 }

 function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = {...employee};
    delete newEmployee[key]
    return newEmployee;
 }

 function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
 }