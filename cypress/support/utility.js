export class Utility{
    getBaseUrl(){
        let env =Cypress.env('ENV');
        if(env == 'production')
        return "https://practicetestautomation.com";
        if(env=='staging')
        return "https://practicetestautomation.com/practice-test-login/"
        if(env=='qa')
        return "https://practicetestautomation.com"
    }
}