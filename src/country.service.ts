import 'reflect-metadata';
import { Injectable } from '@angular/core';
import { ICountry } from './definitions/ICountry';
import { COUNTRIES } from './data/countries';
import * as _ from 'lodash';

@Injectable()
export class CountryService {
	constructor() {}

	getCountries(): ICountry[] {
		return COUNTRIES;
	}

	getNorthAmericanCountries() : ICountry[] {
		return _.filter(COUNTRIES, (country: ICountry) => {
			return country.continentName === 'North America';
		});
	}

	getEuropeanCountries() : ICountry[] {
		return _.filter(COUNTRIES, (country: ICountry) => {
			return country.continentName === 'Europe';
		});
	}

	getAsianCountries() : ICountry[] {
		return _.filter(COUNTRIES, (country: ICountry) => {
			return country.continentName === 'Asia';
		});
	}

	getAfricanCountries() : ICountry[] {
		return _.filter(COUNTRIES, (country: ICountry) => {
			return country.continentName === 'Africa';
		});
	}
	
	getOceaniaCountries() : ICountry[] {
		return _.filter(COUNTRIES, (country: ICountry) => {
			return country.continentName === 'Oceania';
		});
	}

	getSouthAmericanCountries() : ICountry[] {
		return _.filter(COUNTRIES, (country: ICountry) => {
			return country.continentName === 'South America';
		});
	}

	getAntarcticaCountries() : ICountry[] {
		return _.filter(COUNTRIES, (country: ICountry) => {
			return country.continentName === 'Antarctica';
		});
	}
}