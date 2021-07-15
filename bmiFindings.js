exports.bmiFindings = (bmi) => {
    let BMICategory;
    let Risk;
    if(bmi <= 18.4) {
        BMICategory = 'Underweight';
        Risk = 'Malnutrition';
    } else if(bmi >= 18.5 && bmi <= 24.9) {
        BMICategory = 'Normal';
        Risk = 'Low Risk';
    } else if(bmi >= 25 && bmi <= 29.9) {
        BMICategory = 'Overweight';
        Risk = 'Enhanced risk';
    } else if(bmi >= 30 && bmi <= 34.9) {
        BMICategory = 'Moderately obese';
        Risk = 'Medium risk';
    } else if(bmi >= 35 && bmi <= 39.9) {
        BMICategory = 'Severely obese';
        Risk = 'High risk';
    } else {
        BMICategory = 'Very severly obese';
        Risk = 'Very high risk';
    }
    return {BMICategory, Risk};
}