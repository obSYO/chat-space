$(function(){
  function buildHTML(message){
    img = message.image.url === null ? '' : `<img class="lower-message__image" src="${message.image.url}" alt="Img 7587"></img>`;
      var html = `<div class="message">
                    <div class="upper-message">
                    <div class="upper-message__user-name">
                    ${message.name}
                    </div>
                    <div class="upper-message__date">
                    ${message.date}
                    </div>
                    </div>
                    <div class="lower-message">
                    <p class="lower-message__content">
                    ${message.content}
                    </p>
                    ${img}
                    </div>
                  </div>`
    return html
  }
  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this)
    var url = $(this).attr('action')
    $.ajax({
      type: 'POST',
      url: `${url}`,
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false,
    })
    .done(function(message){
      var html = buildHTML(message);
      $('.chat-area__text').append(html);
      $('.chat-area').animate({ scrollTop: $('.chat-area')[0].scrollHeight});
      $('#new_message')[0].reset();
      $('.messageArea__submitbtn').prop('disabled', false);
    })
    .fail(function() {
      alert("メッセージ送信に失敗しました");
      $('.messageArea__submitbtn').prop('disabled', false);
    });
  })
});