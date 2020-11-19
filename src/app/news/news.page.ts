import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';

@Component({
    selector: 'app-news',
    templateUrl: './news.page.html',
    styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
    news;
    slideOpts = {
        initialSlide: 1,
        speed: 400
    };

    constructor() {
    }

    ngOnInit() {
      this.loadNews();
    }

    /**
     * Load news saved.
     */
    loadNews() {
        firebase.database().ref('news/').on('value', resp => {
            this.news = [];
            this.news = snapshotToArray(resp);
            console.log(this.news);
        });
    }
}

export const snapshotToArray = snapshot => {
    let returnArr = [];

    snapshot.forEach(childSnapshot => {
        let item = childSnapshot.val();
        item.key = childSnapshot.key;
        returnArr.push(item);
    });

    return returnArr;
};
