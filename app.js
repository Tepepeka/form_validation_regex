let form = document.querySelector('#loginForm');

//Ecouter la modification de l'email
form.email.addEventListener('change', function() {
    validEmail(this);
});

//Ecouter la modification du password
form.password.addEventListener('change', function() {
    validPassword(this);
});

//Ecouter le submit du formulaire
form.addEventListener('submit', function(e) {
    e.preventDefault();
    if (validEmail(form.email) && validPassword(form.password)) {
        form.submit();
    } 
});


//################# Validation email #################
const validEmail = function(inputEmail) {
    //Creation de ala reg exp pour la validation email
    let emailRegExp = new RegExp(
        '^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$',
        'g'
    );
    

    //Recuperation de la balise small
    let small = inputEmail.nextElementSibling;

    //Test du regex
    if(emailRegExp.test(inputEmail.value) === true) {
        small.innerHTML = 'adress valid';
        small.classList.remove('text-danger');
        small.classList.add('text-success');
        return true;
    } else {
        small.innerHTML = 'adress not valid';
        small.classList.remove('text-success');
        small.classList.add('text-danger');
        return false;
    }
};


//################# Validation password #################
const validPassword = function(inputPassword) {
    let msg;
    let valid = false;
    // lenght = mini 3
    if (inputPassword.value.length < 3){
        msg = 'lenght = 3mini';
    }
    // 1 MAJ mini
    else if (!/[A-Z]/.test(inputPassword.value)) {
        msg = '1 MAJ mini';
    }
    // 1 MIN mini
    else if (!/[a-z]/.test(inputPassword.value)) {
        msg = '1 min mini';
    }
    // 1 number mini
    else if (!/[0-9]/.test(inputPassword.value)) {
        msg = '1 number mini';
    }

    //Password valid
    else {
        msg = 'password valid';
        valid = true;
    }

    //Affichage

    //Recuperation de la balise small
    let small = inputPassword.nextElementSibling;

    //Test du regex
    if (valid === true) {
        small.innerHTML = 'password valid';
        small.classList.remove('text-danger');
        small.classList.add('text-success');
        return true;
    } else {
        small.innerHTML = msg;
        small.classList.remove('text-success');
        small.classList.add('text-danger');
        return false;
    }

};