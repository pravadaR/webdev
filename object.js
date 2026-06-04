let dog = {
  breed: "Golden retriver",
  height: "4ft",
  age: 2,
  display: function () {
    document.write(this.breed + this.height + this.age);
  },
};
document.write(dog.breed);
document.write(dog.height);
document.write(dog.age);

dog.weight = "32kg";

document.write(dog.weight);
