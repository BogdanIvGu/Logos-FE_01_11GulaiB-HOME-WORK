const minSalary = 500;
const maxSalary = 2000;
const emploees = 10;
let totalsalary = 0;
let i = 1;
for ( i = 1; i <= emploees; i+= 1) {
    
    // console.log(i);
    const salary = Math.round(Math.random()*(maxSalary-minSalary) + minSalary);
    // console.log(salary);
    console.log(`Працівник ${i} має зарплату ${salary}`);
    totalsalary += salary;
    // console.log(totalsalary);
}

console.log(`Загальна зарплата ${i} працівників становить ${totalsalary}`);

