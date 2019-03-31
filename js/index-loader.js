//Load requirejs config, then load the app logic for a page.
requirejs(['./require-config'], function (common) {
    requirejs(['index']);
});