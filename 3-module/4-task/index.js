function showSalary(users, age) {
  let result = [];

  data.forEach(function(item) {
    if (item.age <= age) {
      result.push(`${item.name}, ${item.balance}`);
    }
  });

  return result.join('\n');
}