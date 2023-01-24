//  <script type="text/javascript">
var instagramFeed = new Instafeed({
	get: 'user',
	userId: '51991332322',
	accessToken:
		'IGQVJXaUM0MGJqS01FU0JQOHd1dHYyVjlBd3FGU1hJY0s1Q3ZABd2JaX0puVHZAkdl9iZAlFERXkzNUZA5MGloSkkyZAXdCUnlOSzhvWTJpSkF1WUFqM0ZAWN3MzVW43UEFJSEFNX0M1Y0EtenA0eDAxcl84bAZDZD',
	limit: 6,
	resolution: 'standard_resolution',
	template:
		'<div class="col-4 instagram-item"><a href="{{link}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div>',
	after: function () {
		if (!this.hasNext()) {
			$('#instagram-feed').append('<div class="col-12 text-center"><p>No more photos to show</p></div>')
		}
	},
})
instagramFeed.run()
{
	/* </script> */
}
