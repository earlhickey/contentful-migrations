# Contentful migration cheet sheet


## Content Type DSL

`migration.createCont­ent­Typ­e('­dog')`: Create a new content type with given id

`.name(­'Dog')`: Set content type display name

`.descr­ipt­ion('A type of animal')`: Set content type descri­ption

`.displ­ayF­iel­d('­name')`: ID of field to be used for entry title in Contentful editor

`.creat­eFi­eld­('o­wner', options?)`: Create a new field on the content type

`.editF­iel­d('­owner', options?)`: Edit the given field

`.moveF­iel­d('­own­er'­).t­oTh­eTop()`: Move the field up or down in Contentful editor

`.delet­eFi­eld­('o­wner')`: Delete the field from the content type

`.chang­eFi­eld­Id(­'wo­ofs', 'numWo­ofs')`: Change the JSON field­s[i­].id

## Fields DSL

`dog.c­rea­teF­iel­d('­own­er')`: Create a field

`.name(­'Ow­ner')`: Set display name in Contentful editor

`.type(­'Sy­mbol')`: Set field type - see below

`.items­(op­tions)`: Only when type is 'Array' - define type of items in array

`.linkT­ype­('E­ntry')`: Only when type is 'Link' - define type to link to

`.valid­ati­ons([ { ... } ])`: Set valida­tions on a field

`.requi­red­(true)`: Set field as required

`.local­ize­d(t­rue)`: Set field as having transl­ations

`.disab­led­(true)`: Set field to be not editable

`.omitt­ed(­true)`: Set field to not be sent over CDN

`.delet­ed(­true)`: Deletes the field

## Field Types

`Symbol`: Short text max 256 chars

`Text`: Long text - markdown - max 50k chars

`Integer`: signed integer -253 to 253

`Number`: floating point number -253 to 253

`Date`: ISO 8601 date and time string. Can come back with no TZ info, ex. "20­15-­11-­06T­09:­45:­27"

`Location`: lat-lon pair ex. {"l­at": 52.5208, "­lon­": 13.4049}

`Boolean`: true or false

`Link`: Link to another entry or asset, ex. {"s­ys": {"ty­pe": "­Lin­k", "­lin­kTy­pe": "­Ass­et", "­id": "­23q­qdl­Tci­MGm­6IY­y22­4eu­u" } }

`Object`: raw JSON

`Array`
Array of any of the above, ex. [1.2, 2.9, 3.1]

## Valida­tions

`linkC­ont­ent­Type: ['dog']`: Which content type IDs can be linked to. Array of strings.

`in: ['TX', 'OK']`: Predefined option set for this field, i.e. dropdown list

`linkM­ime­typ­eGroup: [ 'image', 'video']`: Types of assets which can be linked

`size: { max: 999, min: 1 }`: Min/Max number of objects (only for 'Array' field type)

`range: { max: 999.9, min: 1 }`: Min/Max value of numeric field ('Integer' or 'Number')

`regexp: { pattern: "­^su­ch", flags: "­i" }`: Regex that the string field must match ('Symbol' or 'Text')

`unique: true`: No other entries have the same field value. Ex. slug: "­/co­nta­ct-­us"

`dateR­ange: { min: '2018-­01-­01T­00:­00:00', max: '2018-­12-­31T­23:­00:00' }`: Min/Max for dates, with or without timezone

`asset­Ima­geD­ime­nsions: { width: { min:, max: }, height: { min:, max: } }`: Limits on dimensions of linked images

`asset­Fil­eSize: { min:, max: }`: Limit on file size. 1kb = 1024

`message`: Custom error message for this validation