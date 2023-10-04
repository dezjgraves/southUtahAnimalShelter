import { uhfNav } from "./uhfPageObject";
const uhf = new uhfNav();
const fs = require('fs');
const { until } = require('selenium-webdriver');

describe('Testing UHF specific objects', () => {
    afterAll(async () => {
        await uhf.driver.quit();
    });

    beforeEach(async () => {
        await uhf.openPage();
    });

        test ('Click homepage', async () =>{
            await uhf.openPage();
            await uhf.clickHome();
            await console.log(`☼☼☼☼☼☼ Clicked Home Button ☼☼☼☼☼☼`);
            let expectUrl = await uhf.driver.getCurrentUrl();
            expect(expectUrl).toBe('https://www.suvas.org/');
            await fs.appendFile(`${__dirname}/testResults.txt`, expectUrl, (e) => {
                if (e) console.log(e);
                else console.log(`☼☼☼☼☼☼ Correct Page ${expectUrl}☼☼☼☼☼☼`);
            });
        });

});
