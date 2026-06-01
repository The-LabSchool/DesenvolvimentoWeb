// ---------------------------------------------------------------------------
// Funções de comunicação com o backend
// Cada função deve:
//   1. Fazer a requisição correta para o backend
//   2. Tratar a resposta
//   3. Atualizar o elemento de resultado na página
// ---------------------------------------------------------------------------

async function getAllTeachers() {
  let request = await fetch("/names");
  let json = await request.json();
  let names = json.names;

  let generated_list = "";

  for (let i = 0; i < names.length; i++) {
    generated_list += `<li>${names[i]}</li>`;
  }

  let list = document.getElementById("teachers-list");
  list.innerHTML = generated_list;
}

async function getAllClasses() {
  // TODO: buscar todas as aulas e exibir na lista #classes-list
}

async function getTeacherIdByName(name) {
  // TODO: buscar o ID do professor pelo nome e exibir em #result-id-by-name
}

async function getClassesByTeacherId(id) {
  // TODO: buscar as aulas pelo ID do professor e exibir em #classes-by-id-list
}

async function getClassesByTeacherName(name) {
  // TODO: buscar as aulas pelo nome do professor e exibir em #classes-by-name-list
}

async function addTeacher(name, classes) {
  // TODO: enviar um novo professor via POST e exibir o resultado em #result-add
}

async function deleteTeacher(id) {
  // TODO: deletar o professor pelo ID e exibir o resultado em #result-delete
}

// ---------------------------------------------------------------------------
// Event listeners — conectam os botões às funções acima
// ---------------------------------------------------------------------------

document.getElementById('btn-load-teachers').addEventListener('click', () => {
  getAllTeachers();
});

document.getElementById('btn-load-classes').addEventListener('click', () => {
  getAllClasses();
});

document.getElementById('btn-search-by-name').addEventListener('click', () => {
  const name = document.getElementById('input-name-search').value.trim();
  if (name) getTeacherIdByName(name);
});

document.getElementById('btn-classes-by-id').addEventListener('click', () => {
  const id = document.getElementById('input-id-classes').value;
  if (id !== '') getClassesByTeacherId(Number(id));
});

document.getElementById('btn-classes-by-name').addEventListener('click', () => {
  const name = document.getElementById('input-name-classes').value.trim();
  if (name) getClassesByTeacherName(name);
});

document.getElementById('btn-add-teacher').addEventListener('click', () => {
  const name    = document.getElementById('input-new-name').value.trim();
  const classes = document.getElementById('input-new-classes').value.trim();
  if (name && classes) addTeacher(name, classes);
});

document.getElementById('btn-delete-teacher').addEventListener('click', () => {
  const id = document.getElementById('input-delete-id').value;
  if (id !== '') deleteTeacher(Number(id));
});
