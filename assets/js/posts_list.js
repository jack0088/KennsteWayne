var getRecentPosts = function(rss, slice, callback) {
    $.get(rss, function(data) {
        var posts  = $(data).find("item");
        var recent = [];

        if (slice) posts = posts.slice(0, slice);

        for (var i = 0; posts && i < posts.length; i++) {
            var post = posts.eq(i);
            recent.push({
                title: 	 post.find("title").text(),
                content: post.find("description").text(),
                url: 	 post.find("link").text(),
                date: 	 post.find("pubDate").text()
            });
        }

        callback(recent);
    });
};


$(function() { // on document ready
    var rss   = "http://localhost:2368/rss/" // feed url
	var slice = 10; // posts count
	var crop  = 40; // words count for description

    var extract = function(str, i) { // extract 'i' words from string 'str'
        var cache = str.split(/\s+/, i);
        return cache.join(" ");
    };

    var callback = function(posts) {
        var template = "";

        for (var i = 0; i < posts.length; i++) {
            var post    = posts[i];
            var content = $("<div/>").html(post.content).text();
            var excerpt = extract(content, crop);

            template += "<article class='post'><time class='post-date'>" + post.date.substr(5, 11) + "</time><h2 class='post-title'>" + post.title + "</h2><hr><p class='post-content'>" + excerpt + "</p><a class='pure-button button-s' href='" + post.url + "'>lesen</a></article>";
        }

        $("#posts_list").append(template);
    };

	getRecentPosts(rss, slice, callback);
});
