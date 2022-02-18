class AuthController < ApplicationController
  skip_before_action :verify_authenticity_token
  def new
    puts 'new stuff is tight'
  end

  def login
    puts "in login"
    user = User.find_by(login_id: params[:login_id])
    if user&.authenticate(params[:password])
      payload = { user_id: user.id }
      token = encode_token(payload)
      render json: { user: user.login_id, jwt: token }, status: :ok
    else
      render json: { failure: "Invalid username or password" }, status: :unauthorized
    end
  end

  def check_user_login
    if session_user
      render json: session_user
    else
      render json: { errors: "Not logged in" }, status: :unauthorized
    end
  end

  private
  params.require
end
