import {Component, OnInit} from '@angular/core';
import {DigitransitService} from '../services/digitransit.service';

@Component({
    selector: 'app-routes',
    templateUrl: './routes.component.html',
    styleUrls: ['./routes.component.scss']
})
export class RoutesComponent implements OnInit {

    pysakkiInfo: any;

    constructor(private digitransitService: DigitransitService) {
    }

    pysakki = 'Ramsinniementie';

    ngOnInit() {
        this.digitransitService.getRoutes(this.pysakki).subscribe(response => {

            console.log(response.data['stops'][0].name); // ei .stops

            this.pysakkiInfo = response.data['stops'];
            this.pysakkiInfo.map(dosari => {
                dosari.name = this.pysakkiInfo[0].name;
                // dosari.longName = this.pysakkiInfo[0].data.patterns.route.longName;
                dosari.longName = this.pysakkiInfo[0].patterns[0].route['longName'];
                dosari.shortName = this.pysakkiInfo[0].patterns[0].route['shortName'];
                dosari.id = this.pysakkiInfo[0].patterns[0].directionId;

                console.log( dosari.longName);
            });

        });

    }

}
