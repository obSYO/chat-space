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
|password|null: false,|


