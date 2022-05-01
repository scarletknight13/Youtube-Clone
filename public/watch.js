
const $comment = $('#addingcomment')

const $commentButton = $('.comment-button')

const $editPin = $('.edit-pin')

const $editDelete = $('.edit-delete')



$editPin.click(()=>{
    $editPin.addClass('hidden')
    $editDelete.removeClass('hidden')

})

$comment.click(()=>{
    $commentButton.removeClass('hidden')
})