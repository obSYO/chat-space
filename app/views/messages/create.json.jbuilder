json.content  @message.content
json.image  @message.image
json.user_id  @message.user_id
json.name  @message.user.name
json.date  @message.created_at.strftime("%Y/%m/%d %H:%M")