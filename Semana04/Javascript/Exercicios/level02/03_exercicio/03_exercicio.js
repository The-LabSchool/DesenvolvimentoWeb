const usuariosBanco = [
    { id: 1, nome: "Carlos", admin: false },
    { id: 2, nome: "Maria", admin: false }
];

// O código ruim do estagiário (Muda o array original!):
// usuariosBanco[1].admin = true;

const usuariosAtualizados = usuariosBanco.map(usuario => {
    // Se for a Maria, criamos um NOVO objeto com os dados dela, mas admin true
    if (usuario.nome === "Maria") {
        return { 
            id: usuario.id, 
            nome: usuario.nome, 
            admin: true 
        };
    }
    // Se não for a Mariz'
    return usuario;
});

console.log("Array Novo (Maria admin):", usuariosAtualizados);
console.log("Banco Original (Intacto):", usuariosBanco);