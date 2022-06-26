const displayResult = (width, hight) => {
    return fetch(`https://picsum.photos/${width}/${hight}`)
        .then((response) => {
            console.log('response', response);
            return response;
        })

        .then((data) => {
            console.log('data', data);
            const cardBlock = `
            <div class="card">
                <img
                    src="${data.url}"
                    class="card-image"
                />
            </div>
        `;
            return cardBlock;
        })

        .catch(() => {
            console.log('error');
        });
};

const resultNode = document.querySelector('.j-result');
const btnNode = document.querySelector('.j-btn-request');

btnNode.addEventListener('click', async () => {
    const inpValue1 = document.querySelector('.j-input_1').value;
    const inpValue2 = document.querySelector('.j-input_2').value;
    console.log(inpValue1, inpValue2);
    if (
        !isNaN(inpValue1) &&
        !isNaN(inpValue2) &&
        inpValue1 >= 100 &&
        inpValue1 <= 300 &&
        inpValue2 >= 100 &&
        inpValue2 <= 300
    ) {
        const requestResult = await displayResult(inpValue1, inpValue2);
        resultNode.innerHTML = requestResult;
    } else {
        alert('«одно из чисел вне диапазона от 100 до 300»');
    }
});
