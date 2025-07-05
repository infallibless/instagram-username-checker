const bestmoduleonworld = require('axios');
const settings = require('./config.js')

class IgFind {
    constructor() {
        this.username = '';
    }

    gen(length) {
        const chars = 'abcdefghijklmopqrstuwxyz0123456789_0123456789';
        const shuffled = chars.split('').sort(() => 0.5 - Math.random()).join('');
        return shuffled.slice(-length);
    }

    async sendhook(username) {
            await bestmoduleonworld.post(settings.hook, {
                content: `@everyone ${username}`
            });
    }

    async bot(length) {
        this.username = this.gen(length);
        console.log(`[INFALLIBLESS] Attempt -> ${this.username}`);
        const csrfToken = 'XkYUFcX0rvkYslx8v3PfE42t8XfaoCV2';
        const payload = new URLSearchParams({
            enc_password: `#INFALLIB1LESS_PRO:0:${Math.floor(Date.now() / 1000)}:4l_ewicka`,
            email: 'infal222blessigdad@gmail.com',
            username: this.username,
            first_name: 'has2an',
            client_id: 'YmhXBwAEAAEZmK-T3ZQC2AmE16gD',
            seamless_login_enabled: '1',
            opt_into_one_tap: 'false'
        });
        try {
            const response = await bestmoduleonworld.post(
                'https://www.instagram.com/accounts/web_create_ajax/attempt/',
                payload.toString(),
                {
                    headers: {
                        'Authority': 'www.instagram.com',
                        'Accept': '*/*',
                        'Accept-Language': 'tr-TR,tr;q=0.9',
                        'Content-Type': 'application/x-www-form-urlencoded',
                        'Cookie': `csrftoken=${csrfToken}; mid=YmhXBwAEAAEZmK-T3ZQC2AmE16gD; ig_nrcb=1;`,
                        'Origin': 'https://www.instagram.com',
                        'Referer': 'https://www.instagram.com/accounts/emailsignup/',
                        'Sec-Ch-Ua': `" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"`,
                        'Sec-Ch-Ua-Mobile': '?1',
                        'Sec-Ch-Ua-Platform': `"Android"`,
                        'Sec-Fetch-Dest': 'empty',
                        'Sec-Fetch-Mode': 'cors',
                        'Sec-Fetch-Site': 'same-origin',
                        'User-Agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Mobile Safari/537.36',
                        'X-Asbd-Id': '198387',
                        'X-Csrftoken': csrfToken,
                        'X-Ig-App-Id': '936619743392459',
                        'X-Ig-Www-Claim': '0',
                        'X-Instagram-Ajax': '20e2a5e214f4',
                        'X-Requested-With': 'XMLHttpRequest'
                    }
                }
            );
            const data = response.data;
            const ecode = data?.errors?.username?.[0]?.code;
            if (ecode) {
                console.log(ecode);
            } else {
                console.log(`[INFALLIBLESS] ${this.username} tombala`);
                await this.sendhook(this.username);
            }
        } catch (error) {
            console.error(error.response ?error.response.data : error.message);
        }
    }
}

const ig = new IgFind();

setInterval(() => {
    ig.bot(settings.length);
},settings.delay);
