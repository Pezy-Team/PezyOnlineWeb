import { Component } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'pezy';
  validatingForm: FormGroup;

  ngOnInit() {
    this.validatingForm = new FormGroup({
      modalFormElegantEmail: new FormControl('', Validators.email),
      modalFormElegantPassword: new FormControl('', Validators.required)
    });
  }

  get modalFormElegantEmail() {
    return this.validatingForm.get('modalFormElegantEmail');
  }

  get modalFormElegantPassword() {
    return this.validatingForm.get('modalFormElegantPassword');
  }

  imagesWithHeading = [
    { img: "assets/img/Logo.png", thumb: "assets/img/Logo.png", description: "Image 1" },
    { img: "htassets/img/Logo.png", thumb: "assets/img/Logo.png", description: "Image 2" },
    { img: "assets/img/Logo.png", thumb: "https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(65).jpg", description: "Image 3" },
    { img: "assets/img/Logo.png", thumb: "https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg", description: "Image 4" },
    { img: "assets/img/Logo.png", thumb: "https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(68).jpg", description: "Image 5" },
    { img: "https://mdbootstrap.com/img/Mockups/Lightbox/Original/img%20(64).jpg", thumb: "https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(64).jpg", description: "Image 6" },
    { img: "https://mdbootstrap.com/img/Mockups/Lightbox/Original/img%20(69).jpg", thumb: "https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(69).jpg", description: "Image 7" },
    { img: "https://mdbootstrap.com/img/Mockups/Lightbox/Original/img%20(59).jpg", thumb: "https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(59).jpg", description: "Image 8" },
    { img: "https://mdbootstrap.com/img/Mockups/Lightbox/Original/img%20(70).jpg", thumb: "https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(70).jpg", description: "Image 9" }
];
}
