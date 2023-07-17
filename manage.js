class Employees {
    constructor(name, type, salary, hourlyRate) {
      this.name = name;
      this.type = type;
      this.salary = salary;
      this.hourlyRate = hourlyRate;
      this.totalSales = 200;
      this.targetSales = 100;
    }
  
    calculatePayout() {
      if (this.totalSales > this.targetSales) {
        if (this.type === "Salary") {
          console.log('Payout calculation formula: Salary + (Salary * 0.1)');
          return this.salary + (this.salary * 0.1);
        } else if (this.type === "Hourly") {
          console.log('Payout calculation formula: Salary + (Hourly Rate * Total Sales * 0.5)');
          return this.salary + (this.hourlyRate * this.totalSales * 0.5);
        } else if (this.type === "Hybrid") {
          console.log('Payout calculation formula: Salary + ((Salary * 0.2) + (Hourly Rate * Total Sales))');
           return this.salary + ((this.salary * 0.2) + (this.hourlyRate * this.totalSales));
        }
        
      }
    }
}
  
  const salaryEmployee1 = new Employees("Mosa Sefatsa", "Salary", 5000, 0);
  const salaryEmployee2 = new Employees("Keletso Dikotsi", "Salary", 3000, 0);
  
  const hourlyEmployee1 = new Employees("Naledi Anderson", "Hourly", 10, 20);
  const hourlyEmployee2 = new Employees("Mike Mathews", "Hourly", 0, 25);
  
  const hybridEmployee1 = new Employees("kate Stevenson", "Hybrid", 6000, 40);
  const hybridEmployee2 = new Employees("Bob Peters", "Hybrid", 9000, 30);
  
  //Display Monthly payout for each employee
  console.log('\n')
  console.log(`${salaryEmployee1.name} (${salaryEmployee1.type}): R${salaryEmployee1.calculatePayout()}`);
  console.log(`${salaryEmployee2.name} (${salaryEmployee2.type}): R${salaryEmployee2.calculatePayout()}`);
  console.log('\n')
  
  console.log(`${hourlyEmployee1.name} (${hourlyEmployee1.type}): R${hourlyEmployee1.calculatePayout()}`);
  console.log(`${hourlyEmployee2.name} (${hourlyEmployee2.type}): R${hourlyEmployee2.calculatePayout()}`);
  console.log('\n')

  console.log(`${hybridEmployee1.name} (${hybridEmployee1.type}): R${hybridEmployee1.calculatePayout()}`);
  console.log(`${hybridEmployee2.name} (${hybridEmployee2.type}): R${hybridEmployee2.calculatePayout()}`);
