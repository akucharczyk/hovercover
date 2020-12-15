import './component';
import './config';
import './preview';

Shopware.Service('cmsService').registerCmsElement({
    name: 'sidebar-filter-with-cover-switch',
    label: 'sw-cms.elements.sidebarFilterWithCoverSwitch.label',
    component: 'sw-cms-el-sidebar-filter-with-cover-switch',
    configComponent: 'sw-cms-el-config-sidebar-filter-with-cover-switch',
    previewComponent: 'sw-cms-el-preview-sidebar-filter-with-cover-switch',
    disabledConfigInfoTextKey: 'sw-cms.elements.sidebarFilterWithCoverSwitch.infoText.filterElement'
});
