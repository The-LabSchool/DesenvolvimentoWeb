// --- CÓDIGO BASE (Padrão antigo) ---
function formatarLeitura(sensor, temperatura) {
    return "O sensor " + sensor + " registrou " + temperatura + " graus.";
}

console.log(formatarLeitura("Alpha", 25));


const formatarLeituraArrow = (sensor, temperatura) => `O sensor ${sensor} registrou ${temperatura} graus.`;

console.log(formatarLeituraArrow("Beta", 19));

