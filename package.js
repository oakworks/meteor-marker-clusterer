Package.describe({
  name: 'oakworks:marker-clusterer',
  version: '0.1.2',
  summary: 'A marker clustering library for the Google Maps JavaScript API v3, packaged for Meteor',
  git: 'https://github.com/oakworks/meteor-marker-clusterer',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.addFiles('markerclusterer.js', 'client');
  api.addFiles('images/conv30.png', 'client');
  api.addFiles('images/conv40.png', 'client');
  api.addFiles('images/conv50.png', 'client');
  api.addFiles('images/heart30.png', 'client');
  api.addFiles('images/heart40.png', 'client');
  api.addFiles('images/heart50.png', 'client');
  api.addFiles('images/m1.png', 'client');
  api.addFiles('images/m2.png', 'client');
  api.addFiles('images/m3.png', 'client');
  api.addFiles('images/m4.png', 'client'); 
  api.addFiles('images/m5.png', 'client');
  api.addFiles('images/people35.png', 'client');
  api.addFiles('images/people45.png', 'client');
  api.addFiles('images/people55.png', 'client');
});
