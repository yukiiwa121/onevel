# frozen_string_literal: true

class AdminPolicy < ApplicationPolicy
    def access?
        user&.role_admin? == true
    end
end
