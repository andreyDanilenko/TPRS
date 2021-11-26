const headerWrapper = document.querySelector('.header__wrapper');
const headerButton = document.querySelector('.header__burger');
const offerItems = document.querySelectorAll('.offer__item');

if (headerWrapper && headerButton) {
    headerButton.addEventListener('click', () => {
        if (!headerWrapper.classList.contains('header__wrapper--opened')) {
            headerWrapper.classList.add('header__wrapper--opened');
            headerWrapper.classList.remove('header__wrapper--closed');

        } else {
            headerWrapper.classList.add('header__wrapper--closed');
            headerWrapper.classList.remove('header__wrapper--opened');
        }
    });
}

if (offerItems) {
    offerItems.forEach((offerItem) => {
        offerItem.addEventListener('click', () => {
            if (!offerItem.classList.contains('offer__item--opened')) {
                offerItem.classList.add('offer__item--opened');
            } else {
                offerItem.classList.remove('offer__item--opened');
            }
        });
    })
}



