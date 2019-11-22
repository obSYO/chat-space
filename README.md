## membersテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :groups
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
- has_many :members
- has_many :groups, through: :members


## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false, foreign_key: true|
|message_id|integer|null: false, foreign_key: true|
|user_id|integer|null: false, foreign_key: true|
### Association
- has_many :messages
- has_many :users, through :members
- has_many :members

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


