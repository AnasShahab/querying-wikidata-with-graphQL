# Using graphql-ld to query Wikidata
## Example:
### We want to find all the cats that have a name, sex, birth date and birth place
##### query.graphql
    query {
        id(instance: cat) @single(scope: all) {
            id
            name
            sex
            birthDate
            birthPlace
        }
    }

##### context.jsonld
    {
        "@context": {
        "@vocab":"http://www.wikidata.org/entity/",
        "wd": "http://www.wikidata.org/entity/",
        "wdt" :"http://www.wikidata.org/prop/direct/",
        "name": "wdt:P735",
        "cat": "wd:Q146",
        "instance": "wdt:P31",
        "sex": "wdt:P21",
        "birthDate":"wdt:P569",
        "birthPlace":"wdt:P19",
        "chemicalElement": "wd:Q11344",
        "chemicalFormula": "wdt:P274",
        "boilingPoint": "wdt:P2102",
        "meltingPoint": "wdt:P2101",
        "density": "wdt:P2054",
        "discoverer": "wdt:P61",
        "placeBirth": "wdt:P19",
        "country": "wdt:P17"
        }
    }

#### Run the tool ***graphql-to-sparql*** to see the generated query
```sh
graphql-to-sparql context.jsonld query.qraphql
```
##### The generated SPARQL query
    SELECT ?id ?id_id ?id_sex ?id_birthDate ?id_name ?id_birthPlace WHERE {
      ?id_id <http://www.wikidata.org/prop/direct/P31> <http://www.wikidata.org/entity/Q146>;
        <http://www.wikidata.org/prop/direct/P21> ?id_sex;
        <http://www.wikidata.org/prop/direct/P569> ?id_birthDate;
        <http://www.wikidata.org/prop/direct/P735> ?id_name;
        <http://www.wikidata.org/prop/direct/P19> ?id_birthPlace.
    }


#### Run the tool ***graphql-ld-sparqlendpoint*** to query the Wikidata SPARQL endpoint
```sh
graphql-ld-sparqlendpoint context.jsonld query.qraphql https://query.wikidata.org/sparql
```
#### Output query result in JSON format
    [
      {
        "id": {
          "id": "http://www.wikidata.org/entity/Q677525",
          "birthPlace": "http://www.wikidata.org/entity/Q30",
          "birthDate": "1950-01-01T00:00:00.000Z",
          "name": "http://www.wikidata.org/entity/Q37564734",
          "sex": "http://www.wikidata.org/entity/Q44148"
        }
      },
      {
        "id": {
          "id": "http://www.wikidata.org/entity/Q893453",
          "birthPlace": "http://www.wikidata.org/entity/Q183",
          "birthDate": "1940-01-01T00:00:00.000Z",
          "name": "http://www.wikidata.org/entity/Q1951683",
          "sex": "http://www.wikidata.org/entity/Q44148"
        }
      },
      {
        "id": {
          "id": "http://www.wikidata.org/entity/Q14916910",
          "birthPlace": "http://www.wikidata.org/entity/Q55",
          "birthDate": "2011-01-01T00:00:00.000Z",
          "name": "http://www.wikidata.org/entity/Q18048119",
          "sex": "http://www.wikidata.org/entity/Q44148"
        }
      }
    ]
