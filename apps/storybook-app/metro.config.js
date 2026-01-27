const { getDefaultConfig } = require('expo/metro-config');
const path = require('path');

const projectRoot = __dirname;
const workspaceRoot = path.resolve(projectRoot, '../..');

const config = getDefaultConfig(projectRoot);

config.watchFolders = [workspaceRoot];

config.resolver.nodeModulesPaths = [
  path.resolve(projectRoot, 'node_modules'),
  path.resolve(workspaceRoot, 'node_modules'),
];

config.resolver.resolveRequest = (context, moduleName, platform) => {
  if (
    moduleName === 'react' || 
    moduleName === 'react-native' || 
    moduleName.startsWith('react/')
  ) {
    const pathToResolve = path.resolve(workspaceRoot, 'node_modules', moduleName);
    return context.resolveRequest(context, pathToResolve, platform);
  }

  return context.resolveRequest(context, moduleName, platform);
};

config.resolver.disableHierarchicalLookup = true;

module.exports = config;