#!/usr/bin/env node
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
const fs = require("fs");
const graphql_ld_1 = require("graphql-ld");
const minimist = require("minimist");
const QueryEngineSparqlEndpoint_1 = require("../lib/QueryEngineSparqlEndpoint");
const args = minimist(process.argv.slice(2));
if (args._.length !== 3 || args.h || args.help) {
    process.stderr.write(`usage: graphql-ld-sparqlendpoint [--help] context query endpoint
  context:  a JSON object, e.g.
            { "hero": "http://example.org/hero", "name": "http://example.org/name" }
            or the path to such a context file
  query:    a GraphQL query, e.g.
            { hero { name } }
            or the path to such a query file
  endpoint: A SPARQL endpoint URL, e.g. http://dbpedia.org/sparql
`);
    process.exit(1);
}
// allow both files as direct JSON objects for context
const context = JSON.parse(fs.existsSync(args._[0]) ? fs.readFileSync(args._[0], 'utf8') : args._[0]);
const query = fs.existsSync(args._[1]) ? fs.readFileSync(args._[1], 'utf8') : args._[1];
const url = args._[2];
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        const client = new graphql_ld_1.Client({ context, queryEngine: new QueryEngineSparqlEndpoint_1.QueryEngineSparqlEndpoint(url) });
        const { data } = yield client.query({ query });
        process.stdout.write(JSON.stringify(data, null, '  '));
    });
}
run();
//# sourceMappingURL=graphql-ld-sparqlendpoint.js.map