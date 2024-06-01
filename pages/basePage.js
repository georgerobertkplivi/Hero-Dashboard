import { expect } from '@playwright/test';
export class BasePage{
  constructor(page) {
    this.page = page

  }

  async openUrl() {
    await this.page.goto('http://localhost:4200/');
  }


  async gotoHeroesPage() {
    await this.page.getByRole('link', { name: 'Heroes' }).click();
    await expect(this.page.url()).toContain("/heroes")
    await expect(this.page.locator("//h2[normalize-space()='My Heroes']")).toContainText("My Heroes")
  }

  async gotoDashboardPage() {
    await this.page.locator("a[routerlink='/dashboard']").click();
    await expect(this.page.url()).toContain("/dashboard")
    await expect(this.page.locator("//h2[normalize-space()='Top Heroes']")).toContainText("Top Heroes")
  }


}
