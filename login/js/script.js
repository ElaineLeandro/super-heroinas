/**Função de validação do formulário login */
   
document.addEventListener('DOMContentLoaded', function(){
    const form = document.getElementById('loginForm')

    /** Obetém os campos de entrada */
    const emailInput = document.getElementById('email');
    const passwordInput  = document.getElementById('password');
    const emailError = document.getElementById('email-error');
    const passwordError  = document.getElementById('password-error');
    const successMessage = document.getElementById('success-message');

    form.addEventListener('submit', function(event){
        event.preventDefault();
        emailError.textContent = '';
        passwordError.textContent = '';
        successMessage.textContent = '';

        const email = emailInput.value;
        const password = passwordInput.value;
        
        
        if(!isValidEmail(email)){
            emailError.textContent = 'Por favor, insira um e-mail válido.';
            return;
        };

        if(!isValidPassword(password)){
            passwordError.textContent = 'A senha deve conter pelo menos 8 caracteres.'
        }
         
        /** Se todas as validações passarem , exiba uma mensagem de sucesso */
        successMessage.textContent = 'Login bem-sucedido! Agora você pode redirecionar para a próxima página ou executar a lógica de login adequada.'
    });

    function isValidEmail(email){
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email)
    };

    function isValidPassword(password){
        return password.length >= 8
    };
    
})
  
    

