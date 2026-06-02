import {test} from '@playwright/test';


test('Opening amazon',async({page})=>{
  await page.goto('https://www.amazon.in/')
})