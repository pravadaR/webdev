let car1 = new Object();
car1.make = "Hyundai";
car1.model = "i20";
car1.year = 2020;
car1.display = function () {
  document.write(this.make + " " + this.model + " " + this.year);
};

let car2 = new Object();
car2.make = "Maruti";
car2.model = "Swift";
car2.year = 2021;
car2.display = function () {
  document.write(this.make + " " + this.model + " " + this.year);
};

let car3 = new Object();
car3.make = "Tata";
car3.model = "Nexon";
car3.year = 2022;
car3.display = function () {
  document.write(this.make + " " + this.model + " " + this.year);
};
