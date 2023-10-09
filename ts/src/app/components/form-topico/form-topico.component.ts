import { Component, OnInit } from '@angular/core';
import { HeroBottomComponent } from '../hero-bottom/hero-bottom.component';
import { TopicService } from 'src/app/topic.service';

@Component({
  selector: 'app-form-topico',
  templateUrl: './form-topico.component.html',
})
export class FormTopicoComponent implements OnInit {

  topic: any = {
    subject: '',
    content: '',
  };
  topics: any[] = [];

  constructor(
    public heroBottom: HeroBottomComponent,
    private topicService: TopicService    
    ) { }
  

  ngOnInit(): void {
    this.topics = this.topicService.getAllTopics();
  }

  chamarEnviarForm() {
    this.heroBottom.mostrarEnviarTopico()
    
    this.topicService.addTopic(this.topic);
    this.topics = this.topicService.getAllTopics(); 
    this.topic = {
      subject: '',
      content: '',
    }
  }



}
