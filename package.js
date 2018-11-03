Package.describe({
  name: 'jaredhliu:ffmpeg',
  summary: 'ffmpeg packaged for meteor. Uses fluent-ffmpeg',
  version: '1.0.3',
  git: 'https://github.com/jaredliu2018/meteor-ffmpeg.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles('ffmpeg.js');
  api.export('ffmpeg');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('jaredhliu:ffmpeg');
  api.addFiles('ffmpeg-tests.js');
});

Npm.depends({
	"fluent-ffmpeg": "2.0.1"
});
