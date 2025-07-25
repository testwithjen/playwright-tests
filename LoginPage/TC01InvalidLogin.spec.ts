// login.spec.ts

import { test, expect } from '@playwright/test';
import { invalidLogin } from '../LoginPage/EmailCredentials'; // adjust path as needed

test('should show error for invalid login', async ({ page }) => {
  await page.goto('https://auth.wingz.me/auth/signin');

  await page.getByPlaceholder('Email address').fill(invalidLogin.email);
  await page.getByPlaceholder('Password').fill(invalidLogin.password);
  await page.getByRole('button', { name: 'Sign In' }).click();

  // Wait for the error message to appear
  const errorLocator = page.locator('.ng-binding');

  // Wait for the error message to be visible and check its text
  await expect(errorLocator).toBeVisible();
  const errorText = await errorLocator.textContent();

    if (errorText && errorText.includes('Incorrect username or password')) {
    console.log('-------------------------------');
    console.log('Login error prompt test : ✅ PASSED');
    console.log('Actual result   : ' + errorText);
    console.log('Expected result : Incorrect username or password');
    console.log('-------------------------------');
  } else {
    console.log('-------------------------------');
    console.log('Login error prompt test : ❌ FAILED');
    console.log('Actual result   : ' + errorText);
    console.log('Expected result : Incorrect username or password');
    console.log('-------------------------------');
  }

});
