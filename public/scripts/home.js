const videoCards = document.querySelectorAll('.video-card');
// console.log(videoCards);
videoCards.forEach((videoCard) => videoCard.addEventListener('click', () => {
    window.location.assign(`http://localhost:4500/watch/${videoCard.getAttribute('id')}`)
}) )