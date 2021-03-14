const $createForm = $('#form-flashcard');
const $inputFrontside = $('#InputFrontside');
const $inputBackside = $('#InputBackside');
const $inputCategory = $('#InputCategory');


$createForm.on('submit', (event)=>{
    event.preventDefault();

    const frontval = $inputFrontside.val();
    const backval = $inputBackside.val();
    const categoryval = $inputCategory.val();

    const flashcard = { frontval, backval, categoryval}

    $.ajax({
        url: 'http://localhost:8000/create-flashcard',
        method: 'POST',
        data: flashcard
    }).then(res=>{
        if(res.success){
            alert("Success")
        }
    });
})