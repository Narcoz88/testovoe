// меняем отображение бегунка
const rangeInputs = document.querySelectorAll('input[type="range"]');

function handleInputChange(e) {
    let target = e.target;
    if (e.target.type !== 'range') {
        target = document.getElementById('range')
    }
    const min = target.min;
    const max = target.max;
    const val = target.value;

    target.style.backgroundSize = (val - min) * 100 / (max - min) + '% 100%';
}

rangeInputs.forEach(input => {
    input.addEventListener('input', handleInputChange)
});


// Выводим название документа в кнопку "Прикрепить файл"
const file = document.querySelector('.input-file input[type=file]');
const handleFileChange = (e) => {
    let target = e.target.files[0].name;
    file.nextElementSibling.innerHTML = target;
};
file.addEventListener('change', handleFileChange);