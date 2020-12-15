import './component';
import './preview';

const { Application } = Shopware;

Application.getContainer('service').cmsService.registerCmsBlock({
    name: 'sidebar-filter-with-cover-switch',
    label: 'sw-cms.blocks.sidebar.sidebarFilterWithCoverSwitch.label',
    category: 'sidebar',
    component: 'sw-cms-block-preview-sidebar-filter-with-cover-switch',
    previewComponent: 'sw-cms-block-preview-sidebar-filter-with-cover-switch',
    defaultConfig: {
        marginBottom: '20px',
        marginTop: '20px',
        marginLeft: '20px',
        marginRight: '20px',
        sizingMode: 'boxed'
    },
    slots: {
        content: 'sidebar-filter-with-cover-switch'
    }
});
