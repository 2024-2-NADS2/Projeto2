// Chamando os elementos necessários para validar os inputs 
const form  = document.getElementById('form')
const input_nome = document.getElementById('input-nome')
const input_sobrenome = document.getElementById('input-sobrenome')
const input_email = document.getElementById('input-email')
const input_senha = document.getElementById('input-senha')
const input_senha_repeat = document.getElementById('input-password-repeat')
const mensagem_erro = document.getElementById('mensagem-erro')

//Verificaçao de eventos
form.addEventListener('submit', (e) => {
    
    let erros = []

    if (input_nome) {
        // Verifica se estamos na página de cadastro
        erros = getCadastroFormErros(
            input_nome.value,
            input_sobrenome.value,
            input_email.value,
            input_senha.value,
            input_senha_repeat.value
        )
    } else {
        // Se não há primeiro nome, assume que é a página de login
        erros = getLoginFormErros(input_email.value, input_senha.value)
    }

    if (erros.length > 0) {
        // Caso haja erros, impede o envio e exibe as mensagens
        e.preventDefault()
        mensagem_erro.innerText = erros.join(". ")
    }
})

// Função para apresentar os erros de validação no cadastro
function getCadastroFormErros(nome, sobrenome, email, senha, repeteSenha) {
    let erros = []

    if (nome === '' || nome == null) {
        erros.push('Digite o seu nome')
        input_nome.parentElement.classList.add('incorreto')
    }
    if (sobrenome === '' || sobrenome == null) {
        erros.push('Digite o seu sobrenome')
        input_sobrenome.parentElement.classList.add('incorreto')
    }
    if (email === '' || email == null) {
        erros.push('Digite o seu email')
        input_email.parentElement.classList.add('incorreto')
    }
    if (senha === '' || senha == null) {
        erros.push('Digite a sua senha')
        input_senha.parentElement.classList.add('incorreto')
    }
    if (senha.length < 8) {
        erros.push('A senha deve ter no mínimo 8 caracteres')
        input_senha.parentElement.classList.add('incorreto')
    }
    if (senha !== repeteSenha) {
        erros.push('As senhas não são iguais')
        input_senha.parentElement.classList.add('incorreto')
        input_senha_repeat.parentElement.classList.add('incorreto')
    }

    return erros
}

// Função para apresentar os erros de validação no login
function getLoginFormErros(email, senha) {
    let erros = []

    if (email === '' || email == null) {
        erros.push('Digite o seu email')
        input_email.parentElement.classList.add('incorreto')
    }
    if (senha === '' || senha == null) {
        erros.push('Digite a sua senha')
        input_senha.parentElement.classList.add('incorreto')
    }

    return erros
}

// Filtro para verificar onde está sem a informação necessária
const allInputs = [input_nome, input_sobrenome, input_email, input_senha, input_senha_repeat].filter(input => input !== null)

allInputs.forEach(input => {
    input.addEventListener('input', () => {
        if (input.parentElement.classList.contains('incorreto')) {
            input.parentElement.classList.remove('incorreto')
        }
        mensagem_erro.innerText = '';
    })
})
