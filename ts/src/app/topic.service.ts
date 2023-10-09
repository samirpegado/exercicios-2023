import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TopicService {
  private topics: any[] = [];

  constructor() {}

  getAllTopics() {
    const storedTopics = localStorage.getItem('topics');
    if (storedTopics) {
      this.topics = JSON.parse(storedTopics);
    }
    return this.topics;
  }

  addTopic(topic: any) {
    this.topics.push(topic);
    localStorage.setItem('topics', JSON.stringify(this.topics));
  }
}
