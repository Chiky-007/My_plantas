import { LightningElement, api } from 'lwc';
import {NavigationMixin} from 'lightning/navigation';

export default class Explorador extends NavigationMixin(LightningElement) {
    @api specie;

    connectedCallback() {
        console.log('Explorador component loaded');
    }

    renderedCallback() {
        // Agregar listener después de que el template esté renderizado
        if (this.template && !this._listenerAdded) {
            this.template.addEventListener('click', this.globalClickHandler.bind(this));
            this._listenerAdded = true;
        }
    }

    globalClickHandler(event) {
        if (event.target.dataset.id === 'detail-button') {
            this.navigateToRecordViewPage();
        }
    }

    get isOutdoor() {
        return this.specie && this.specie.Location__c && 
               (this.specie.Location__c.includes('Exteriores') || this.specie.Location__c.includes('Outdoors'));
    }
    
    get isIndoor() {
        return this.specie && this.specie.Location__c && 
               (this.specie.Location__c.includes('Interiores') || this.specie.Location__c.includes('Indoors'));
    }

    navigateToRecordViewPage() {
        console.log('=== NAVEGACIÓN DEBUG ===');
        console.log('Specie completa:', this.specie);
        console.log('Nombre de la planta:', this.specie.Name);
        console.log('ID de la planta:', this.specie.Id);
        
        // Mapear nombres a IDs específicos como fallback
        let recordId = this.specie.Id;
        
        // Si no hay ID válido o es muy corto, usar mapeo por nombre
        if (!recordId || recordId.length < 15) {
            console.log('ID no válido, usando mapeo por nombre');
            switch(this.specie.Name) {
                case 'Hierbabuena':
                    recordId = 'a01gL00000GW1e8QAD';
                    break;
                case 'Aloe vera':
                case 'Aloe Vera':
                    recordId = 'a01gL00000D77DOQAZ'; // Usar el ID que tenías antes
                    break;
                case 'Jazmin':
                case 'Jazmín':
                    recordId = 'a01gL00000GVxM1QAL'; // Usar el ID que tenías antes
                    break;
                default:
                    console.log('Planta no reconocida, navegando a lista');
                    recordId = null;
            }
        }
        
        if (recordId) {
            console.log('Navegando al registro:', recordId);
            // Navegar al registro específico
            this[NavigationMixin.Navigate]({
                type: 'standard__recordPage',
                attributes: {
                    recordId: recordId,
                    objectApiName: 'especie__c',
                    actionName: 'view'
                }
            });
        } else {
            console.log('No se pudo determinar ID, navegando a lista');
            // Si no hay ID válido, navegar a la lista
            this[NavigationMixin.Navigate]({
                type: 'standard__objectPage',
                attributes: {
                    objectApiName: 'especie__c',
                    actionName: 'list'
                }
            });
        }
    }
}