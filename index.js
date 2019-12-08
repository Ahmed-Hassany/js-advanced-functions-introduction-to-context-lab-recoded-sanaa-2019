// Your code here
function createEmployeeRecord(arr){
  let empRecord ={
    firstName:arr[0],
    familyName:arr[1],
    title:arr[2],
    payPerHour:arr[3],
    timeInEvents:[],
    timeOutEvents:[]
  }
  return empRecord
}

function createEmployeeRecords(arr){
  let empsArr =[]
  for(let i=0;i<arr.length;i++)
  {
    empsArr.push(createEmployeeRecord(arr[i]))
  }
  return empsArr
}

function createTimeInEvent(emp,datetime){
  let [date,hour]=datetime.split(' ')
  emp.timeInEvents.push({type:"TimeIn",hour:parseInt(hour),date:date})
  return emp
}

function createTimeOutEvent(emp,datetime){
  let [date,hour]=datetime.split(' ')
  emp.timeOutEvents.push({type:"TimeOut",hour:parseInt(hour),date:date})
  return emp
}

function hoursWorkedOnDate(emp,date){
//let index =-1
let total = 0
for(let i=0;i<emp.timeInEvents.length;i++){
  if(emp.timeInEvents[i].date==date)
  total+=(emp.timeOutEvents[i].hour - emp.timeInEvents[i].hour)/100
}

return total
}

function wagesEarnedOnDate(emp,date){
  return hoursWorkedOnDate(emp,date)*emp.payPerHour
}

function allWagesFor(emp){
  let allWages = emp.timeInEvents.reduce((ac,item)=>{return ac+wagesEarnedOnDate(emp,item.date)},0)
return allWages
}

function findEmployeeByFirstName(srcArray,firstName){
  let foundEmp
  srcArray.forEach(emp=>{
    if(emp.firstName==firstName)
    foundEmp=emp
  })
  return foundEmp
}

function calculatePayroll(arr){
  let total =0
  arr.forEach(emp=>{
    total+=allWagesFor(emp)
    })
  return total
}
