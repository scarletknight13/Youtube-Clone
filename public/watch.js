
const $comment = $('#addingcomment')

const $commentButton = $('.comment-button')

const $cancelButton = $('.cancel')

const $editPin = $('.edit-pin')

const $editDelete = $('.edit-delete')

const $textarea = $('#addingcomment')

const $commentSection =$('.comments')

const $heart =$('.fa-heart')

const $replyForm=$('.reply-form')

const $reply =$('.reply')

$reply.click(()=>{
    $replyForm.removeClass('hidden')
    $reply.addClass('hidden')
})


$heart.click(()=>{
    $heart.css('color', 'red')
})

$commentSection.hover(()=>{
    $editPin.removeClass('hidden')
})

$editPin.click(()=>{
    $editPin.addClass('hidden')
    $editDelete.removeClass('hidden')

})
  
$comment.click(()=>{
    $commentButton.removeClass('hidden')
    $cancelButton.removeClass('hidden')
})

$cancelButton.click(()=>{
    $textarea.val('')
    $commentButton.addClass('hidden')
    $cancelButton.addClass('hidden')
})
const descriptionGrid = document.querySelector(".video-description-grid");
const description = document.querySelector(".description");
const showMore = document.querySelector(".show-more");
let moreOrLess = "SHOW LESS"
showMore.addEventListener('click', ()=>{
    // description.classList.toggle("toggle-overflow-visibility")
    showMore.innerText = moreOrLess;
    if (moreOrLess === "SHOW LESS") {
        description.style.overflow = "visible";
        descriptionGrid.style.gridTemplateRows = `75px ${description.children[0].offsetHeight}px`;
        moreOrLess = "SHOW MORE";
    } else {
        description.style.overflow = "hidden";
        descriptionGrid.style.gridTemplateRows = `75px 100px`;
        moreOrLess = "SHOW LESS"
    }
})