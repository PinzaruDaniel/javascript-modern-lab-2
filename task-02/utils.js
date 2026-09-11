export const calculateSum = (numbers) => {
  if (!Array.isArray(numbers) || numbers.length === 0) return 0;
  return numbers.reduce((acc, curr) => acc + curr, 0);
};

export const calculateAverage = (numbers) => {
  if (!Array.isArray(numbers) || numbers.length === 0) return 0;
  const sum = calculateSum(numbers);
  return sum / numbers.length;
};
