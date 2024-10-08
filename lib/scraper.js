const axios = require('axios');
const cheerio = require('cheerio');
const simpleGit = require('simple-git');
const Heroku = require('heroku-client');


function pinterest(querry){
	return new Promise(async(resolve,reject) => {
		 axios.get('https://id.pinterest.com/search/pins/?autologin=true&q=' + querry, {
			headers: {
			"cookie" : "csrftoken=12816f8e5c27e98bcfa6d85c001e28c8; _b=\"AX7KyG5Id71DT6Q0cFKtMUU9myhxIENVVZWwqVjuHVGFq9ruLfQg/kCXebIHhBPsOZI=\"; cm_sub=denied; fba=True; _ga=GA1.2.862909259.1620474446; g_state={\"i_l\":0}; _auth=1; _pinterest_sess=TWc9PSZLVmpIbFpCWmdkMnViNTRaalZscVUzdldDSG12dTF5emF0MWxRdlU1RGRjYjNRK3JpaUtXdVMrcXd3c2MrQnd1bjBPOWpZak9Xd2twNUhOS240c2drT2pSVkhFcTZjQ1l0Ui9Ja0lSWHY4YWJXWU1PdTVISmdrVFZmRXhMR2lKYUcvWWJJb2FrOXZUdHVhOVZ3a0liZ2N6am5oWXRKeDdXczBtRWhlNkpoa2pmaHpsa21WZ1BHN3ErWHlDZ1JmOTNIeGZNbVJ1WVNCampjU3lNNXh4ZmVrZy9zR1I2anltWmg2MkpvTXhaWVV3UXF5UEFRUS9RTFFoRFRrVzI5VlRObGRMcEFXWW0vd1k4VGJ1dklpREFSNkU0czNxTzBFOGFSY3ZDSkE1VklrQlI5akE2anFuRjNzbURadWdTcmtxRWkyejZYVFhWUnZrYko1REJBMzlVQWFsN3NqNDkyR2U2WXJEVFNSZGpqa2ExSk0wMENockdndzJzNWRZUDhzT1loTWtjNklpTkRHMHRtZmRPOEtMWXZiOVZ0LzdrOHNmdW5LdDZ4cDRVZ0RpVUpLd3loVExNSjUvbzlKaUh0b2RVdmZraGhBdmpOcjlqVGNHWjczTkM4em91dkc3Z2xZbWc1V3VhVk1NNk14dDU3YjBhU2UxUW8zUHBQNDFheWNEMG1JV3ZLdFc2M0s4VDZ0ZFNZN3VsZ2h3T3psUkNrWWhWc3p0TldoZTRaOExuUlVBTWdpdksvb1pFMW01ZGFBVzlJbkQvZEFHN2d6NStkM1JsM2FKaGV6N0txcWNYT2trOUVZSUN0b0U1R1FRQnEvRzdnSEh4VFY0eW5WRHJsMm5vdGttUXlSZUxSQ2dmOWhrZVp3cUZqYlhEd2JYcnZxckhFeWZhSGdlbmgxcDYzeWRCQ0xQdlk0UlNhdXJHUzk1QkJjMTUxZytjanN6QVBUdXJtQng0RVpIbjdMRHp5ZXNuVzAvdmJocGxJS3pPZzB5alNzdkkrNjdzZTlKN0owZWR1cDUxdUs3SFZWbU8wcStzTTFiMEpXK1R3VTd5ZHMwMXhQUndhMWdNUjE1aDZ2cndrWFgwcXA1VllwcDFNcDBrQzFmK2QrQWJtSGxETjNmTXRqd2RQWi8vY1ZDTzRTYUpzWGlQYkJlSDRpNnVNUmVYN091dDJDbks5Z0tqZ0tIbWRvbmZYSCs1NmQzRHFaQzMxcFhJUmxhNVZQVHdPYVZCT2Z6RzlBTGZLN2k4WVU1YVkvRHpIUUkyTjVONkQ2Y2lnMVl2d3VVZVlvaWh3aEplMkt3YW9wZjg5VHNxMW45b3FtMjNFK0syZ29mSlpRUHFweGpjSTdZbTVZN1NXUmVQSTZjT1ZmQndmOGJpUFdhdnBvbU5vQ2N2azJXT3JUaDV4Q0xFWE8rd012bFpjUWYweVhEczJIakluMkVjNFo2MHBzdzMzOExJQzUrTWRJZGdDTmczdVJIUmJRTGEyMlQ0N3BLTTR4c3dHclBGUHZCUzZZNkcxR0ltZU43Y3hubW1xYjNXaUxmMFNRUDRuSEJudjd5OE5Bcm11bHhMN0xTSjlWVnBSRFc1ayt2VmUwQ2poYjlUOW1CMVUyM3JqYThBenJPWWcrdFpOOGRMTmFGRUhKK25yczI5ZWozNmc2YzZtdkowT282RkRXWXNzbTJHaEI3b0xDMDREMlhKbVZSRkwwSmlUZUtxYU5nQ3IzeDMxcTdjeGp1MG51VlV0cElaaFlPeUhzNWk5UHd4RGczWnE4YytWeGxRejBRNHpkZmMmN0xQTW90eE1PUWhJNkVPcGZ6YVYxem1OT1Y4PQ==\"; _routing_id=\"6d470a6f-c20b-48d9-b7fa-ac169f65d85b\"; sessionFunnelEventLogged=1"
		}
			}).then(({ data }) => {
		const $ = cheerio.load(data)
		const result = [];
		const hasil = [];
   		 $('div > a').get().map(b => {
        const link = $(b).find('img').attr('src')
            result.push(link)
		});
   		result.forEach(v => {
		 if(v == undefined) return
		 hasil.push(v.replace(/236/g,'736'))
			})
			hasil.shift();
		resolve(hasil)
		})
	})
}
async function syncgit() {	
const simpleGit = require('simple-git')	
    const git = simpleGit();	
        await git.fetch();	
            var commits = await git.log(['main' + '..origin/' + 'main']);	
	    return commits	

}	

async function sync() {	
      const simpleGit = require('simple-git')	
    const git = simpleGit();	
        await git.fetch();	
            var commits = await git.log(['main' + '..origin/' + 'main']);	
            var availupdate = '*𝐔𝐩𝐝𝐚𝐭𝐞 𝐀𝐯𝐚𝐢𝐥𝐚𝐛𝐥𝐞 \n\n';	
            commits['all'].map(	
            (commit) => { 	
            availupdate += '● [' + commit.date.substring(0, 10) + ']: '+ commit.message +'\n- By:'+commit.author_name+'\n'});	
            return availupdate	

}	
async function updatedb() {	
	const simpleGit = require('simple-git')	
			const git = simpleGit();	
		const Heroku = require('heroku-client');	
		const heroku = new Heroku({ token: process.env.HEROKU_API_KEY })	
			await git.fetch();	
					var commits = await git.log(['main' + '..origin/' +'main']);	
					if (commits.total === 0) {	
						return 'ʏᴏᴜ..ʜᴀᴠᴇ...ᴀʟʀᴇᴅʏ..ᴜᴘᴅᴀᴛᴇᴅ...'	
					} else {	
								var app = await heroku.get('/apps/' + process.env.HEROKU_APP_NAME)	
							 //   await Void.sendMessage(citel.chat,{text:'*ᴜᴘᴅᴀᴛɪɴɢ...*'})	
							git.fetch('upstream', 'main');	
							git.reset('hard', ['FETCH_HEAD']);	
	
							var git_url = app.git_url.replace(	
								"https://", "https://api:" + process.env.HEROKU_API_KEY + "@"	
							)   	
							try {	
								await git.addRemote('heroku', git_url);	
							} catch { console.log('heroku remote adding error'); }	
							await git.push('heroku', 'main');	
	
							return '*ʙᴏᴛ ᴜᴘᴅᴀᴛᴇᴅ...*\n_Restarting._'	
	
	
					}	
				}	

function wallpaper(title, page = '1') {
    return new Promise((resolve, reject) => {
        axios.get(`https://www.besthdwallpaper.com/search?CurrentPage=${page}&q=${title}`)
        .then(({ data }) => {
            let $ = cheerio.load(data)
            let hasil = []
            $('div.grid-item').each(function (a, b) {
                hasil.push({
                    title: $(b).find('div.info > a > h3').text(),
                    type: $(b).find('div.info > a:nth-child(2)').text(),
                    source: 'https://www.besthdwallpaper.com/'+$(b).find('div > a:nth-child(3)').attr('href'),
                    image: [$(b).find('picture > img').attr('data-src') || $(b).find('picture > img').attr('src'), $(b).find('picture > source:nth-child(1)').attr('srcset'), $(b).find('picture > source:nth-child(2)').attr('srcset')]
                })
            })
            resolve(hasil)
        })
    })
}

function wikimedia(title) {
    return new Promise((resolve, reject) => {
        axios.get(`https://commons.wikimedia.org/w/index.php?search=${title}&title=Special:MediaSearch&go=Go&type=image`)
        .then((res) => {
            let $ = cheerio.load(res.data)
            let hasil = []
            $('.sdms-search-results__list-wrapper > div > a').each(function (a, b) {
                hasil.push({
                    title: $(b).find('img').attr('alt'),
                    source: $(b).attr('href'),
                    image: $(b).find('img').attr('data-src') || $(b).find('img').attr('src')
                })
            })
            resolve(hasil)
        })
    })
}

function quotesAnime() {
    return new Promise((resolve, reject) => {
        const page = Math.floor(Math.random() * 184)
        axios.get('https://otakotaku.com/quote/feed/'+page)
        .then(({ data }) => {
            const $ = cheerio.load(data)
            const hasil = []
            $('div.kotodama-list').each(function(l, h) {
                hasil.push({
                    link: $(h).find('a').attr('href'),
                    gambar: $(h).find('img').attr('data-src'),
                    karakter: $(h).find('div.char-name').text().trim(),
                    anime: $(h).find('div.anime-title').text().trim(),
                    episode: $(h).find('div.meta').text(),
                    up_at: $(h).find('small.meta').text(),
                    quotes: $(h).find('div.quote').text().trim()
                })
            })
            resolve(hasil)
        }).catch(reject)
    })
}

function aiovideodl(link) {
    return new Promise((resolve, reject) => {
        axios({
            url: 'https://aiovideodl.ml/',
            method: 'GET',
            headers: {
                "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
                "cookie": "PHPSESSID=69ce1f8034b1567b99297eee2396c308; _ga=GA1.2.1360894709.1632723147; _gid=GA1.2.1782417082.1635161653"
            }
        }).then((src) => {
            let a = cheerio.load(src.data)
            let token = a('#token').attr('value')
            axios({
                url: 'https://aiovideodl.ml/wp-json/aio-dl/video-data/',
                method: 'POST',
                headers: {
                    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
                    "cookie": "PHPSESSID=69ce1f8034b1567b99297eee2396c308; _ga=GA1.2.1360894709.1632723147; _gid=GA1.2.1782417082.1635161653"   
                },
                data: new URLSearchParams(Object.entries({ 'url': link, 'token': token }))
            }).then(({ data }) => {
                resolve(data)
            })
        })
    })
}

function umma(url) {
    return new Promise((resolve, reject) => {
        axios.get(url)
        .then((res) => {
            let $ = cheerio.load(res.data)
            let image = []
            $('#article-content > div').find('img').each(function (a, b) {
                image.push($(b).attr('src')) 
            })
            let hasil = {
                title: $('#wrap > div.content-container.font-6-16 > h1').text().trim(),
                author: {
                    name: $('#wrap > div.content-container.font-6-16 > div.content-top > div > div.user-ame.font-6-16.fw').text().trim(),
                    profilePic: $('#wrap > div.content-container.font-6-16 > div.content-top > div > div.profile-photo > img.photo').attr('src')
                },
                caption: $('#article-content > div > p').text().trim(),
                media: $('#article-content > div > iframe').attr('src') ? [$('#article-content > div > iframe').attr('src')] : image,
                type: $('#article-content > div > iframe').attr('src') ? 'video' : 'image',
                like: $('#wrap > div.bottom-btns > div > button:nth-child(1) > div.text.font-6-12').text(),
            }
            resolve(hasil)
        })
    })
}

function ringtone(title) {
    return new Promise((resolve, reject) => {
        axios.get('https://meloboom.com/en/search/'+title)
        .then((get) => {
            let $ = cheerio.load(get.data)
            let hasil = []
            $('#__next > main > section > div.jsx-2244708474.container > div > div > div > div:nth-child(4) > div > div > div > ul > li').each(function (a, b) {
                hasil.push({ title: $(b).find('h4').text(), source: 'https://meloboom.com/'+$(b).find('a').attr('href'), audio: $(b).find('audio').attr('src') })
            })
            resolve(hasil)
        })
    })
}

function styletext(teks) {
    return new Promise((resolve, reject) => {
        axios.get('http://qaz.wtf/u/convert.cgi?text='+teks)
        .then(({ data }) => {
            let $ = cheerio.load(data)
            let hasil = []
            $('table > tbody > tr').each(function (a, b) {
                hasil.push({ name: $(b).find('td:nth-child(1) > span').text(), result: $(b).find('td:nth-child(2)').text().trim() })
            })
            resolve(hasil)
        })
    })
}

module.exports = { pinterest, wallpaper, wikimedia, quotesAnime, aiovideodl, umma, ringtone, styletext, sync, updatedb, syncgit };