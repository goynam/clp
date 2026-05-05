import {type SearchResultsMetadataDocument} from "@webui/common/metadata";
import {
    FastifyBaseLogger,
    FastifyInstance,
} from "fastify";
import type {
    Collection,
    Db,
} from "mongodb";


/**
 * The maximum number of results to retrieve for a search.
 * Configured via the SEARCH_MAX_NUM_RESULTS environment variable (default: 1000).
 */
let SEARCH_MAX_NUM_RESULTS = 1000;

/**
 * Sets the max number of search results from the fastify config.
 * @param maxResults
 */
const setSearchMaxNumResults = (maxResults: number) => {
    SEARCH_MAX_NUM_RESULTS = maxResults;
};

type UpdateSearchSignalWhenJobsFinishProps = {
    aggregationJobId: number;
    logger: FastifyBaseLogger;
    mongoDb: Db;
    queryJobDbManager: FastifyInstance["QueryJobDbManager"];
    searchJobId: number;
    searchResultsMetadataCollection: Collection<SearchResultsMetadataDocument>;

};

type CreateMongoIndexesProps = {
    searchJobId: number;
    logger: FastifyBaseLogger;
    mongoDb: Db;
};

export {
    CreateMongoIndexesProps,
    SEARCH_MAX_NUM_RESULTS,
    SearchResultsMetadataDocument,
    setSearchMaxNumResults,
    UpdateSearchSignalWhenJobsFinishProps,
};
