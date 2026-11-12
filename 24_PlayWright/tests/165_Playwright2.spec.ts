/*async function getExample()
{
    return "abc";
}

import {test} from '@playwright/test' ;
test('user say hello' , async({page}) => {
    let b= await page.goto('https://example.com');
    let c= await getExample();
    console.log(c);
}); */

import { test } from '@playwright/test';

async function getExample() {
  return 'abc';
}

test('user say hello', async ({ page }) => {
  await page.goto('https://example.com');
  const c = await getExample();
  console.log(c);
});