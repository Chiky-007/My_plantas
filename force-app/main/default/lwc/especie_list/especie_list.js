import { LightningElement, wire} from 'lwc';
import JAZMIN_IMAGE from '@salesforce/resourceUrl/jazmin';
import getAllSpecies from '@salesforce/apex/SpeciesService.getAllSpecies';

export default class especie_list extends LightningElement {
    species = [];
    error;

    @wire(getAllSpecies)
    wiredSpecies({ error, data }) {
        if (data && data.length > 0) {
            console.log('Datos reales obtenidos:', data);
            this.species = data;
            this.error = undefined;
        } else {
            console.log('Usando datos simulados con IDs reales');
            // Usar datos simulados con IDs reales conocidos
            this.species = [
                {
                    Id: "a01gL00000XXXXX", // REEMPLAZAR con ID real de Aloe vera
                    Name: "Aloe vera",
                    Description__c: "Conocida por sus propiedades medicinales y para la piel",
                    Image_URL__c: JAZMIN_IMAGE,
                    Location__c: "Exteriores"
                },
                {
                    Id: "a01gL00000GW1e8QAD", // ID real de Hierbabuena (confirmado)
                    Name: "Hierbabuena",
                    Description__c: "Aromática usada en la cocina y la medicina popular",
                    Image_URL__c: JAZMIN_IMAGE,
                    Location__c: "Exteriores"
                },
                {
                    Id: "a01gL00000YYYYY", // REEMPLAZAR con ID real de Jazmin
                    Name: "Jazmin",
                    Description__c: "Olorosa y bonita planta trepadora",
                    Image_URL__c: JAZMIN_IMAGE,
                    Location__c: "Interiores y exteriores"
                }
            ];
            if (error) {
                console.error('Error obteniendo especies:', error);
                this.error = error;
            }
        }
    }
}
