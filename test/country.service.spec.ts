import { CountryService } from '../src/country.service';
import { } from 'jasmine';

describe('AppComponent', () => {
    let countryService: CountryService;

    beforeEach(() => {
        countryService = new CountryService();
    });

    it('#getNorthAmericanCountries returns the list of all NA countries', () => {
        expect(countryService.getNorthAmericanCountries().length).toEqual(41);
    });

    it('#getEuropeanCountries returns the list of all European countries', () => {
        expect(countryService.getEuropeanCountries().length).toEqual(53);
    });

    it('#getAsianCountries returns the list of all Asian countries', () => {
        expect(countryService.getAsianCountries().length).toEqual(52);
    });

    it('#getAfricanCountries returns the list of all African countries', () => {
        expect(countryService.getAfricanCountries().length).toEqual(58);
    });

    it('#getOceaniaCountries returns the list of all Oceanic countries', () => {
        expect(countryService.getOceaniaCountries().length).toEqual(27);
    });

    it('#getSouthAmericanCountries returns the list of all SA countries', () => {
        expect(countryService.getSouthAmericanCountries().length).toEqual(14);
    });

    it('#getAntarcticaCountries returns the list of all Antartica countries', () => {
        expect(countryService.getAntarcticaCountries().length).toEqual(5);
    });

});
