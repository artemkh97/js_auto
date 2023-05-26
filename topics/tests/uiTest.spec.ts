const puppeteer = require('puppeteer');

async function testYaRu(){
    console.log('Запуск браузера');
    const browser = await puppeteer.launch();

    console.log('Создание новой вкладки в браузере');
    const page = await browser.newPage();

    console.log('Переход на страницу');
    await page.goto('https://demoqa.com/automation-practice-form');

    console.log('Ввод имени');
    const firstName = await page.$('#firstName');
    await firstName.type('John');

    const lastName = await page.$('#lastName');
    await lastName.type('Smith');

    console.log('Ввод email');
    const emailInput = await page.$('#userEmail');
    await emailInput.type('johnsmith123@yahoo.com');
    
    console.log('Закрытие браузера');
    await browser.close();
}

testYaRu();