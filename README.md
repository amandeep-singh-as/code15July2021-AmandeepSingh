RUN Program:
    npm start

For custom data replace "data.json" in root folder.

File structure
    1. bmi.js = Module created to calculating BMI.
    2. bmiFindings.js =  Returns data on based of a persons BMI.
    3. index.js = Main excutable file which contains all the code.
    4. package.json = Package meta data file.
    5. testdata.json = Data set created for testing the code.
    6. data.json = json data with person details to calculate BMI

About:
    This program is create for SSE technical assement for VamStar.
    Takes in input a json file with following fields:
        Gender
        HeightCm
        WeightKg
    And calculates
        BMI based on provided formual
        BMI Category based on BMI returns in which category the person exists
        Risk based on BMI of a person
    
    Returns a table with all the data and total number of people that comes under obese category.