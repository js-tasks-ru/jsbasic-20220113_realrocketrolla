let calculator = {
  sum() {
    return this.a + this.b;
  },

  mul() {
    return this.a * this.b;
  },

  read(a, b) {
   this.a = a;
   this.b = b;
  }
};

calculator.read(a, b);
console.log(calculator.sum());
console.log(calculator.mul());

window.calculator = calculator;
