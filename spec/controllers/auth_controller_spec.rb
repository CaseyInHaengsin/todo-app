require 'rails_helper'
require 'spec_helper'

describe AuthController, type: :controller do
  context "Getting the right status" do
    user = User.create({login_id:"abc", password:"123"})
    it "generates a JWT" do
      params = { "login_id"=>user.login_id, "password"=>"123" }
      post :login, :params=>params, as: :json
      token = JSON.parse(response.body)['jwt']

      expect { JWT.decode(token, Rails.application.secret_key_base) }.to_not raise_error(JWT::DecodeError)
    end

    it "invalid login doesn't generate the correct JWT" do
      params = { "login_id"=>user.login_id, "password"=>"wrong password" }
      post :login, :params=>params, as: :json
      token = JSON.parse(response.body)['jwt']

      expect(token).to_not eql JWT.encode(user.password, Rails.application.secret_key_base)
    end
  end
end
