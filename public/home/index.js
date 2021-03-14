const $flipBtn = $('#flipBtn');

function flip() {
    var card = document.querySelector('.card');
    card.classList.toggle('is-flipped');
}

$flipBtn.on('click', () => {
    flip();
})

const $front = $('#front');
const $back = $('#back');

const getRandomFlashcard = async () => {
    const res = await $.ajax({
        type: 'GET',
        url: 'http://localhost:8000/random-flashcard'
    });
    if (res.success) {
        const { frontside, backside, category, _id } = res.data;
        $front.innerHTML = frontside;
        $back.innerHTML = backside;
        idFlashcard = _id;
        categoryFlashcard = category;
    }
}

getRandomFlashcard();

const $nextBtn = $('#nextBtn');
$nextBtn.on('click', () => {
    getRandomFlashcard();
})