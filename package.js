Package.describe({
  name: 'oakworks:marker-clusterer',
  version: '0.1.2',
  summary: 'A marker clustering library for the Google Maps JavaScript API v3, packaged for Meteor',
  git: 'https://github.com/oakworks/meteor-marker-clusterer',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.addAssets('markerclusterer.js', 'client');
  api.addAssets('images/conv30.png', 'client');
  api.addAssets('images/conv40.png', 'client');
  api.addAssets('images/conv50.png', 'client');
  api.addAssets('images/heart30.png', 'client');
  api.addAssets('images/heart40.png', 'client');
  api.addAssets('images/heart50.png', 'client');
  api.addAssets('images/m1.png', 'client');
  api.addAssets('images/m2.png', 'client');
  api.addAssets('images/m3.png', 'client');
  api.addAssets('images/m4.png', 'client');
  api.addAssets('images/m5.png', 'client');
  api.addAssets('images/people35.png', 'client');
  api.addAssets('images/people45.png', 'client');
  api.addAssets('images/people55.png', 'client');
});
