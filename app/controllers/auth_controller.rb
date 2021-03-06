class AuthController < ApplicationController
  skip_before_action :verify_authenticity_token

  def new; end
  
  def login
    user = User.find_by(login_id: params[:login_id])
    if user&.authenticate(params[:password])
      payload = { user_id: user.id }
      token = encode_token(payload)
      render json: { user: user.login_id, id: user.id, jwt: token }, status: :ok
    else
      render json: { failure: "Invalid username or password" }, status: :unauthorized
    end
  end
  
  def signup
    @new_user = User.new(login_id: params[:login_id], password: params[:password])
    if @new_user.save
      token = encode_token(user_id: @new_user.id)
      render json: { user: @new_user.login_id, id: @new_user.id, jwt: token }, status: :ok
    else
      render json: { failure: "Failed to create account" }, status: :unauthorized
    end

  end

  def check_user_login
    puts 'in check user login'
    if session_user
      render json: session_user
    else
      render json: { errors: "Not logged in" }, status: :unauthorized
    end
  end

  private
end
