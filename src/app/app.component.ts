import { Component, ComponentRef, ViewChild, ViewContainerRef } from '@angular/core';
import { CompOne } from './components/comp-one/comp-one.component';
import { CompTwo } from './components/comp-two/comp-two.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  movieSetRef: ComponentRef<CompOne> | undefined;
  isSubmit : boolean = true;
  @ViewChild('movieReview', {read: ViewContainerRef}) container! : ViewContainerRef; 
  //@ViewChild(CompOne) movieTitleComponent!: CompOne;
  
  createComponent(){
    this.container.clear(); //destroys views
    this.movieSetRef = this.container.createComponent(CompOne);
  }

  submit(){
    if (this.movieSetRef?.instance.Title && this.movieSetRef.instance.Review){
      this.container.clear();
      const movieGetRef = this.container.createComponent(CompTwo);
      movieGetRef.setInput('Title', this.movieSetRef.instance.Title);
      movieGetRef.setInput('Review', this.movieSetRef.instance.Review)
    }
    this.isSubmit = false;
  }

  refresh(){
    this.container.clear();
    this.movieSetRef = this.container.createComponent(CompOne);
    this.isSubmit = true;
  }

}
