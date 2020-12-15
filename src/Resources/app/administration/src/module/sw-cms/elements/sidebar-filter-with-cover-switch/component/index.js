import template from './sw-cms-el-sidebar-filter-with-cover-switch.html.twig';
import './sw-cms-el-sidebar-filter-with-cover-switch.scss';

Shopware.Component.register('sw-cms-el-sidebar-filter-with-cover-switch', {
    template,

    mixins: [
        Shopware.Mixin.getByName('cms-element')
    ],

    created() {
        this.createdComponent();
    },

    methods: {
        createdComponent() {
            this.initElementConfig('sidebar-filter-with-cover-switch');
        }
    }
});
