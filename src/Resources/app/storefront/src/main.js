
import CoverSwitchPlugin from './plugin/cover-switch.plugin';

const PluginManager = window.PluginManager;
PluginManager.register('CoverSwitchPlugin', CoverSwitchPlugin, '.has-hover-thumbnail');


// Necessary for the webpack hot module reloading server
if (module.hot) {
    module.hot.accept();
}
