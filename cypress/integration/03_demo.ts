/// <reference types="cypress" />

it('opens the app', () => {

  cy
    .visit('/');

  cy
    .contains('Create a board')
    .click();

  cy
    .get('.board_addBoard')
    .type('new board{enter}');

});