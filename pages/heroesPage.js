import { expect } from '@playwright/test';
import {BasePage} from "./basePage";

exports.HeroesPage =  class HeroesPage extends BasePage{
  constructor(page) {
    super(page);
    this.page = page

  }

  async fillHeroName(name) {
    await this.page.locator("input[id='new-hero']").click();
    await this.page.locator("input[id='new-hero']").fill(name);
  }



  async clickAddHeroButton() {
    await this.page.getByRole('button', { name: 'Add hero' }).click();
  }

  async verifyNewHero(heroName) {
    await expect(this.page.getByRole('list')).toContainText(heroName);

  }

  async openHero(heroName) {
    await this.page.getByRole('link', { name: heroName }).click();

  }

  async createHero(heroName) {
    await this.fillHeroName(heroName);
    await this.clickAddHeroButton()

  }


}
