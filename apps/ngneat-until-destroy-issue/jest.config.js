module.exports = {
  name: 'ngneat-until-destroy-issue',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/ngneat-until-destroy-issue',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
