import { LightningElement } from 'lwc';
import JAZMIN_IMAGE from '@salesforce/resourceUrl/jazmin';

export default class especie_list extends LightningElement {
    species = [
        {
            Id: "1",
            Name: "Jazmín",
            Description__c: "Olorosa y bonita planta trepadora",
            Image_URL__c: JAZMIN_IMAGE,
            Location__c: "Interiores y exteriores"
        },
        {
            Id: "2", 
            Name: "Aloe Vera",
            Description__c: "Conocida por sus propiedades medicinales y para la piel",
            Image_URL__c: JAZMIN_IMAGE, // Usando la misma imagen por ahora
            Location__c: "Exteriores"
        },
        {
            Id: "3",
            Name: "Hierbabuena",
            Description__c: "Aromática usada en la cocina y la medicina popular",
            Image_URL__c: JAZMIN_IMAGE, // Usando la misma imagen por ahora
            Location__c: "Exteriores"
        }
    ];
}
