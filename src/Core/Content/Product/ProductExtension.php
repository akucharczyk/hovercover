<?php

declare(strict_types=1);

namespace Antoni\HoverCover\Core\Content\Product;

use Shopware\Core\Content\Product\ProductDefinition;
use Shopware\Core\Framework\DataAbstractionLayer\EntityExtensionInterface;
use Shopware\Core\Framework\DataAbstractionLayer\Field\Flag\Inherited;
use Shopware\Core\Framework\DataAbstractionLayer\Field\FkField;
use Shopware\Core\Framework\DataAbstractionLayer\Field\ManyToOneAssociationField;
use Shopware\Core\Framework\DataAbstractionLayer\FieldCollection;
use Shopware\Core\Content\Product\Aggregate\ProductMedia\ProductMediaDefinition;

class ProductExtension implements EntityExtensionInterface
{
    public function extendFields(FieldCollection $collection): void
    {
        $collection->add(
            (new FkField('product_hover_media_id', 'hoverCoverId', ProductMediaDefinition::class))
                ->addFlags(new Inherited())
        );

        $collection->add(
            (new ManyToOneAssociationField('hover_cover', 'product_hover_media_id', ProductMediaDefinition::class, 'id'))
                ->addFlags(new Inherited())
        );
    }

    public function getDefinitionClass(): string
    {
        return ProductDefinition::class;
    }
}
