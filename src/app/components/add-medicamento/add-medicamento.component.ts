import { Component, OnInit } from '@angular/core';
import { Medicamento } from 'src/app/models/medicamento';
import { MedicamentoService } from 'src/app/services/medicamento.service';

@Component({
  selector: 'app-add-medicamento',
  templateUrl: './add-medicamento.component.html',
  styleUrls: ['./add-medicamento.component.css']
})
export class AddMedicamentoComponent implements OnInit {

  constructor(private medicamentoService:MedicamentoService) { }

  medicamento: Medicamento = { }

  registraMedicamento(){
    this.medicamentoService.registraMedicamento(this.medicamento).subscribe(
      response => {
        console.log(response.mensaje);
        alert(response.mensaje)
      },
      error =>{
        console.log(error);
      }
    );
  }  

  ngOnInit(): void {
  }

}
