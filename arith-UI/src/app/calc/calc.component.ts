import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CalcService } from '../calc.service';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.scss']
})
export class CalcComponent implements OnInit {

  calcForm: FormGroup;
  result: number = 0.0;

  constructor(private fb: FormBuilder, private calcService: CalcService) { }

  ngOnInit() {
    this.calcForm = this.fb.group({
      num1: ['', Validators.required],
      num2: ['', Validators.required],
      op: ['', Validators.required]
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.calcForm.valid) {
      let formModel = this.calcForm.value;
      this.calcService.doArith(formModel.num1, formModel.num2, formModel.op)
        .subscribe((response: any) => {
          this.calcForm.reset();
          this.result = response;
        })
    }
  }

}
