// Install the Java helper library from twilio.com/docs/java/install

import com.twilio.Twilio;
import com.twilio.rest.lookups.v1.PhoneNumber;

import java.util.Arrays;
import java.util.HashMap;

public class Example {
    // Find your Account Sid and Token at twilio.com/console
    // DANGER! This is insecure. See http://twil.io/secure
    public static final String ACCOUNT_SID = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
    public static final String AUTH_TOKEN = "your_auth_token";

    public static void main(String[] args) {
        Twilio.init(ACCOUNT_SID, AUTH_TOKEN);
        PhoneNumber phoneNumber = PhoneNumber.fetcher(
                new com.twilio.type.PhoneNumber("+16502530000"))
            .setAddOns(Arrays.asList("payfone_tcpa_compliance"))
            .setAddOnsData(
                new HashMap<String, Object>()
                {{
                    put("payfone_tcpa_compliance.right_party_contacted_date", 20160101);
                }})
            .setType(Arrays.asList("carrier"))
            .fetch();

        System.out.println(phoneNumber.getAddOns());
    }
}