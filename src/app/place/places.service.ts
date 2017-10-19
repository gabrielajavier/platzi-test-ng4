import {Injectable} from "@angular/core";
@Injectable()
export class PlacesService{
	places = [
		{id:1, name: 'Platzi HQ'},
		{id:1, name: 'Zapatería El Clavo'},
	];
	getPlaces(){
		return this.places;
	}
}