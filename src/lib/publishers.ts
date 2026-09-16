/**
 * Publisher lookup helpers used by Astro pages when reading static data from the
 * local SQLite database during build-time rendering.
 */

import { asc } from 'drizzle-orm';
import { publishers } from '../../db/schema';
import type { Database } from './db';

export type Publisher = {
    id: number;
    name: string;
};

/**
 * Fetches every publisher record in name order.
 *
 * @param db The shared database instance used to query the SQLite schema.
 * @returns A list of publishers sorted alphabetically by name.
 */
export async function getAllPublishers(db: Database): Promise<Publisher[]> {
    return db
        .select({
            id: publishers.id,
            name: publishers.name,
        })
        .from(publishers)
        .orderBy(asc(publishers.name));
}
