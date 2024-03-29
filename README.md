# Query Wikidata with graphQL

### **GraphQL-LD:**
##### Querying the wikidata SPARQL endpoint:

For querying the Wikidata SPARQL endpoint, use the below npm command to install the ***graphql-ld-sparqlendpoint*** package from the forked [project](https://github.com/AnasShahab/GraphQL-LD-SPARQLEndpoint.js-wikidata): 
```sh
npm install -g https://github.com/AnasShahab/GraphQL-LD-SPARQLEndpoint.js-wikidata/tarball/master
```

Usage:
```sh
graphql-ld-sparqlendpoint <your_context.jsonld> <your_query.graphql> https://query.wikidata.org/sparql
```

##### Viewing the generated SPARQL query:

For just viewing the generated SPARQL query, use the below npm command to install the ***graphql-to-sparql*** package from the forked [project](https://github.com/AnasShahab/graphql-to-sparql.js-wikidata): 
```sh
npm install -g https://github.com/AnasShahab/graphql-to-sparql.js-wikidata/tarball/master
```

Usage:
```sh
graphql-to-sparql <your_context.jsonld> <your_query.graphql>
```

Go to the [graphql-ld](https://github.com/AnasShahab/querying-wikidata-with-graphQL/tree/main/graphql-ld) section for usage with examples.

* * *

### HypergraphQL:

Go to the forked [project](https://github.com/AnasShahab/hypergraphql-wikidata) for details on usage with examples.



