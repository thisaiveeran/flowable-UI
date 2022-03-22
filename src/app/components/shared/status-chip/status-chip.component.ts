import { Component, Input, OnInit } from '@angular/core';
import { TestStatues, VaccineStatuses } from 'src/app/consts/appconsts';

@Component({
  selector: 'app-status-chip',
  templateUrl: './status-chip.component.html',
  styleUrls: ['./status-chip.component.scss']
})
export class StatusChipComponent implements OnInit {

  @Input() statusText?: string;
  @Input() statusCode?: string;
  @Input() style?: string;
  @Input() type?: string;
  customClass?: string;
  text?: string;

  constructor() { }

  ngOnInit(): void {

    if(this.statusText == null){
      this.text='';
      this.customClass ="transparent-chip";
      
    }else{
   // if(this.type == undefined)
      //this.checkStatus();
      this.styleStatus();
    }
    //else if(this.type == "T"){
      //this.checkTestStatus();
    //}
  }



  checkStatus(): void {
    switch (this.statusText){
      case 'UNVERIFIED':
        this.text = "Unverified";
        this.style = "warn";
        break;
      case 'INPROGRESS':
        this.text = "Under Review";
        //this.style = "primary";
        this.customClass = "success-chip"
        break;
      case 'VERIFIED':
          this.text = "Verified";
          //this.style = "primary";
          this.customClass = "success-chip"
          break;
      case 'NEGATIVE':
            this.text = "Negative";
            this.customClass = "success-chip"
            break;
     case 'POSITIVE':
              this.text = "Positive";
              this.customClass = ""
              this.style="warn";
              break;
      case 'NOTNEEDED':
              this.text = "Not Needed - Vaccinated";
              this.customClass = "success-chip"
              break;
      case '':
          this.text='';
          this.customClass ="transparent-chip";
          break;
      case null || undefined:
        this.text='';
        this.customClass ="transparent-chip";
        break;
      default:
        this.text = "Unverified";
        this.style = "warn";

    }
  }

  styleStatus(): void {
    this.text = this.statusText;
    switch (this.statusCode){
      case VaccineStatuses.VAC_STATUS_UNVERIFIED:
        
        this.style = "warn";
        break;
      case VaccineStatuses.VAC_STATUS_UNDERREVIEW:
        
        this.customClass = "inprogress-chip";
        break;
      case VaccineStatuses.VAC_STATUS_APPROVED:
          
          this.customClass = "success-chip";
          break;
      case VaccineStatuses.VAC_STATUS_BOOSTER:
          this.customClass = "success-chip";
            break;
      case VaccineStatuses.VAC_STATUS_REJECTED:
            this.style = "warn";
            break;
      case TestStatues.TST_STATUS_UNVERIFIED:
          this.style = "warn";
          break;
      case TestStatues.TST_STATUS_REJECTED:
        this.style = "warn";
        break;
      case TestStatues.TST_STATUS_UNDERREVIEW:
        this.customClass = "inprogress-chip";
        break;
      case TestStatues.TST_STATUS_APPROVED:
        this.customClass = "success-chip";
            break;
      case TestStatues.TST_STATUS_VACCINATED:
              this.customClass = "success-chip";
                  break;
        
      default:
        this.text = "Unverified";
        this.style = "warn";

    }
  }


}
