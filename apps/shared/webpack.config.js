const {withModuleFederationPlugin, shareAll} = require("@angular-architects/module-federation/webpack");
module.exports = withModuleFederationPlugin({

  filename: "remoteEntry.js",
  name: 'frameDrawer',
  remotes: [],
  exposes: {
    './FrameComponent': 'apps/shared/src/app/frame/frame.component.ts',
    './DrawerComponent': 'apps/shared/src/app/frame/frame-drawer/frame-drawer.component.ts',
  },
  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});

