class ApplicationController < ActionController::Base
  protected

  def session_user
    decoded_hash = decoded_token
    if decoded_hash.present?
      user_id = decoded_hash[0]['user_id']
      @user = User.find(user_id)
    end
  end

  def encode_token(payload)
    JWT.encode(payload, Rails.application.credentials.secret_key_base)
  end

  def decoded_token
    if request.headers['authorization']
      token = auth_header.split(' ')[1]
      begin
        JWT.decode(
          token,
          Rails.application.credentials.secret_key_base,
          true,
          algorithm: 'HS256'
        )
      rescue JWT::DecodeError
        []
      end
    end
  end
end
