# README #

Angular Service for retrieving a list of Countries by continents

### How do I get set up? ###

- Import the module:
	- `import { CountryModule } from 'ngx-countries';`
- Add it as an import:
	- `imports: [ CountryModule ]`
- Add import to component
	- `import { SountryService } from 'ngx-countries';`
- Inject it in the constructor of your component:
	- `constructor(private countryService: CountryService) {}`
- Call the methods:
	- `this.countryService.getNorthAmericanCountries();`

### Methods ###
* getNorthAmericanCountries() -
* getEuropeanCountries() -
* getAsianCountries() -
* getAfricanCountries() -
* getOceaniaCountries() - Australia, etc
* getSouthAmericanCountries() -
* getAntarcticaCountries() -


### Contribution guidelines ###

* Code
* Write tests
* Pull Request

### Improvement ideas, general non-sense... ###

* Brant Wellons <Brant@BrantWellons.com>