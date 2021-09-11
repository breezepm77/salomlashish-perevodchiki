const elTitle = document.getElementById('title')
const elSelect = document.getElementById('select')
const elForm = document.getElementById('form')
const elButton = document.getElementById('button')

elForm.addEventListener('submit',function (e) {
    e.preventDefault()

    if(elSelect.value == 'Arabcha'){
     elTitle.textContent = 'اهلا كيف الحال';
    }else if(elSelect.value == 'Inglizcha'){
        elTitle.textContent = 'Hello, how are you doing';
    }else if(elSelect.value == 'Turkcha'){
        elTitle.textContent = 'Merhaba, ne yapıyorsun';
    }else if(elSelect.value == 'Ruscha'){
        elTitle.textContent = 'Здравствуйте, как дела';
    }else if(elSelect.value == "O'zbekcha"){
        elTitle.textContent = 'Assaslomu alekum, qandaysiz';
    }
})
