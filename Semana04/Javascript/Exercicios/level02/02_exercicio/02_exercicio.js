const logsAcesso = [
    { usuario: "Igor", horaAcesso: 14, admin: true },
    { usuario: "Yuri", horaAcesso: "19", admin: false },
    { usuario: "João", horaAcesso: 17, admin: false },
    { usuario: "Ana", horaAcesso: "21", admin: true }
];

// Objetivo final: Retornar um array APENAS com os nomes de quem acessou após as 18h.
// Resultado esperado: ["Yuri", "Ana"]


const acessosSuspeitos = logsAcesso
    .filter(log => {
        // Converte a string para número (usando Number ou o atalho +) 
        // e checa se é maior que 18
        const hora = Number(log.horaAcesso); 
        return hora > 18;
    })
    .map(log => log.usuario); // Extrai só o nome

console.log(acessosSuspeitos);