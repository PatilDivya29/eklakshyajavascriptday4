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
var showHobbies=function(...hobby){
    console.log('divya',this.name);
    hobby.forEach(element=>{
        console.log('hobbies are:',element);
    });
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
showHobbies.apply(student,['painting','singing','crafting']);
showHobbies.apply(student1,['painting','cooking','crafting']);


    