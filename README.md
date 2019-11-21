## membersテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :users

## usersテーブル
|Column|Type|Options|
|------|----|-------|
|nickname|string|null: false, foreign_key: true|
|e-mail|string|null: false,|
|password|string|null: false,|
|group_id|integer|null: false, foreign_key: true|
|message_id|integer|null: false, foreign_key: true|


### Association
- has_many :messages
- has many groups through members



## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false, foreign_key: true|
|message_id|integer|null: false, foreign_key: true|
|user_id|integer|null: false, foreign_key: true|

### Association
- has_many :messages
- has many users through members


## messagesテーブル
|Column|Type|Options|
|------|----|-------|
|body|text|null: false|
|image|string|foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
|user_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :users
- belongs_to :groups


