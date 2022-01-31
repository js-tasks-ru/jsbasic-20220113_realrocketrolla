function showSalary(users, age) {
let usersBalanceAge = users.filter(user => user.age <= age);
let result = usersBalanceAge.map(user => user.name + ", " + user.balance);
  return result.join("\n");
}