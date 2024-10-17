function validarUsuario(nome, idade) {
    if (nome.trim() === "" || idade === "") {
        return "Nome e idade são obrigatórios.";
    }
    if (isNaN(idade) || idade <= 0) {
        return "Idade deve ser um número positivo.";
    }
    if (idade < 18) {
        return "Usuário deve ser maior de 18 anos.";
    }
    return null;
}

function salvarUsuario(nome, idade) {
    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    usuarios.push({ nome, idade });
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
}

function carregarUsuarios() {
    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    const listaUsuarios = document.getElementById("listaUsuarios");
    listaUsuarios.innerHTML = "";
    usuarios.forEach(usuario => {
        const li = document.createElement("li");
        li.textContent = `${usuario.nome}, ${usuario.idade} anos`;
        listaUsuarios.appendChild(li);
    });
}

document.getElementById("userForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const nome = document.getElementById("nome").value;
    const idade = parseInt(document.getElementById("idade").value);

    const mensagemErro = validarUsuario(nome, idade);
    if (mensagemErro) {
        document.getElementById("mensagem").textContent = mensagemErro;
        return;
    }

    salvarUsuario(nome, idade);
    document.getElementById("mensagem").textContent = "Usuário cadastrado com sucesso!";
    
    document.getElementById("userForm").reset();
    carregarUsuarios();
});

carregarUsuarios();
