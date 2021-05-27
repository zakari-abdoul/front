import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import { ServicesUtils } from 'src/app/core/app.service.utils';
import { CustomService } from 'src/app/services/custom/custom.service';
import { ToastrService } from 'ngx-toastr';
// the `default as` syntax.
import { MatDatepicker, MatDatepickerInputEvent } from '@angular/material/datepicker';
import * as moment from 'moment';
import { Chart, registerables } from 'chart.js';
// tslint:disable-next-line:no-duplicate-imports

@Component({
  selector: 'app-detailler',
  templateUrl: './detailler.component.html',
  styleUrls: ['./detailler.component.scss']
})
export class DetaillerComponent implements OnInit {

  @ViewChild('barCanvas', {static: true}) customCanvas: ElementRef;
  private chartRef: Chart;

  countries: any[] = []
  operateurs: any[] = []
  events: string[] = [];
  paramData: any;
  eff : any[] = [];
  attemps : any[] = [];
  datemns : any[] = [];
  checkin = new FormControl('');
  optradio = new FormControl('');
  op = new FormControl('');
  opcode = new FormControl('');
  pays = new FormControl('');
  range = new FormGroup({
    start: new FormControl(moment()),
    end: new FormControl(moment())
  });
  // constructor(private customService: CustomService) { }
  constructor(private customService: CustomService, private toastr: ToastrService) { }

  ngOnInit(): void {
    Chart.register(...registerables);
    this.customService.getCountries().subscribe(res => {
      this.countries = res;
    })
    console.log(this.customCanvas.nativeElement);
    
    // this.createChart()
  }

  ngAfterViewInit(): void {
    this.createChart(this.attemps, this.eff,this.datemns)
  }

  setOperateur(){
    console.log(this.pays.value)
    this.operateurs =[]
    ServicesUtils.listeOperateur.forEach(element => {
      if (element.includes(this.pays.value)) {
        this.operateurs.push(element)
      }
    });
  }

  async getData(){
    const start = moment(this.range.value.start).format("MMM DD, YYYY");
    const end = moment(this.range.value.end).format("MMM DD, YYYY");
    console.log("start : "+start)
    console.log("this.op.value : "+this.op.value)
    console.log("end : "+end)
    if (!this.validateform()) {
      this.toastr.error("Merci de remplir tous les champs")
      return null;
    }
    this.paramData = {
      "roaming" : this.optradio.value, "country_operator" : this.op.value,
      "dateDebut" : start+" 08:00","dateFin" : end+" 08:00"}

    await this.customService.personnaliseData(this.paramData,this.opcode.value).subscribe(async res => {
      console.log(res)
      console.log(res.length)
      // if (res.length == undefined || res.length == 0) {
      //   this.toastr.info("Effectuer une autre recherche avec d'autres paramètres")
      //   return null;
      // }
      this.eff =await ServicesUtils.getChartData(res,"EFF")
      this.attemps = await ServicesUtils.getChartData(res,"Total_Transactions")
      this.datemns = await ServicesUtils.getChartData(res,"date")
    })
    // if (this.eff.length == 0) {
    //   this.toastr.info("Effectuer une autre recherche avec d'autres paramètres")
    //   return null;
    // }
    if (this.chartRef != null) {
      this.chartRef.destroy();
    }
    setTimeout(() => {
      this.createChart(this.attemps, this.eff,this.datemns)
    }, 5000);
    

  }

  validateform = () =>{
    if (this.op.value != '' && this.opcode.value != '' && this.optradio.value != '' ) {
        return true
    }
    return false
  }


  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    this.events.push(`${type}: ${event.value}`);
  }
  
  createChart = (attemps, eff, datemns) =>{
    if (this.chartRef != null) {
      this.chartRef.destroy();
    }
    this.chartRef = new Chart(this.customCanvas.nativeElement, {
      type: 'bar',
      data: {
          datasets: [{
              label: 'Tentative',
              backgroundColor: '#F76304',
              borderColor: 'white',
              data: attemps,
              yAxisID: 'y1',
              borderWidth: 1
          }, {
              label: 'Efficacité',
              data: eff,
              backgroundColor: "#C03737",
              borderColor: 'white',
              borderWidth: 1,
              yAxisID: 'y',
              fill : false,
              // Changes this dataset to become a line
              type: 'line'
          }],
          labels: datemns,
      },
      options: {
        responsive: true,
        interaction: {
          mode: 'index',
          intersect: false,
        },
        plugins: {
          title: {
            display: true,
            text: 'Chart.js Line Chart - Multi Axis'
          }
        },
        scales: {
            y: {
                type:"linear", // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
                display: true,
                // position: 'left',
                position: "left"
            },
            y1: {
                type:"linear", // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
                display: true,
                position: "right",
    
                // grid line settings
                grid: {
                    drawOnChartArea: false, // only want the grid lines for one axis to show up
                },
            },
        }
      }
    });
    this.addChartProperties();
  }

  addChartProperties() {
    Chart.register(...registerables);
    // Chart.register({
    //   beforeDraw: function (chart) {
    //     chart.canvas.parentNode.style.height = '100%';
    //     chart.canvas.parentNode.style.width = '100%';
       
    //   }
    // });
  }
}
