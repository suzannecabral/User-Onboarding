//arrange

describe('My First Test', function(){
    //act
    it('Does not do much', function(){
        //assert
        expect(true).to.equal(true)
    })
})


//describe
describe('My second test', ()=>{
    //arrange
    it('Visits a new site',()=>{
        //act
        cy.visit("index.html")
    })
})