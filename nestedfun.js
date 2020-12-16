var showProduct=function(name,brand,price){
    this.name=name;
    this.brand=brand;
    this.price=price;
        console.log(" product",this.name);
        console.log(" brand ",this.brand);

       return function(discount)
       {
           this.discount=discount;
           console.log("discount ",this.price-this.discount)
       }
     }

showProduct('TV','sony',90000)
(5000);