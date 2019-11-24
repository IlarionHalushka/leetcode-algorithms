package tasks.algorithms.easy;

import java.util.HashSet;

public class UniqueEmailAddresses_929 {
    public int numUniqueEmails(String[] emails) {
        HashSet<String> uniqueEmails = new HashSet<String>();

        for (int i = 0; i < emails.length; i++) {
            String singleEmail = emails[i].toLowerCase();
            int separatorCount = singleEmail.indexOf("@");

            String localName = singleEmail.substring(0, separatorCount);
            localName = localName.split("\\+")[0];
            localName = localName.replace(".", "");

            String domainName = singleEmail.substring(separatorCount);

            uniqueEmails.add(localName + domainName);
        }


        return uniqueEmails.size();
    }
}
