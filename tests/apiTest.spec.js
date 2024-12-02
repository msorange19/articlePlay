const { test, request, expect } = require('@playwright/test');
const fs = require('fs');

test('Log request details manually with correct URL', async () => {

    const state = JSON.parse(fs.readFileSync('./state.json', 'utf-8'));
    const origin = state.origins.find(o => o.origin === 'https://conduit.bondaracademy.com');
    const jwtToken = origin.localStorage.find(item => item.name === 'jwtToken').value;
    const apiURL = 'https://conduit-api.bondaracademy.com/api/articles';

    const apiContext = await request.newContext({
        storageState:'state.json',
        extraHTTPHeaders: {
            'accept': 'application/json, text/plain, */*',
            'accept-language': 'en-US,en;q=0.9,bn;q=0.8',
            'authorization': `Token ${jwtToken}`,
            'content-type': 'application/json',
            'origin': 'https://conduit.bondaracademy.com',
            'priority': 'u=1, i',
            'referer': 'https://conduit.bondaracademy.com/',
            'sec-ch-ua': '"Google Chrome";v="131", "Chromium";v="131", "Not_A Brand";v="24"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            'sec-fetch-dest': 'empty',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-site',
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36'
        }
    });

    // Define request payload
    const payload = {
        article: {
            title: "csuiiiiikjkkcc",
            description: "cccc",
            body: "cccc",
            tagList: ["c"]
        }
    };


    const response = await apiContext.post(apiURL, { data: payload });
    expect(response.ok()).toBeTruthy();
});
