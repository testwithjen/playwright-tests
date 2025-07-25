import { test, expect } from '@playwright/test';
import { invalidLogin } from '../tests/CredentialsData';


//test the login
test('test if correct error prompt will display', async ({ page }) => {
  await page.goto('https://auth.wingz.me/auth/signin');

  await page.getByPlaceholder('Email address').fill(invalidLogin.email);
  await page.getByPlaceholder('Password').fill(invalidLogin.password);
  await page.getByRole('button', { name: 'Sign In' }).click();

  const errorValue = await page.locator('[class="ng-binding"]').textContent();
  //const errorValue = "Icorrect username or password"
  if(errorValue && errorValue.toString().includes("Incorrect username or password")){
      console.log("-------------------------------")
      console.log("Login error prompt test : PASSED")
      console.log("Actual result : "+errorValue);
      console.log("Expected result : Incorrect username or password");
      console.log("-------------------------------")
  }else{
      console.log("-------------------------------")
      console.log("Login error prompt test : FAILED")
      console.log("Actual result : "+errorValue);
      console.log("Expected result : Incorrect username or password");
      console.log("-------------------------------")
  }
  

//   const profilePage = new ProfilePage(page);
//   await profilePage.goto();
//   await profilePage.fillProfile('Jenny', 'Tan', 'Manila', 'QA Engineer | Automation Enthusiast');
//   await profilePage.save();
//   await profilePage.expectSuccessMessage();
});


