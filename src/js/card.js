import cardsData from '../json/cards.json';

document.addEventListener('DOMContentLoaded', () => {
    const cardContainer = document.querySelector('.card__items');

    cardsData.cards.forEach(card => {
        const cardItem = document.createElement('div');
        cardItem.classList.add('card__item');

        cardItem.innerHTML = `
            <div class="card__img">
                <img src="${card.imgSrc}" alt="">
            </div>
            <div class="card__name">${card.name}</div>
            <p class="card__text">${card.text}</p>
            <div class="card__order">
                <div class="card__buy">
                <div class="card__price-from">
                    от
                </div>
                <div class="card__price-currency">
                    <div class="card__price">${card.price}</div>
                    <div class="card__currency">
                    <span>${card.currency.rub}</span>
                    ${card.currency.period}
                    </div>
                </div>
                </div>
                <a href="${card.link}" target="_blank"
                    class="card__btn btn">Узнать подробнее
                </a>
            </div>
        `;

        cardContainer.appendChild(cardItem);


        // Убираем слово "от" если цена = 0
        const priceMore = card.price;
        const cardFrom = cardItem.querySelector('.card__price-from')

        if (priceMore === 0) {
            cardFrom.classList.add('price-from--off');
        }

    });
});