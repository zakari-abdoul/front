import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ServicesUtils } from 'src/app/core/app.service.utils';
import { CustomService } from 'src/app/services/custom/custom.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild('modal', {static: true}) modal: ElementRef;
  bound = new FormControl('');
  opcode = new FormControl('');
  filename = '';
  file:File
  paramData: { roaming: FormControl; country_operator: any; dateDebut: any; };
  
  constructor(private custonService : CustomService, private toastr: ToastrService ) { }

  ngOnInit(): void {
    this.custonService.getStats().subscribe(res => {
      //this.data = res;
      console.log(res);
    }, err => {
      console.log(err);
    });
  }


  async upload(){

    if (!this.validateform()) {
      this.toastr.error("Merci de remplir tous les champs")
      return null;
    }
    const formData = new FormData();
    formData.append('file', this.file);
    formData.append('bound', this.bound.value);
  
    console.log(formData);
    
    await this.custonService.uploadFile(formData,this.opcode.value).subscribe(res => {
      console.log(res)
    })
    
  }

  onFileSelected(event){
    this.file = event.target.files[0];
    this.filename = this.file.name;

  }

  validateform = () =>{
    if (this.bound.value != '' && this.opcode.value != '' && this.file ) {
        return true
    }
    return false
  }

}
