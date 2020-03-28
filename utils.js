const axios = require('axios').default;
const download = require('image-downloader');
const chalk = require('chalk');

const API_KEY = process.env.API_KEY;
const BASE_URL = "https://api.unsplash.com/search/photos/?";
const args = process.argv.slice(2); // ignoring "node" & path to script
const dest = args[args.length-1];

const main = async function () {
	console.log(chalk.black.bgBlue.bold("Fetching URLs 🚀🚀"));

	let urls = await getUrlCollection();

	console.log(urls);
	console.log(chalk.black.bgBlue.bold("Downloading...💪"));

	for (let url of urls) {
		await downloadImage(url);
	}

	console.log(chalk.white.bgGreen.bold("Done 🚀🚀"));
	process.exit(0);
}

async function getUrlCollection() {
	try {
		const per_page = args[0];
		const tags = args.slice(1, args.length-1);
		const orientation = "landscape";
		let urls = [];

		for (let tag of tags) {
			const response = await axios.get(BASE_URL, {
				params: {
					client_id: API_KEY,
					orientation: orientation,
					per_page: per_page,
					query: tag
				}
			});

			for (let result of response.data.results) {
				urls.push(result.urls.full);
			}	
		}
		return urls;
	} catch (err) {
		console.log(err);
	}
}

async function downloadImage(url) {
	const options = {
		url: url,
		dest: dest,
		extractFilename: true
	};

	try {
		const { filename, image } = await download.image(options);
		console.log(filename);
	} catch (err) {
		console.log(err);
	}
}

module.exports = main;