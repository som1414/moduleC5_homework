const resultNode = document.querySelector('.j-result');
const btnNode = document.querySelector('.j-btn-request');
const myJSON = localStorage.getItem('myJSON');
if (myJSON) {
    resultNode.innerHTML = JSON.parse(myJSON);
}

const displayResult = (request) => {
    return fetch(request)
        .then((response) => {
            console.log('response', response);
            return response.json();
        })

        .then((data) => {
            let cards = '';
            data.forEach((item) => {
                const cardBlock = `
                    <div class="card">
                        <img
                        src="${item.download_url}"
                        class="card-image"
                        />
                        <p>${item.author}</p>
                    </div>
                    `;
                cards = cards + cardBlock;
            });
            console.log('request JSON', JSON.stringify(cards));
            localStorage.setItem('myJSON', JSON.stringify(cards));
            return cards;
        })

        .catch(() => {
            console.log('error');
        });
};

btnNode.addEventListener('click', async () => {
    const inpValue1 = document.querySelector('.j-input_1').value;
    const inpValue2 = document.querySelector('.j-input_2').value;
    console.log(inpValue1, inpValue2);
    if (
        (isNaN(inpValue1) && isNaN(inpValue2)) ||
        ((inpValue1 < 1 || inpValue1 > 10) && (inpValue2 < 1 || inpValue2 > 10))
    ) {
        resultNode.innerHTML =
            'Номер страницы и лимит вне диапазона от 1 до 10';
    } else if (inpValue1 < 1 || inpValue1 > 10 || isNaN(inpValue1)) {
        resultNode.innerHTML = 'Номер страницы вне диапазона от 1 до 10';
    } else if (inpValue2 < 1 || inpValue2 > 10 || isNaN(inpValue2)) {
        resultNode.innerHTML = 'Лимит вне диапазона от 1 до 10';
    } else {
        localStorage.clear();
        url = `https://picsum.photos/v2/list?page=${inpValue1}&limit=${inpValue2}`;
        const requestResult = await displayResult(url);
        resultNode.innerHTML = requestResult;
    }
});
