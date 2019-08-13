class Organization {
  constructor(name, budget) {
    this.name = name;
    this.employees = [];
    this.budget = budget;

    this.departmentsBudget = {
      marketing: Math.floor(this.budget * 0.4),
      finance: Math.floor(this.budget * 0.25),
      production: Math.floor(this.budget * 0.35)

    };

  }

  add(employeeName, department, salary) {
    let result = '';
    if (this.departmentsBudget[department] < salary) {
      result = `The salary that ${department} department can offer to you Mr./Mrs. ${employeeName} is ${this.departmentsBudget[department]}.`
    } else {
      let employee = {employeeName, department, salary};
      this.employees.push(employee);

      this.departmentsBudget[department] -= salary;

      result = `Welcome to the ${department} team Mr./Mrs. ${employeeName}.`;

    }
    return result;
  }

  employeeExists(employeeName) {
    let result = '';
    for (const employee of this.employees) {
      if (employee.employeeName === employeeName) {
        result = `Mr./Mrs. ${employeeName} is part of the ${employee.department} department.`;
        break;
      }
      result = `Mr./Mrs. ${employeeName} is not working in ${this.name}.`;
    }

    return result;
  }

  leaveOrganization(employeeName) {
    let result = '';
    for (const employee of this.employees) {
      if (employee.employeeName === employeeName) {
        let employeeSalary = employee.salary;
        let removeIndex = this.employees.indexOf(employee);
        this.employees.splice(removeIndex, 1);

        this.departmentsBudget[employee.department] += employeeSalary;

        result = `It was pleasure for ${this.name} to work with Mr./Mrs. ${employeeName}.`;
        break;
      }
      result = `Mr./Mrs. ${employeeName} is not working in ${this.name}.`;
    }

    return result;
  }

  status() {
    let marketingEmployees = this.employees.filter(e => e.department === 'marketing').sort ((a, b) => {
      return b.salary - a.salary;
    }).map(e => e.employeeName);
    let financeEmployees = this.employees.filter(e => e.department === 'finance').sort ((a, b) => {
      return b.salary - a.salary;
    }).map(e => e.employeeName);
    let productionEmployees = this.employees.filter(e => e.department === 'production').sort ((a, b) => {
      return b.salary - a.salary;
    }).map(e => e.employeeName);
    let output = '';

    output += `${this.name.toUpperCase()} DEPARTMENTS:`
    output += `\nMarketing | Employees: ${marketingEmployees.length}:`
    output += marketingEmployees.length === 0?'' : ` ${marketingEmployees.join(', ')}`
    output += ` | Remaining Budget: ${this.departmentsBudget['marketing']}`;

    output += `\nFinance | Employees: ${financeEmployees.length}:`
    output += financeEmployees.length === 0?'' : ` ${financeEmployees.join(', ')}`
    output += ` | Remaining Budget: ${this.departmentsBudget['finance']}`;

    output += `\nProduction | Employees: ${productionEmployees.length}:`
    output += productionEmployees.length === 0?'' : ` ${productionEmployees.join(', ')}`
    output += ` | Remaining Budget: ${this.departmentsBudget['production']}`;

    return output;
  }
}

let organization = new Organization('SoftUni', 20000.50);
console.log('-----------------------------');

console.log(organization.add('Peter', 'marketing', 1200));
console.log('-----------------------------');
console.log(organization.add('Peter2', 'marketing', 2000));
console.log('-----------------------------');
console.log(organization.add('Robert', 'production', 2000));
console.log('-----------------------------');
console.log(organization.leaveOrganization('Peter'));
console.log('-----------------------------');
console.log(organization.leaveOrganization('Ani'));
console.log('-----------------------------');
console.log(organization.status());
console.log('-----------------------------');
console.log(organization.status1());