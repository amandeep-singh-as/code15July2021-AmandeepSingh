exports.findBMI = (height, weight) => {
    return parseFloat((parseFloat(weight) / Math.pow((parseFloat(height) / 100), 2)).toFixed(2));
};
