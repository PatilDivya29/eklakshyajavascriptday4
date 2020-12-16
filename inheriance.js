 var  Employee = function(name,city){
    this.name=name;
    this.city=city;
    this.details=function(){
        console.log(this.name,'is from',this.city);
    }

}
function Manager(name,city,salary){
    Employee.call(this,name,city);
    this.salary=salary;
    this.calcBonus=function(amount){
            console.log('bonus is',amount*3);
        
    }
}
var emp=new Employee('riyaa','shirpur');
emp.details();
var mgr=new Manager('siyaa','ooty',1000);
mgr.details();
mgr.calcBonus(800);