class ApplicationController < ActionController::Base

  def require_login
    render json: { message: "You must log in first" }, status: :unauthorized unless !!session_user
  end

  protected

  def session_user
    decoded_hash = decoded_token
    if decoded_hash.present?
      user_id = decoded_hash[0]['user_id']
      @user = User.find(user_id)
    end
  end

  def encode_token(payload)
    JWT.encode(payload, Rails.application.secret_key_base)
  end

  def auth_header
    request.headers['authorization']
  end

  def decoded_token
    if auth_header
      token = auth_header.split(' ')[1]
      begin
        JWT.decode(
          token,
          Rails.application.secret_key_base,
          true,
          algorithm: 'HS256'
        )
      rescue JWT::DecodeError
        []
      end
    end
  end
end
