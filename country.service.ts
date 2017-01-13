import { Injectable } from '@angular/core';
import { Country } from './country.model';
import { COUNTRIES } from './countries';
import * as _ from 'lodash';

@Injectable()
export class CountryService {
	constructor() {}

	getCountries(): Country[] {
		return COUNTRIES;
	}

	getNorthAmericanCountries() : Country[] {
		return _.filter(COUNTRIES, (country) => {
			return country.continentName === 'North America';
		});
	}

	getEuropeanCountries() : Country[] {
		return _.filter(COUNTRIES, (country) => {
			return country.continentName === 'Europe';
		});
	}

	getAsianCountries() : Country[] {
		return _.filter(COUNTRIES, (country) => {
			return country.continentName === 'Asia';
		});
	}

	getAfricanCountries() : Country[] {
		return _.filter(COUNTRIES, (country) => {
			return country.continentName === 'Africa';
		});
	}

	// Australia, etc
	getOceaniaCountries() : Country[] {
		return _.filter(COUNTRIES, (country) => {
			return country.continentName === 'Oceania';
		});
	}

	getSouthAmericanCountries() : Country[] {
		return _.filter(COUNTRIES, (country) => {
			return country.continentName === 'South America';
		});
	}

	getAntarticaCountries() : Country[] {
		return _.filter(COUNTRIES, (country) => {
			return country.continentName === 'Antarctica';
		});
	}
}