
var ENVIRONMENT_IS_WEB = typeof window === 'object';

// See https://github.com/kripken/emscripten/wiki/Interacting-with-code
if (ENVIRONMENT_IS_WEB)
  {
  Module['noInitialRun'] = 1;
  }
