const {withModuleFederationPlugin, shareAll} = require("@angular-architects/module-federation/webpack");
module.exports = withModuleFederationPlugin({
  library: { type: "module" },
  name: 'sharedDrawer',

  filename: "remoteEntry.js",
  name: 'frameDrawer',
  remotes: [],
  exposes: {
    './Frame': 'apps/shared/src/app/frame/frame.component',
    './Drawer': 'apps/shared/src/app/frame/frame-drawer/frame-drawer.component',
  },
  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});

