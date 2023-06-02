const {withModuleFederationPlugin, shareAll} = require("@angular-architects/module-federation/webpack");
module.exports = withModuleFederationPlugin({
  name:'sharedRabit',
  filename: "remoteEntry.js",
  exposes: {
    FrameComponent: 'apps/shared/src/app/frame/frame.component',
    DrawerComponent: 'apps/shared/src/app/frame/frame-drawer/frame-drawer.component',
  },
  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});

