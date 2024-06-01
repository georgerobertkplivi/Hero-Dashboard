import {test} from "@playwright/test";
import {faker} from '@faker-js/faker';


import {dashBoardPage} from "../pages/dashBoardPage";
import  {heroesDetailsPage} from "../pages/heroDetailsPage";

import {HeroesPage} from "../pages/heroesPage";
import {Hero} from "../pages/dataclasses/hero";



test.beforeEach(async ({ page }) => {
  const dashboardPage = new dashBoardPage(page);

  await dashboardPage.openUrl()
});

test.afterEach(async ({ page }) => {

  await page.close();
});

test('create a new hero', async ({ page }) => {

  const newHero = new Hero(faker.person.fullName());

  const heroesPage = new HeroesPage(page);
  const detailsPage = new heroesDetailsPage(page);
  const dashboardPage = new dashBoardPage(page);


  //click Heroes Button
  await dashboardPage.gotoHeroesPage();


  await heroesPage.createHero(newHero.name)

  await heroesPage.verifyNewHero(newHero.name);

  // View Hero Details Page
  await heroesPage.openHero(newHero.name)

  await detailsPage.verifyNewHero(newHero.name)
  await detailsPage.verifyHeroName(newHero.name)


});


test('edit an existing hero', async ({ page }) => {

  const newHero = new Hero(faker.person.fullName());
  const editHero = new Hero(faker.person.fullName());

  const heroesPage = new HeroesPage(page);
  const detailsPage = new heroesDetailsPage(page);
  const dashboardPage = new dashBoardPage(page);


  //click Heroes Button
  await dashboardPage.gotoHeroesPage();

  await heroesPage.createHero(newHero.name)

  await heroesPage.verifyNewHero(newHero.name);

  // View Hero Details Page
  await heroesPage.openHero(newHero.name);

  // edit Hero

  await detailsPage.editHeroName(editHero.name);

  await detailsPage.verifyNewHero(editHero.name);
  await detailsPage.verifyHeroName(editHero.name);

  await detailsPage.clickSaveButton();

  // Verify New Name on the Heroes tab
  await heroesPage.verifyNewHero(editHero.name);

  // Go to Dashboard Page and Search Edited Hero
  await heroesPage.gotoDashboardPage();
  await dashboardPage.searchHero(editHero.name);
  await dashboardPage.verifySearchedHero(editHero.name);


});
