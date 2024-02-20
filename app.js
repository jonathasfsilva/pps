// array para armazenar as tarefas
let tasks = [];

// função para adicionar uma nova tarefa
function addTask() {
    const input = document.getElementById('taskInput');
    const taskText = input.value.trim();
    if (taskText !== '') {
        tasks.push(taskText);
        input.value = '';
        renderTasks();
    }
}

// função para renderizar a lista de tarefas
function renderTasks() {
    const list = document.getElementById('taskList');
    list.innerHTML = '';
    tasks.forEach(task => {
        const li = document.createElement('li');
        li.textContent = task;
        list.appendChild(li);
    });
}

// renderiza as tarefas iniciais
renderTasks();

// registro do service worker para tornar o aplicativo um PWA
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('Service Worker registrado com sucesso:', registration);
            })
            .catch(error => {
                console.error('Erro ao registrar o Service Worker:', error);
            });
    });
}
