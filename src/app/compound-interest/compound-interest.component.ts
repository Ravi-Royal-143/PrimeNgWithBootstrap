import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-compound-interest',
  templateUrl: './compound-interest.component.html',
  styleUrls: ['./compound-interest.component.scss']
})
export class CompoundInterestComponent implements OnInit {

  compoundInt: FormGroup = this.fb.group({
    principal: [],
    interest: [],
    compoundPerYear: [12],
    period: ['']
  });

  tableVal: any = [];
  cols = [];

  totalAmount: number = 0;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.cols = [
      { field: 'index', header: 'மாதம்' },
      { field: 'name', header: 'தொகை' }
    ];
  }

  onSubmit() {
    const { principal, interest, period, compoundPerYear } = this.compoundInt.value;

    const p = principal, i = interest, t = period, n = compoundPerYear;
    const r = i / 100;

    this.totalAmount = this.compoundIntCal(p, n, r, t);
    this.tableVal = [];
    for (let i = 0; i < period; i++) {
      const _t = i + 1;
      this.tableVal.push({
        name: this.compoundIntCal(p, n, r, _t),
        index: _t
      })
    }
  }

  compoundIntCal(p, n, r, t) {
    return p * (Math.pow((1 + r / n), (n * t)));
  }

}
