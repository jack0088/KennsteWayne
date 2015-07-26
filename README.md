This is a blog template for [Ghost](http://ghost.org).
- Before you start using it, you have to customize a few things, which are here for demo purposes!

**ATTENTION:** You can e-mail me for further assistance at jack0088@me.com


1. Inside `default.hbs` look for the `<!-- Google Meta -->` section and replace lines 32-42 by your own Google-Analytics code, which you can get from your Google account. Otherwise just delete all of it.

2. Same file has a Section `<!-- Google Translation -->`, where you can set the current `pageLanguage` and add `includedLanguages` to the list of languages which you want to translate to.

3. The right half of the banner (`banner.hbs`) is static and can be used for announcements and such. Fill it with your own content. Same applies to the Amazon advert below - replace or remove it.

4. Look for the `<!-- Twitter Widget -->` section inside `index.hbs` and replace it by your own Twitter-Widget code, which you can generate inside the settings of your Twitter profile.

5. `posts.hbs` has a commenting system hosted by [Disqus](https://disqus.com), which is indicated by `<!-- Disqus Widget -->`. It's enough to change the `var disqus_shortname = '...'` string to your own forum name.

6. The navigation, logo and banner image are maintained through Ghost itself.

7. **Optional:** You can control the number of 'latest posts' on the left of the 'posts.hbs' by changing some parameters inside `js/posts_list.js` at lines 25-26
