<?php

namespace Antoni\HoverCover\Entity;

use Shopware\Core\Content\Product\ProductEntity;
use Shopware\Core\Content\Product\Aggregate\ProductMedia\ProductMediaEntity;

class HoverProductEntity extends ProductEntity
{
    /**
     * @var string|null
     */
    protected $hoverCoverId;

    /**
     * @var ProductMediaEntity|null
     */
    protected $hoverCover;

    /**
     * @return string|null
     */
    public function getHoverCoverId(): ?string
    {
        return $this->hoverCoverId;
    }

    /**
     * @param string|null $hoverCoverId
     */
    public function setHoverCoverId(?string $hoverCoverId): void
    {
        $this->hoverCoverId = $hoverCoverId;
    }

    /**
     * @return ProductMediaEntity|null
     */
    public function getHoverCover(): ?ProductMediaEntity
    {
        return $this->hoverCover;
    }

    /**
     * @param ProductMediaEntity|null $hoverCover
     */
    public function setHoverCover(?ProductMediaEntity $hoverCover): void
    {
        $this->hoverCover = $hoverCover;
    }
}
