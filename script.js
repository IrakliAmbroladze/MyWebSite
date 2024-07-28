(function() {
    function initializeScript() {
        const productContainers = [...document.querySelectorAll('.swiper-container')];
        const nxtBtn = [...document.querySelectorAll('.main-slider-next')];
        const preBtn = [...document.querySelectorAll('.main-slider-prev')];

        productContainers.forEach((item, i) => {
            let containerDimensions = item.getBoundingClientRect();
            let containerWidth = containerDimensions.width;

            nxtBtn[i].addEventListener('click', () => {
                item.scrollLeft += containerWidth/3;
            });

            preBtn[i].addEventListener('click', () => {
                item.scrollLeft -= containerWidth/3;
            });
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeScript);
    } else {
        initializeScript();
    }
})();
