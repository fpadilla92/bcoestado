import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { TransferenciasModel } from '../../model/transferencias';



@Component({
  selector: 'app-transferencia',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule],
  templateUrl: './transferencia.component.html',
  styleUrl: './transferencia.component.css'
})
export class TransferenciaComponent {
  
  Saldo: number = 180000000;
  transferenciaObj:TransferenciasModel = new TransferenciasModel();
  transferenciaForm:FormGroup = new FormGroup({});
  transferenciaList:TransferenciasModel[] = [];

  constructor()
  {
    this.crearFormulario();
    const oldData = localStorage.getItem("dataProd");
    if(oldData!=null)
    {
      const parseData = JSON.parse(oldData);
      this.transferenciaList = parseData;
    }

  }

  crearFormulario()
  {
    this.transferenciaForm = new FormGroup({
      id: new FormControl(this.transferenciaObj.id),
      rut: new FormControl(this.transferenciaObj.rut, [Validators.required]),
      nombre: new FormControl(this.transferenciaObj.nombre, [Validators.required]),
      email: new FormControl(this.transferenciaObj.email),
      monto: new FormControl(this.transferenciaObj.monto, [Validators.required, Validators.minLength(4)])
    });  
  }

  onSave(){
    this.Saldo-this.transferenciaForm.controls['monto'].value;
    const oldData = localStorage.getItem("dataProd");
    if(oldData!=null)
    {
      const parseData = JSON.parse(oldData);
      this.transferenciaForm.controls['id'].setValue(parseData.length+1);
      this.transferenciaList.unshift(this.transferenciaForm.value);
      
    }
    else
    {
      this.transferenciaList.unshift(this.transferenciaForm.value);
    }

  
    localStorage.setItem("dataProd", JSON.stringify(this.transferenciaList));
    this.limpiar();

  }


  onEdit(item:TransferenciasModel)
  {
    this.transferenciaObj=item;
    this.crearFormulario();
  }

  limpiar(){
    this.transferenciaObj=new TransferenciasModel;
    this.crearFormulario();
  }



  onUpdate()
  {
    const registro = this.transferenciaList.find(m=>m.id == this.transferenciaForm.controls['id'].value);
    if(registro != undefined){
      registro.rut = this.transferenciaForm.controls['rut'].value;
      registro.nombre = this.transferenciaForm.controls['nombre'].value;
      registro.email = this.transferenciaForm.controls['email'].value;
      registro.monto = this.transferenciaForm.controls['monto'].value;
    }
    localStorage.setItem("dataProd", JSON.stringify(this.transferenciaList));
    this.limpiar();
  }

  onDelete(id:number){
    const borrar = confirm("¿Está seguro de eliminar este registro?");
    if (borrar) 
      {
      const indice = this.transferenciaList.findIndex(m=>m.id ==id);
      this.transferenciaList.splice(indice,1);
    }
    localStorage.setItem("dataProd", JSON.stringify(this.transferenciaList));
  }


  

}
