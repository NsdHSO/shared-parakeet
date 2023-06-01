const {shareAll} = require("@angular-architects/module-federation/webpack");
module.exports = {
  filename: "remoteEntry.js",
  name: 'shared',
  remotes: [],
  exposes: {
    'frame': 'apps/shared/src/app/frame/frame.component.ts',
    'drawer': 'apps/shared/src/app/frame/frame-drawer/frame-drawer.component.ts',
  },
  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },
};
