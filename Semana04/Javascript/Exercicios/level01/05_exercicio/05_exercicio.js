// --- CÓDIGO BASE ---
const usuarios = [
    { nome: "Ana", admin: true, email: "ana@visia.com" },
    { nome: "Bruno", admin: false, email: "bruno@visia.com" },
    { nome: "Carlos", admin: true, email: "carlos@visia.com" }
];

// O resultado esperado deve ser: ["ana@visia.com", "carlos@visia.com"]

const adminEmails = usuarios.filter(usuario => usuario.admin).map(usuario => usuario.email);

console.log(adminEmails);