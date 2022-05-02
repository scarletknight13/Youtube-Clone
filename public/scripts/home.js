const videoCards = document.querySelectorAll('.video-card');
// console.log(videoCards);
videoCards.forEach((videoCard) => videoCard.addEventListener('click', () => {
    window.location.assign(`/watch/${videoCard.getAttribute('id')}`)
}) )