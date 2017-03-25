# README #

Angular2 Service for retrieving a list of Countries by continents

### How do I get set up? ###

- Import the module:
	- `import { CountryModule } from 'ng2-countries';`
- Add it as an import:
	- `imports: [ CountryModule ]`
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