import { Page, expect } from '@playwright/test';

export class ProfilePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto('https://app.wingz.me/account/profile');
    await expect(this.page).toHaveURL(/.*\/account\/profile/);
  }

  async fillProfile(firstName: string, lastName: string, location: string, headline: string) {
    await this.page.fill('input[name="firstName"]', firstName);
    await this.page.fill('input[name="lastName"]', lastName);
    await this.page.fill('input[placeholder="Location"]', location);
    await this.page.fill('textarea[placeholder="Headline"]', headline);
  }

  async save() {
    await this.page.click('button:has-text("Save")');
    await this.page.waitForTimeout(1000); // optional: wait for animation or API call
  }

  async expectSuccessMessage() {
    await expect(this.page.getByText('Profile updated')).toBeVisible();
  }
}

