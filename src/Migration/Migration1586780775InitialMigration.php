<?php declare(strict_types=1);

namespace Antoni\HoverCover\Migration;

use Doctrine\DBAL\Connection;
use Shopware\Core\Framework\Migration\MigrationStep;

class Migration1586780775InitialMigration extends MigrationStep
{
    public function getCreationTimestamp(): int
    {
        return 1586780775;
    }

    public function update(Connection $connection): void
    {
        $connection->executeQuery(
        'ALTER TABLE `product` ADD(`hover_cover` BINARY(16) NULL, `product_hover_media_id` BINARY(16) NULL)'
        );
    }

    public function updateDestructive(Connection $connection): void
    {
        $connection->executeQuery(
            'ALTER TABLE product DROP COLUMN hover_cover DROP COLUMN product_hover_media_id'
        );
    }
}
