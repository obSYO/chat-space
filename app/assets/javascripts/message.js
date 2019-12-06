$(function(){
  function buildHTML(message){
    var image = (message.image) ? `<img class= "lower-message__image" src="${message.image}" >` : "";
    var html = `<div class="message" data-id= "${message.id}">
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
                    </div>
                    ${image}
                  </div>`
                  return html;
    };

    function ScrollToNewMessage(){
      $('.main__message').animate({scrollTop: $('.main__message')[0].scrollHeight}, 'fast');
    }

  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      type: 'POST',
      url: url,
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
  var reloadMessages = function() {
    if (window.location.href.match(/\/groups\/\d+\/messages/)){
    last_message_id = $(".message:last").data('id');
    $.ajax({
      url: `api/messages`,
      type: 'GET',
      dataType: 'json',
      data: {id: last_message_id}
    })
    .done(function(messages) {
      var insertHTML = '';
      messages.forEach(function(message) {
        insertHTML += buildHTML(message)
        $('.chat-area').animate({ scrollTop: $('.chat-area')[0].scrollHeight});
      });
    $('.chat-area__text').append(insertHTML);
    })
    .fail(function(){
      console.log('error');
    });
  }
  };
  setInterval(reloadMessages, 7000);
});