public with sharing class AccountController {

    @AuraEnabled(cacheable=true)
    public static List<Account> findAccount(String searchKey) {
        string key = '%' + searchKey + '%';
        List<Account> acctList = [SELECT Id, Name ,Type,AccountNumber FROM Account WHERE Name LIKE :key LIMIT 10];
        if(acctList.size()>0){
            return acctList;
        }
        return null;
    }
    @AuraEnabled(cacheable=true)
    public static List<Contact> getContactList(String accountId){
        List<Contact> conList = [SELECT Id, Name, Title, Email, Phone FROM Contact WHERE AccountId =: accountId];
        if(conList.size()>0){
            return conList;
        }
        return null;
    }

    
}
