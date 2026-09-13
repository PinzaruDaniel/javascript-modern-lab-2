export { employees } from "./data.js";

export const filterByDepartment = (list, department) =>
  list.filter((emp) => emp.department.toLowerCase() === department.toLowerCase());

export const groupByDepartment = (list) =>
  list.reduce((groups, emp) => {
    const { department } = emp;
    return {
      ...groups,
      [department]: [...(groups[department] || []), emp]
    };
  }, {});

export const calculateAverageSalary = (list) => {
  if (!list || list.length === 0) return 0;
  const totalSalary = list.reduce((sum, { salary }) => sum + salary, 0);
  return totalSalary / list.length;
};

export const getExperiencedEmployees = (list, minYears = 3) =>
  list.filter(({ experience }) => experience > minYears);

export const increaseSalaryForExperienced = (list, minYears = 3, percentage = 10) =>
  list.map((emp) => {
    const { experience, salary } = emp;
    if (experience > minYears) {
      return {
        ...emp,
        salary: Math.round(salary * (1 + percentage / 100))
      };
    }
    return { ...emp };
  });
