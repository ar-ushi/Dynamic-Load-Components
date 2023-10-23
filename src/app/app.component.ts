import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { CompOne } from './components/comp-one/comp-one.component';
import { CompTwo } from './components/comp-two/comp-two.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  @ViewChild('movieReview', {read: ViewContainerRef})
  container! : ViewContainerRef; 


  createComponent(){
    this.container.clear(); //destroys views
    const movieTitleRef = this.container.createComponent(CompOne);
    const movieReviewRef = this.container.createComponent(CompTwo);
    //compOneRef.instance.Title = 'Fight Club'
    movieTitleRef.setInput('Title', 'Get Out')
  }
  title = 'dynamic-load-comp';
}
