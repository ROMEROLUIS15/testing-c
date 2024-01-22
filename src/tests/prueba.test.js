// const multiply = (a,b) => {
//     return a * b
// }

//multiply
const multiply = (a,b) => a * b

test('multiply(2,2) this must return 4', () => {
  const result = multiply(2,2)
  expect(result).toBe(4)
})

// average
const average = (num1, num2, num3) => {
    return (num1 + num2 + num3)/3;
}

test('average(5,10,15) this must return 10', () => {
    const result = average(5,10,15)
    expect(result).toBe(10)
})

//sum
const sum = (sum1, sum2) => {
  return sum1 + sum2
}

test('sum(15,15) this must return 30', () => {
  const result = sum(15,15)
expect(result).toBe(30)
})

//convert
const convert = (celsius) => {
  return (celsius * (9/5)) + 32
}

test('convert(20) must return 68', () => {
  const result = convert(20)
  expect(result).toBe(68)
})