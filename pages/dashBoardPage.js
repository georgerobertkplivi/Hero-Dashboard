import { expect } from '@playwright/test';

import {BasePage} from "./basePage";

exports.dashBoardPage = class DashboardPage extends BasePage {

  constructor(page) {
    super(BasePage);
    this.page = page

  }


  async searchHero(hero) {
    await this.page.getByLabel('Hero Search').fill(hero);
  }

  async clickOnSearchHero(hero) {
    await this.page.locator('#search-component').getByRole('link', { name: hero }).click();
  }

  async verifySearchedHero(hero) {
    await expect(this.page.getByRole('listitem')).toContainText(hero);
  }


}
