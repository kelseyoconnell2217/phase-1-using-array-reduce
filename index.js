const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

const totalBatteries = batteryBatches.reduce(total, 0)

function total(acc, element){
    acc = acc + element
    return acc
}