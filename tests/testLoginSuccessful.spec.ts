import { test, expect } from '@playwright/test';
import { ProfilePage } from '../pages/profile.page';


//test the login
test('test login', async ({ page }) => {
  await page.goto('https://auth.wingz.me/auth/signin');
  await page.fill('input[placeholder="Email address"]', 'qajen@gmail.com');
  await page.fill('input[placeholder="Password"]', 'abc123456');
  await page.click('button:has-text("Sign In")');

//detect if logged in succesfuly
  await page.waitForURL('https://app.wingz.me/',{ timeout: 15000 });
  const loginSuccessfulURL = page.url();
  if(loginSuccessfulURL.includes('https://app.wingz.me/')){
      console.log("-------------------------------")
      console.log("Login successful test : PASSED")
      console.log("Actual result : "+loginSuccessfulURL);
      console.log("Expected result : https://app.wingz.me/");
      console.log("-------------------------------")
  }else{
      console.log("-------------------------------")
      console.log("Login successful test : FAILED")
      console.log("Actual result : "+loginSuccessfulURL);
      console.log("Expected result : https://app.wingz.me/");
      console.log("-------------------------------")
    }
  

});


