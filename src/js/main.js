require.config({
  hbs:{
    disableHelpers: true,
    disableI18n: true,
    templateExtension: 'html'
  },
  paths:{
    'bootstrap': '../components/bootstrap/dist/js/bootstrap',
    'chiropractor': '../components/chiropractor/chiropractor',
    'commonjs': '../components/wiser-commonjs',
    'console': '../components/console-shim/console-shim',
    'console-shim': '../components/console-shim/console-shim',
    'easyxdm': '../jquery.cors/easyxdm/easyxdm',
    'handlebars': '../components/require-handlebars-plugin/Handlebars',
    'hbs': '../components/require-handlebars-plugin/hbs',
    'i18nprecompile': '../components/require-handlebars-plugin/hbs/i18nprecompile',
    'jquery': '../components/jquery/jquery',
    'jquery.cookie': '../components/jquery.cookie/jquery.cookie',
    'jquery.cors': '../jquery.cors',
    'json2': '../components/json2/json2',
    'json3': '../components/json3/lib/json3',
    'jstorage': '../components/jStorage/jstorage',
    'underscore': '../components/underscore-amd/underscore',
    'underscore.string': '../components/underscore.string/lib/underscore.string'
  },
  shim: {
    'json2': { exports: 'JSON' },
    'jquery.cors/easyxdm/easyxdm': { exports: 'easyXDM' },
    'easyxdm': {
      deps: ['json2'],
      exports: 'easyXDM'
    },
    'console-shim': { exports: 'console' }
  }
});

require(['app'], function(){});
