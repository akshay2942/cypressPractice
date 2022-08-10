describe('window',()=>{
    it('verify the location property of window',()=>{
        cy.visit('https://automationteststore.com/')
        cy.window().then(function(wind){
           // cy.log(wind.location)
          
            expect(wind.location.href).to.eq('https://automationteststore.com/')
            expect(wind.location.host).to.eq('automationteststore.com')
            expect(wind.location.pathname).to.eq('/')
            expect(wind.location.protocol).to.eq('https:')
        })
    })
    it('TC 02verify the location property of window reload',()=>{
        cy.visit('https://automationteststore.com/')
        cy.window().then(function(wind){
           // cy.log(wind.location)
         wind.location.reload()
        })
    })
    it('TC 03 verify the location property of window reload',()=>{
        cy.visit('https://automationteststore.com/')
        cy.get('a[class="active menu_home"]').click()
       
 
    })
    })