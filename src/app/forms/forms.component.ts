import { Component, EventEmitter, Input, Output, SimpleChange, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { TestService } from '../service/test.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent {

  @Input() set testing(data: string) {
    this.testings = data
  }

  @Output() testingChange = new EventEmitter()

  forms: FormGroup | undefined
  test1 = "test1"
  testings = ''
  sub: Subscription | undefined

  constructor(private fb: FormBuilder, private testService: TestService) {
    this.forms = this.fb.group({
      name: null,
      picker: ''
    })
  }

  ngOnChanges(changes: SimpleChange) {
    console.log('inside onhcange',changes)
  }

  ngOnInit() {
    setTimeout(() => {
      console.log('inside child onInit')
      this.testing = "testing"
      this.testingChange.emit('testing')
    }, 2000);
  }

  checkValidty() {
    console.log(this.forms)
  }

  changeToObj() {
    this.forms?.get('name')?.patchValue({})
  }

  changeToString() {
    this.forms?.get('name')?.patchValue('')
  }

  updateToRequiredField() {
    this.forms?.get('name')?.addValidators(Validators.required)
    this.forms?.updateValueAndValidity() //this.wont work because
    this.forms?.get('name')?.updateValueAndValidity() // this is the proper way for adding validator
  }

  removeRequired() {
    this.forms?.get('name')?.removeValidators(Validators.required)
  }

  setValue() {
    const a = 'test'
    this.forms?.get('picker')?.setValue(a === this.test1)
  }

  console() {
    console.log(this)
  }

  addSub() {
    this.sub = this.testService.testSub$.subscribe(data => {
      console.log(data)
    })
  }
}

