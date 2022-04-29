
let $comment = $('#addingcomment')

let $commentButton = $('.comment-button')

let $editPin = $('.edit-pin')

let $editDelete = $('.edit-delete')



$editPin.click(()=>{
    $editPin.addClass('hidden')
    $editDelete.removeClass('hidden')

})

$comment.click(()=>{
    $commentButton.removeClass('hidden')
})