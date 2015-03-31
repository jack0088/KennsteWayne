var getRecentPosts = function(amount, callback) {
	var rss = $("link[type='application/rss+xml']").attr("href");
	
	$.get(rss, function(data) {
		var recent = [];
		//var parsed = $.parseXML(data);
		var posts  = $(data).find("item");
		
		if (amount) posts = posts.slice(0, amount); // Only display the first number of posts (defined by amount)
		
		for (var i = 0; posts && i < posts.length; i++) {
			var post = posts.eq(i);
			recent.push({
				title: 	 post.find("title").text(),
				content: post.find("description").text(),
				url: 	 post.find("link").text(),
				date: 	 post.find("pubDate").text()
			});
		}
		
		callback(recent); // Done collecting posts, process to callback
	});
};

var crop = function(str, numwords) {
    var cache = str.split(/\s+/, numwords);
    return cache.join(" ");
}

// Gets called on document ready
$(function() {
	var num_posts = 10;
	var num_words = 40; // post excerpt
	
	getRecentPosts(num_posts, function(posts) { // Display null or x posts!
		var template = "";
		for (var i = 0; i < posts.length; i++) {
			var post = posts[i];
			var excerpt = crop($("<div/>").html(post.content).text(), num_words); // strip html and crop string!
			
		    template += "<article class='post'><time class='post-date'>" + post.date.substr(5, 11) + "</time><h2 class='post-title'>" + post.title + "</h2><hr><p class='post-content'>" + excerpt + "</p><a class='pure-button button-s' href='" + post.url + "'>lesen</a></article>";
		}
		$("#posts_list").html(template);
	});
});