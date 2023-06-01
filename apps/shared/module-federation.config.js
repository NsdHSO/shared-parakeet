module.exports = {
  filename: "remoteEntry.js",
  name: 'shared',
  remotes: [],
  exposes: {
    'frame': 'apps/shared/src/app/frame/frame.component.ts',
    'drawer': 'apps/shared/src/app/frame/frame-drawer/frame-drawer.component.ts',
  },
};
