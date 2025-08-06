public with sharing class SpeciesService {
    @AuraEnabled(cacheable=true)
    public static List<especie__c> getAllSpecies() {
        return [
            SELECT Id, Name, Description__c, Image_URL__c, Location__c
            FROM especie__c
        ];
    }
}