import { FormControl, FormGroup } from '@angular/forms';
export class ValidateForm {

    validarCampos(form: FormGroup){
        Object.keys(form.controls).forEach(campo => {      
            let control = form.get(campo);
            control.markAsDirty();      
            if(control instanceof FormGroup){        
            this.validarCampos(control);
            }
        });  
    }

    private invalido(campo:FormControl){
        return !campo.valid && (campo.touched || campo.dirty);
    }
    private valido(campo:FormControl){
        return campo.valid && (campo.touched || campo.dirty);
    }
    validarCampo(campo:FormControl){        
        return {'is-invalid': this.invalido(campo), 'is-valid': this.valido(campo)};
    } 
}
