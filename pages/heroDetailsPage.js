import { expect } from '@playwright/test';

exports.heroesDetailsPage =  class HeroesDetailsPage{
  constructor(page) {
    this.page = page

  }



  async verifyNewHero(heroName) {
    await expect(this.page.locator('app-hero-detail')).toContainText(heroName.toUpperCase() + ' Details');

  }


  async verifyHeroName(heroName) {
    await expect(this.page.getByPlaceholder('Hero name')).toHaveValue(heroName);

  }

  async editHeroName(editName){
    await this.page.locator("#hero-name").clear();
    await this.page.locator("#hero-name").fill(editName);

  }

  async clickSaveButton() {
    await this.page.getByRole('button', { name: 'save' }).click();
  }


  async clickGoBackButton() {
    await this.page.getByRole('button', { name: 'go back' }).click();
  }


}
