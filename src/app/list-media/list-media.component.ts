import {Component, OnInit} from '@angular/core';
import {MediaService} from '../services/media.service';

@Component({
    selector: 'app-list-media',
    templateUrl: './list-media.component.html',
    styleUrls: ['./list-media.component.scss']
})
export class ListMediaComponent implements OnInit {

    tervehdys: string;
    kaikkiMedia: any;
    mediaUrl = 'http://media.mw.metropolia.fi/wbma/uploads/';
    kuvatulos: any;

    constructor(private mediaService: MediaService) {
    }


    ngOnInit() {
        this.tervehdys = this.mediaService.testi;

        this.mediaService.getAllMedia().subscribe(data => {
            this.kaikkiMedia = data;
            console.log(this.kaikkiMedia); // huom täytyy olla subscriben sisällä

        this.kaikkiMedia.map(media => {
                const temp = media.filename.split('.');
                console.log(temp);
                this.kuvatulos = this.mediaUrl + temp[0] + '-tn320.png';
                media.thumbnail = this.kuvatulos;
            });
            console.log(this.kuvatulos);
        });
    }
}
