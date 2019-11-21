## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user

## userテーブル

|Column|Type|Options|
|------|----|-------|
|message|text|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
|name|string|null: false, foreign_key: true|
|e-mail|string|null: false,|
|password|string|null: false,|

### Association
- belongs_to :groups
- has_many :messages


## groupテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false, foreign_key: true|
### Association
- has_many :users

## messageテーブル
|Column|Type|Options|
|------|----|-------|
|body|text|null: false|
|image|string|foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
|user_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :user
- belongs_to :group


