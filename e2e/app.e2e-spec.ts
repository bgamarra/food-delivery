import { FoodDeliveryPage } from './app.po';

describe('food-delivery App', () => {
  let page: FoodDeliveryPage;

  beforeEach(() => {
    page = new FoodDeliveryPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
