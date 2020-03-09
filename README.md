# read-json-property-action

## example

```
- name: Read Properties
  id: read_property
  uses:  ashley-taylor/read-json-property-action@v1.0
  with:
    path: options.json
    property: artifact
- name: echo artifact
  run: echo ${{ steps.read_property.outputs.value }}
```
