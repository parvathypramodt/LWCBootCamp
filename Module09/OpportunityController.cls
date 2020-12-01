public with sharing class OpportunityController {
    @AuraEnabled(cacheable=true)
    public static List<Opportunity> findOpportunity(String searchKey, string recordId) {
        string key = '%' + searchKey + '%';
        List<Opportunity> opptyList = [SELECT Id, Name, AccountId, CloseDate, Amount FROM Opportunity WHERE Name LIKE :key AND AccountId =: recordId LIMIT 10];
        if(opptyList.size()>0){
            return opptyList;
        }
        return null;
    }
}