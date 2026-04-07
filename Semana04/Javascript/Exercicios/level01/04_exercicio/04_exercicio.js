// --- CÓDIGO BASE ---
const tempFahrenheit = [68, 77, 86, 104];

// Sua missão: Criar o array tempCelsius usando .map()

const tempCelsius = tempFahrenheit.map(temp => ((temp - 32) / 1.8));

console.log(tempCelsius)