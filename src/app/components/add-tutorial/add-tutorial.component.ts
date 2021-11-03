import { Component, OnInit } from '@angular/core';
import { Tutorial } from 'src/app/models/tutorial.model';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-add-tutorial',
  templateUrl: './add-tutorial.component.html',
  styleUrls: ['./add-tutorial.component.css']
})
export class AddTutorialComponent implements OnInit {

  tutorial: Tutorial = new Tutorial();
  submitted: boolean = false;

  constructor(private firestoreService: FirestoreService) { }

  ngOnInit(): void {
    
  }

  saveTutorial(): void {
    this.firestoreService.create(this.tutorial).then(() => {
      console.log('Created new item successfully!');
      this.submitted = true;
    })
  }

  newTutorial(): void {
    this.submitted = false;
    this.tutorial = new Tutorial();
  }
}
