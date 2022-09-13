# Generating SPARQL query using graphql query and a JSON-LD context as inputs

## Usage
    graphql-to-sparql <jsonld context file> <graphql query>
    graphql-to-sparql context.jsonld index.qraphql
    
## Example
#### Graphql query
    {
        id (instance: film ) {
            name
            starring(label: "Brad Pitt")
        }
    }

#### JSON-LD context
    {
    "@context": {
        "instance": "http://www.wikidata.org/prop/direct/P31",
        "film": { "@id": "http://www.wikidata.org/entity/Q11424" },
        "title": "http://www.wikidata.org/prop/direct/P1476",
        "starring": "http://www.wikidata.org/prop/direct/P161",
        "label": {"@id": "http://www.w3.org/2000/01/rdf-schema#label", "@language": "en"}
        }
    }

#### The generated SPARQL query
    SELECT ?id ?id_name ?id_starring WHERE {
        ?id <http://www.wikidata.org/prop/direct/P31> <http://www.wikidata.org/entity/Q11424>;
        <http://www.wikidata.org/prop/direct/P1476> ?id_name;
        <http://www.wikidata.org/prop/direct/P161> ?id_starring.
        ?id_starring <http://www.w3.org/2000/01/rdf-schema#label> "Brad Pitt"@en.
    }
