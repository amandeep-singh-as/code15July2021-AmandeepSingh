const BMI = require('./bmi');
const BMIFindings = require('./bmiFindings');

try{
    data = require('./data.json');
} catch(error) {
    console.info("Error message : " + error.message);
    console.error("Error while loading the data");
    console.info("Add data in a file to root folder with name data.json");
    process.exit(1);
}

function calculateBMI(person) {
    if(person.HeightCm == null || person.WeightKg == null || person.HeightCm == 0 || person.WeightKg == 0) {
        person.Error = "Values can not be null or 0.";
    } 
    else if(isNaN(person.HeightCm) || isNaN(person.WeightKg)) {
        person.Error = "Incorrect data.";
    } 
    else{
        person.BMI = BMI.findBMI(person.HeightCm, person.WeightKg);
        let findings = BMIFindings.bmiFindings(person.BMI);
        person["BMI Category"] = findings.BMICategory;
        person.Risk = findings.Risk;
    }
}   

var obese = 0;
data.forEach(element => {
    calculateBMI(element);
    if(element.Risk.includes('risk')) {
        obese += 1;
    }
});

console.table(data);
console.log("Count of obese : " + obese);