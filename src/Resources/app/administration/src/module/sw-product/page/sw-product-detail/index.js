import template from './sw-product-detail.html.twig';

const { Component } = Shopware;
const { mapState, mapGetters } = Component.getComponentHelper();

Component.override('sw-product-detail', {
    template,

    computed: {
        productCriteria() {
            const criteria = this.$super('productCriteria');

            criteria.addAssociation('hover_cover');

            return criteria;
        },
    },

    methods: {
        removeMediaItem(state, mediaId) {
            const superCallResult = this.$super('removeMediaItem');

            const media = this.product.media.find((mediaItem) => mediaItem.mediaId === mediaId);

            // remove hoverCover id if mediaId matches
            if (this.product.hoverCoverId === media.id) {
                this.product.hoverCoverId = null;
            }
                
            this.product.media.remove(mediaId);
        },

        onHoverCoverChange(mediaId) {
            if (!mediaId || mediaId.length < 0) {
                return;
            }

            const media = this.product.media.find((mediaItem) => mediaItem.mediaId === mediaId);

            if (media) {
                this.product.hoverCoverId = media.id;
            }
        },
    },
});
