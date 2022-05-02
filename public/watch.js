
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

