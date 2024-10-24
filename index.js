const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

const totalBatteries = batteryBatches.reduce((accumulator, currentValue) => {
    return accumulator + currentValue
}, 0)
const totalBatteryBatches = batteryBatches.length

console.log("Total Batteries:", totalBatteries)
console.log("Total Battery Batches:", totalBatteryBatches)
