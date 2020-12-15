import Plugin from 'src/plugin-system/plugin.class';

export default class CoverSwitchPlugin extends Plugin {
    static options = {
        'activeCls': 'hover-thumbnail-active',
        'dataToggleBtn': '[data-toggle-thumbnail]',
        'hasHoverThumbnail': '[data-hover-thumbnail="true"]'
    };

    init() {
        this.toggleButton = document.querySelector(this.options.dataToggleBtn);

        if (this.toggleButton) {
            this._setCurrentToggleState()
        }
        this._registerEvents()
    }

    /**
     * set current toggle state
     *
     * @private
     */
    _setCurrentToggleState() {
        const value = window.localStorage.getItem('showHoverCover');

        this.toggleButton.checked = value == 'true'

        if (this.toggleButton.checked) {
            this._changeAllProductsThumbnail();
        }
    }

    /**
     * register triggers
     *
     * @private
     */
    _registerEvents() {
        this.el.addEventListener('mouseenter', this._changeProductThumbnail.bind(this))
        this.el.addEventListener('mouseleave', this._changeProductThumbnail.bind(this))

        if (this.toggleButton) {
            this.toggleButton.addEventListener('change', this._changeAllProductsThumbnail.bind(this))
        }
    }

    /**
     * change current cover image on mouseenter or mouseleave
     *
     * @private
     */
    _changeProductThumbnail() {
        if (!this.el.classList.contains(this.options.activeCls)) {
            this.el.classList.add(this.options.activeCls)
        }
        else {
            this.el.classList.remove(this.options.activeCls)
        }
    }

    /**
     * change all cover images
     *
     * @private
     */
    _changeAllProductsThumbnail(showHoverCover) {
        const currentState = showHoverCover !== undefined ? showHoverCover : this.toggleButton.checked

        document.querySelectorAll(this.options.hasHoverThumbnail).forEach(element => {
            if (currentState) {
                element.classList.add(this.options.activeCls)
            }
            else {
                element.classList.remove(this.options.activeCls)
            }
        })

        localStorage.setItem('showHoverCover', currentState)
    }
}
