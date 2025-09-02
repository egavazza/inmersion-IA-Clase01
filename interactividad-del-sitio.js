const nintendoImage = document.getElementById('nintendo-image');

const marioKart = document.querySelector('[data-image="https://www.universalorlando.com/webdata/k2/es/us/files/Images/gds/ueu-super-nintendo-world-mkbc-load-render-a.jpg"]');
const donkeyKong = document.querySelector('[data-image="https://www.universalorlando.com/webdata/k2/es/us/files/Images/gds/ueu-super-nintendo-world-mine-cart-madness-render-a.jpg"]');

marioKart.addEventListener('mouseover', () => {
    nintendoImage.src = marioKart.getAttribute('data-image');
});

donkeyKong.addEventListener('mouseover', () => {
    nintendoImage.src = donkeyKong.getAttribute('data-image');
});

const darkUniverseImage = document.getElementById('dark-universe-image');

const monstersUnchained = document.querySelector('[data-image="https://www.universalorlando.com/webdata/k2/es/us/files/Images/gds/ueu-dark-universe-mutfe-characters-render-a.jpg"]');
const curseOfTheWerewolf = document.querySelector('[data-image="https://www.universalorlando.com/webdata/k2/es/us/files/Images/gds/ueu-dark-universe-curse-of-the-werewolf-interior-render-a.jpg"]');

monstersUnchained.addEventListener('mouseover', () => {
    darkUniverseImage.src = monstersUnchained.getAttribute('data-image');
});

curseOfTheWerewolf.addEventListener('mouseover', () => {
    darkUniverseImage.src = curseOfTheWerewolf.getAttribute('data-image');
});

const celestialParkImage = document.getElementById('celestial-park-image');

const stardustRacers = document.querySelector('[data-image="https://www.universalorlando.com/webdata/k2/es/us/files/Images/gds/ueu-celestial-park-stardust-racers-exterior-front-zoomed-out-a.jpg"]');
const constellationCarousel = document.querySelector('[data-image="https://www.universalorlando.com/webdata/k2/es/us/files/Images/gds/ueu-cp-constellation-carousel-lake-exterior-a.jpg"]');

stardustRacers.addEventListener('mouseover', () => {
    celestialParkImage.src = stardustRacers.getAttribute('data-image');
});

constellationCarousel.addEventListener('mouseover', () => {
    celestialParkImage.src = constellationCarousel.getAttribute('data-image');
});
