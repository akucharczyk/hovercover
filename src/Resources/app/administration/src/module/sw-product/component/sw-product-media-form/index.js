import template from './sw-product-media-form.html.twig';

const { Component } = Shopware;

Component.override('sw-product-media-form', {
    template,

    computed: {
        hoverCover() {
            if (!this.product) {
                return null;
            }

            const hoverCoverId = this.product.hoverCover ? this.product.hoverCover.mediaId : this.product.hoverCoverId;
            return this.product.media.find(media => media.id === hoverCoverId);
        },

        currentHoverCoverID() {
            const hoverCoverMediaItem = this.productMedia.find(hoverCoverMedium =>
                hoverCoverMedium.media.id === this.product.hoverCoverId
            );

            return hoverCoverMediaItem.id;
        }
    },
    methods: {
        createPlaceholderMedia(mediaItems) {
            return {
                isPlaceholder: true,
                isCover: mediaItems.length === 0,
                media: {
                    isPlaceholder: true,
                    name: ''
                },
                mediaId: mediaItems.length.toString(),
                isHoverCover: false,
            };
        },

        removeHoverCover() {
            this.product.hoverCover = null;
            this.product.hoverCoverId = null;
        },

        isHoverCover(productMedia) {
            const hoverCoverId = this.product.hoverCover ? this.product.hoverCover.id : this.product.hoverCoverId;

            if (this.product.media.length === 0 || productMedia.isPlaceholder) {
                return false;
            }

            return hoverCoverId ? productMedia.id === hoverCoverId : false;
        },

        removeFile(productMedia) {
            // remove cover id if mediaId matches
            if (this.product.coverId === productMedia.id) {
                this.product.cover = null;
                this.product.coverId = null;
            }

            if (this.product.coverId === null && this.product.media.length > 0) {
                this.product.coverId = this.product.media.first().id;
            }

            // remove hover cover id if mediaId matches
            if (this.product.hoverCoverId === productMedia.id) {
                this.product.hoverCover = null;
                this.product.hoverCoverId = null;
            }

            this.product.media.remove(productMedia.id);
        },

        markMediaAsHoverCover(productMedia) {
            this.product.hoverCover = productMedia;
            this.product.hoverCoverId = productMedia.id;
        },
    }
});
