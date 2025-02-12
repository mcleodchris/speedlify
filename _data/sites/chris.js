module.exports = {
	name: "chrismcleod.dev", // optional, falls back to object key
	description: "Chris’s Personal web site",
	// skip if localhost
	// skip if this is a new fork of the speedlify (not Zach’s)
	skip: false,
	options: {
		frequency: 60 * 23, // 23 hours
		// Use "run" if the sites don’t share assets on the same origin
		//           and we can reset chrome with each run instead of
		//           each site in every run (it’s faster)
		// Use "site" if sites are all on the same origin and share assets.
		freshChrome: "site"
	},
	urls: [
		"https://chrismcleod.dev/",
		"https://chrismcleod.dev/about/",
		"https://chrismcleod.dev/blog/",
		"https://chrismcleod.dev/follow/",
		"https://chrismcleod.dev/paintslam/2025/",
		// Popular Posts
		"https://chrismcleod.dev/blog/visual-studio-code-snippet-for-markdown-frontmatter/",
		"https://chrismcleod.dev/blog/creating-a-remote-dev-machine-with-raspberry-pi-and-vs-code/",
		"https://chrismcleod.dev/blog/a-hello-world-for-bluesky/the-at-protocol/",
		"https://chrismcleod.dev/blog/next-steps-with-bluesky-hosting-your-own-data-and-more-on-the-api/",
	]
};