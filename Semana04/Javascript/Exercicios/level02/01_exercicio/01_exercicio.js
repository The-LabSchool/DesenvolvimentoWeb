const leituras = [
    { id: "S-01", tempCelsius: 25 },
    { id: "S-02", tempCelsius: "ERRO" },
    { id: "S-03", tempCelsius: 30 },
    { id: "S-04", tempCelsius: "ERRO" },
    { id: "S-05", tempCelsius: 22 }
];

// Objetivo final: 
// ["Sensor S-01: 77.0°F", "Sensor S-03: 86.0°F", "Sensor S-05: 71.6°F"]

const painel = leituras
    // 1. Filtra quem NÃO tem erro (usando igualdade estrita)
    .filter(leitura => leitura.tempCelsius !== "ERRO")
    
    // 2. Transforma o objeto numa string já calculada
    .map(leitura => {
        const tempF = (leitura.tempCelsius * 1.8) + 32;
        return `Sensor ${leitura.id}: ${tempF.toFixed(1)}°F`;
    });

console.log(painel);