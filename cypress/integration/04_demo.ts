beforeEach(() => {

  cy
    .request('POST', '/reset');

  cy
    .server()
    .route('GET', '/api/boards').as('boardList');

});

it('creates board via api', () => {

  cy
    .visit('/');

  cy
    .wait('@boardList')
    .its('responseBody')
    .should('be.empty');

  cy
    .wait(4000);

  cy
    .log('create a new board via api')
    .request('POST', '/api/boards', { name: 'new board' });

  cy
    .log('created board is visible')
    .get('.board_item')
    .should('be.visible')
    .should('have.length', 1);

});