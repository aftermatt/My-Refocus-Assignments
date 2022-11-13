const calculateBMI = require("./bmi_calculator");

test ("Checks if 68kg and 165cm is equivalent to 24.98 BMI", () =>{
expect(calculateBMI(68,165)).toBe("24.98");
});