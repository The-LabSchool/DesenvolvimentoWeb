// --- CÓDIGO BASE ---
const sensores = [
    { id: 1, nome: "Termômetro A", ativo: true },
    { id: 2, nome: "Barômetro B", ativo: false },
    { id: 3, nome: "Higrômetro C", ativo: false },
    { id: 4, nome: "Termômetro D", ativo: true }
];

// Sua missão: Criar o array sensoresAtivos usando .filter()

const sensoresAtivos = sensores.filter(sensor => sensor.ativo === true);
console.log(sensoresAtivos);