# Download the helper library from https://www.twilio.com/docs/ruby/install
require 'rubygems'
require 'twilio-ruby'

# Your Account Sid and Auth Token from twilio.com/console
# DANGER! This is insecure. See http://twil.io/secure
account_sid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
auth_token = 'your_auth_token'
@client = Twilio::REST::Client.new(account_sid, auth_token)

sync_map_permissions = @client.sync
                              .services('ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                              .sync_maps('Players')
                              .sync_map_permissions
                              .list(limit: 20)

sync_map_permissions.each do |record|
  puts record.service_sid
end
