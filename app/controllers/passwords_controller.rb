class PasswordsController < ApplicationController
    def new
        @password = Password.new
    end

    def main
        render 'main'
    end

    def create
        @password = Password.new(password_params)
        @password.save
        redirect_to '/new'
    end

    def lookup
        @passwords = Password.where(:userID => current_user.id).all
    end

    private

  def password_params
      params.require(:password).permit(:userID, :password, :name)
    end
end
