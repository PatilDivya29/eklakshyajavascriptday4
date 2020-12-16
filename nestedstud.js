var details=function(){
    console.log('hello',this.name)
}
var showMessage={
    greet:function()
    {
        return 'divya'+this.name;
    }
}
var findTotal={
    sum:function(a,b){
        console.log('total marks',this.name)
        console.log('sum',(a+b))
    }
}
//var showHobbies=function(...hobby){
   // console.log('divya',this.name);
    //hobby.forEach(element=>{
      //  console.log('hobbies are:',element);
    //});
//}

var studAvg={
    avg:function(a,b){
        console.log('avg for student',this.name)
        console.log('',(a+b)/2)
    }
}
var student = 
    { name: 'divya',
     rollno: 1, 
}
   
    var student1=
     { name: 'shreeya',
     rollno: 2, 
}  
details.call(student);
var message=showMessage.greet.call(student);
console.log(message);
findTotal.sum.call(student,50,70);
findTotal.sum.apply(student,[50,70]);
studAvg.avg.call(student,50,70);
studAvg.avg.apply(student1,[50,70]);
findTotal.sum.call(student,50,70);
findTotal.sum.apply(student,[50,70]);
studAvg.avg.call(student,50,70);
studAvg.avg.apply(student1,[50,70]);

