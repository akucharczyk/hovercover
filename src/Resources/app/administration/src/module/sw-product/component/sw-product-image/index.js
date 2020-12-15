import template from './sw-product-image.html.twig';

const { Component } = Shopware;

Component.override('sw-product-image', {
    template,

    props: {
        isHoverCover: {
            type: Boolean,
            required: false,
            default: false
        }
    },

    computed: {
        productImageClasses() {
            return {
                'is--placeholder': this.isPlaceholder,
                'is--cover': this.isCover,
                'is--hover-cover': this.isHoverCover
            };
        }
    }
});
