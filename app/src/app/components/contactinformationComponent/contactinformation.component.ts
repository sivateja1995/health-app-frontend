/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';

/*
Client Service import Example:
import { servicename } from 'app/sd-services/servicename';
*/

/*
Legacy Service import Example :
import { HeroService } from '../../services/hero/hero.service';
*/

@Component({
    selector: 'bh-contactinformation',
    templateUrl: './contactinformation.template.html'
})

export class contactinformationComponent extends NBaseComponent implements OnInit {
    validclick:Boolean; // For Form validaton
    emailvalidation:Boolean;// For Email validation
    constructor() {
        super();
    }

    ngOnInit() {

    }

    /**
     * Function Name: onBlurEmail
     * Input: Email
     * Output: Boolean true or false
     * 
     */
    onBlurEmail(email){
        if(email) 
            {
                var EmailId = email.toString().toLowerCase();
            }
            this.emailvalidation = false; // default we keep as false once the email is found in database records we make it to true
            var regexp = new RegExp('([A-Za-z]|[0-9])[A-Za-z0-9.]+[A-Za-z0-9]@((?:[-a-z0-9]+\.)+[a-z]{2,})');
            if(regexp.test(EmailId)){
                console.log(EmailId)
            }
    }


    /**
     * Function name: contactSubmit
     * @Input: JSON data {Email, phone,Companyname,IngredIon Contact }
     * @Output:JSON data { response 201 / error}
     * @Desc: This function collects the data from user and posts into Information Collection db
     * @error: 500 Internal server error / 404 - method not found
     */
    contactSubmit(data){
        this.validclick=true;
        console.log(data.value);
          if(data.valid === true){
                this.validclick = false;
        }
    }

    
    navigatePrev() {
        alert('I am navigating to previous page');
    }


}   