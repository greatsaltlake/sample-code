# Download the helper library from https://www.twilio.com/docs/ruby/install
require 'rubygems'
require 'twilio-ruby'

# Your Account Sid and Auth Token from twilio.com/console
# DANGER! This is insecure. See http://twil.io/secure
account_sid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
auth_token = 'your_auth_token'
@client = Twilio::REST::Client.new(account_sid, auth_token)

document = @client.sync.services('ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                       .documents
                       .create(data: {
                            'date_updated' => '2018-02-14 12:24:31.843662',
                            'movie_title' => 'On The Line',
                            'show_times' => [
                                '12:30:00Z',
                                '14:45:00Z',
                                '15:30:00Z',
                                '17:45:00Z',
                            ],
                            'starring' => [
                                'Lance Bass',
                                'Joey Fatone',
                            ],
                            'genre' => 'Romance'
                        }, ttl: 1814400, unique_name: 'MyFirstDocument')

puts document.sid
