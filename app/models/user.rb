class User < ApplicationRecord
    has_secure_password

    enum :role, {
        member: 0,
        operator: 1,
        admin: 2,
    }, default: :member, validate: true, prefix: true

    normalizes :email, with: ->(email) { email.strip.downcase }

    validates :name, presence: true, length: { maximum: 50 }

    validates :email, presence: true, uniqueness: { case_sensitive: false },
               format: { with: URI::MailTo::EMAIL_REGEXP },
               length: { maximum: 255 }

    validates :password, length: { minimum: 10 }, allow_nil: true

end
