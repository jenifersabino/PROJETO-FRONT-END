// js/validation.js

// Função Auxiliar de DOM para exibir o erro (Requisito: Aviso ao usuário)
function displayError(inputElement, message) {
    let feedback = inputElement.nextElementSibling;
    if (!feedback || !feedback.classList.contains('form-feedback')) {
        feedback = document.createElement('p');
        feedback.classList.add('form-feedback');
        // Usa Template Literals para criar o elemento de feedback (Requisito: Templates JS)
        feedback.innerHTML = `<span style="color:red; font-size: 0.85em;">${message}</span>`;
        inputElement.parentNode.insertBefore(feedback, inputElement.nextSibling);
    } else {
        feedback.querySelector('span').textContent = message;
    }
}

function clearError(inputElement) {
    const feedback = inputElement.nextElementSibling;
    if (feedback && feedback.classList.contains('form-feedback')) {
        feedback.remove();
    }
}

// Lógica de Validação Principal (Requisito: Consistência de Dados)
function validateVolForm(event) {
    event.preventDefault();

    const form = event.target;
    let isValid = true;

    // 1. Validação do Nome (Mínimo 3 caracteres - DOM Manipulation)
    const nameInput = form.querySelector('[name="name"]');
    if (nameInput && nameInput.value.trim().length < 3) {
        displayError(nameInput, 'O nome deve ter no mínimo 3 letras.');
        isValid = false;
    } else if (nameInput) {
        clearError(nameInput);
    }

    // 2. Validação básica de Email
    const emailInput = form.querySelector('[name="email"]');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailInput && !emailRegex.test(emailInput.value)) {
        displayError(emailInput, 'Por favor, insira um e-mail válido.');
        isValid = false;
    } else if (emailInput) {
        clearError(emailInput);
    }

    // 3. Validação do CPF (Se a máscara falhar, valida a estrutura)
    const cpfInput = form.querySelector('[name="cpf"]');
    if (cpfInput) {
        const cleanedCpf = cpfInput.value.replace(/\D/g, '');
        if (cleanedCpf.length !== 11) {
            displayError(cpfInput, 'CPF deve ter 11 dígitos.');
            isValid = false;
        } else {
            clearError(cpfInput);
        }
    }
    
    // Ação Final
    if (isValid) {
        // Simulação de envio
        alert('Formulário de Voluntariado validado e enviado! (Simulado)');
        form.reset();
    }
}

export function initVolValidation() {
    const form = document.getElementById('vol-form');
    if (form) {
        form.addEventListener('submit', validateVolForm);
        console.log("Validação de formulário de voluntariado inicializada.");
    }
}
