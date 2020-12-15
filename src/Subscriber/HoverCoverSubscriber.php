<?php

namespace Antoni\HoverCover\Subscriber;

use Shopware\Core\Content\Product\Events\ProductListingCriteriaEvent;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;

class HoverCoverSubscriber implements EventSubscriberInterface
{
    public static function getSubscribedEvents(): array
    {
        return [
            ProductListingCriteriaEvent::class => 'handleListingRequest'
        ];
    }

    public function handleListingRequest(ProductListingCriteriaEvent $event): void
    {
        $criteria = $event->getCriteria();

        $criteria->addAssociations(['cover.media', 'hover_cover.media']);
    }
}
