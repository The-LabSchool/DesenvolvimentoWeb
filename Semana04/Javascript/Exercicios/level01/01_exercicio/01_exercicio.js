// --- CÓDIGO BASE (Com problemas) ---
// var crachaRecebido = "1042";
// var idAutorizado = 1042;

// // Se o usuário passar, a porta abre (mas não deveria abrir se os tipos forem diferentes!)
// if (crachaRecebido == idAutorizado) {
//     var status = "Acesso Liberado";
//     console.log(status);
// }


// --- CÓDIGO CORRIGIDO ---

const crachaRecebido = "1042";
const idAutorizado = 1042;

if(crachaRecebido === idAutorizado) {
    const status = "Acesso Liberado";
    console.log(status);
} else {
    const status = "Acesso Negado";
    console.log(status);
}




