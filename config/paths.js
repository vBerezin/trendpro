const src = './src';
const build = $.isProd ? './build/' : './build-dev';
const glob = require('glob');
const path = require('path');

const entries = (() => {
  const entries = {};
  const files = glob.sync('./src/pages/**/index.{ts,js}');
  files.forEach((filePath) => {
    const entryFolder = path.dirname(path.relative('./src/pages', filePath));
    entries[entryFolder] = filePath;
  });
  return entries;
})();

module.exports = {
  src,
  build,
  server: {
    base: build,
  },
  clean: build,
  alias: {
    '~src': src,
    '~templates': `${src}/templates`,
    '~icons': `${src}/icons`,
    '~styles': `${src}/styles`,
    '~scripts': `${src}/scripts`,
    '~components': `${src}/components`,
    '~containers': `${src}/containers`,
    '~pages': `${src}/pages`,
    '~static': `${build}/static`,
    '~images': `${build}/images`,
  },
  webpack: {
    context: src,
    entries: {
      ...entries,
      dev: `${src}/scripts/dev.js`
    },
    dest: build,
  },
  static: {
    src: `${src}/static/**/*.*`,
    watch: [
      `${src}/static/**/*.*`,
    ],
    dest: `${build}/static`,
  },
  pug: {
    dest: build,
    src: `${src}/pages/**/*.pug`,
    lint: `${src}/**/*.pug`,
    clean: `${build}/*.html`,
    watch: `${src}/**/*.pug`,
  },
  images: {
    src: `${src}/images/**/*.{png,jpeg,jpg,svg,gif}`,
    watch: `${src}/images/**/*.{png,jpeg,jpg,svg,gif}`,
    dest: `${build}/images`,
  },
  icons: {
    src: `${src}/icons/*.svg`,
    watch: `${src}/icons/*.svg`,
    template: `${src}/icons/template/icons.handlebars`,
    dest: `${src}/icons/sprite`,
  },
};
