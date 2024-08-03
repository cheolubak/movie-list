import { Image } from './Image';

describe('<Image /> Error', () => {
  it('mounts', () => {
    cy.mount(
      <Image
        src=''
        alt=''
        imgHeight={512}
        imgWidth={512}
      />,
    );
    cy.get('img')
      .should('have.attr', 'src')
      .should('include', '/movie-not-found.webp');
  });
});

describe('<Image /> Not Error', () => {
  it('mounts', () => {
    cy.mount(
      <Image
        src='https://yts.mx/assets/images/movies/the_final_attack_on_wembley_2024/large-cover.jpg'
        alt='Test Image'
        imgHeight={512}
        imgWidth={512}
      />,
    );
    cy.get('img')
      .should('have.attr', 'src')
      .should(
        'include',
        'https://yts.mx/assets/images/movies/the_final_attack_on_wembley_2024/large-cover.jpg',
      );
  });
});
