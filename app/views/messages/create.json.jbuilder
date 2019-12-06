json.content  @message.content
json.image  @message.image.url
json.user_id  @message.user_id
json.name  @message.user.name
json.id  @message.id
# json.last_message_id  @message:last
json.date  @message.created_at.strftime("%Y/%m/%d %H:%M")