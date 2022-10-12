"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const fetch_sparql_endpoint_1 = require("fetch-sparql-endpoint");
const sparqlalgebrajs_1 = require("sparqlalgebrajs");
const stringifyStream = require("stream-to-string");
/**
 * Allows a SPARQL endpoint to be used by URL as a GraphQL-LD query engine.
 */
class QueryEngineSparqlEndpoint {
    constructor(url, fetcherOptions) {
        this.fetcher = new fetch_sparql_endpoint_1.SparqlEndpointFetcher(fetcherOptions);
        this.url = url;
    }
    query(query, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryString = sparqlalgebrajs_1.toSparql(query);
            const responseStream = (yield this.fetcher.fetchRawStream(this.url, queryString, fetch_sparql_endpoint_1.SparqlEndpointFetcher.CONTENTTYPE_SPARQL_JSON))[1];
            let output = yield stringifyStream(responseStream);
            // Replace invalid JSON characters, which can occur for some endpoints.
            output = output.replace(/\x1a/g, ' ');
            return JSON.parse(output);
        });
    }
}
exports.QueryEngineSparqlEndpoint = QueryEngineSparqlEndpoint;
//# sourceMappingURL=QueryEngineSparqlEndpoint.js.map