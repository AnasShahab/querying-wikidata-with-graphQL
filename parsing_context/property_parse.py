# pip install sparqlwrapper
# https://rdflib.github.io/sparqlwrapper/
import sys
from SPARQLWrapper import SPARQLWrapper, JSON
import json

endpoint_url = "https://query.wikidata.org/sparql"

query = """SELECT ?id ?idLabel
WITH { SELECT ?id ?type WHERE {
    ?id a wikibase:Property .
  }
} AS %properties
WHERE {
  INCLUDE %properties .
  SERVICE wikibase:label { bd:serviceParam wikibase:language "en" .
    ?id rdfs:label ?idLabel .
  }
}"""

def get_results(endpoint_url, query):
    user_agent = "WDQS-example Python/%s.%s" % (sys.version_info[0], sys.version_info[1])
    sparql = SPARQLWrapper(endpoint_url, agent=user_agent)
    sparql.setQuery(query)
    sparql.setReturnFormat(JSON)
    return sparql.query().convert()

#results is a dictionary
results = get_results(endpoint_url, query)
# print(results)

my_dict={}

for result in results["results"]["bindings"]:
    # print(result['idLabel']['value'], end=" ")
    my_key=result['idLabel']['value']
    # print(result['id']['value'], end='\n')
    my_value=result['id']['value']
    my_dict[my_key]=my_value

with open('output_property_parse.json', 'w', encoding='utf-8') as f1:
    json.dump(my_dict, f1, ensure_ascii=False, indent=4)