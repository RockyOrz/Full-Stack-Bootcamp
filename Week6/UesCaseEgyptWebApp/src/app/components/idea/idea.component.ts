import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { GetCityNamesService } from 'src/app/services/get-city-names.service';
import { avoidWord } from '../validators/avoidWord';

@Component({
  selector: 'app-idea',
  templateUrl: './idea.component.html',
  styleUrls: ['./idea.component.css']
})
export class IdeaComponent implements OnInit {
  cities: string[] = [];

  constructor(private cityname: GetCityNamesService, private formBuilder: FormBuilder) {
    this.cities = this.cityname.getNames();
  }

  shareIdeaForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(3), avoidWord(RegExp('tourist'))]],
    email: ['', [Validators.required]],
    targetCity: ['', [Validators.required]],
    description: ['', [Validators.required, Validators.maxLength(1000), avoidWord(RegExp('nothing'))]],
  })

  ngOnInit(): void {
  }

  onSubmit() {
    this.shareIdeaForm.reset();
    return alert('Your idea has been submitted');
  }



}
