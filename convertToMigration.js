/**
 * Convert existing Contentful content model to a migration script
 *
 * Past content model 'JSON preview' in const contenModel below
 * Run `node convertToMigration.js`
 * Copy output to your migration file
 * Run migration using `contentful-migration-cli`
 */

const contentModel =  {
  "name": "Person",
  "description": "",
  "displayField": "name",
  "fields": [
    {
      "id": "name",
      "name": "Name",
      "type": "Symbol",
      "localized": false,
      "required": false,
      "validations": [],
      "disabled": false,
      "omitted": false
    },
    {
      "id": "bio",
      "name": "Bio",
      "type": "Text",
      "localized": false,
      "required": false,
      "validations": [],
      "disabled": false,
      "omitted": false
    },
    {
      "id": "image",
      "name": "Image",
      "type": "Link",
      "localized": false,
      "required": false,
      "validations": [
        {
          "linkMimetypeGroup": [
            "image"
          ]
        }
      ],
      "disabled": false,
      "omitted": false,
      "linkType": "Asset"
    },
    {
      "id": "role",
      "name": "Role",
      "type": "Symbol",
      "localized": false,
      "required": false,
      "validations": [
        {
          "in": [
            "dj",
            "host",
            "author"
          ]
        }
      ],
      "disabled": false,
      "omitted": false
    }
  ],
  "sys": {
    "space": {
      "sys": {
        "type": "Link",
        "linkType": "Space",
        "id": "123xyz"
      }
    },
    "id": "person",
    "type": "ContentType",
    "createdAt": "2018-03-22T15:11:54.300Z",
    "updatedAt": "2018-04-17T11:43:49.079Z",
    "environment": {
      "sys": {
        "id": "master",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "createdBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "123xyz"
      }
    },
    "updatedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "123xyz"
      }
    },
    "publishedCounter": 3,
    "version": 6,
    "publishedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "123xyz"
      }
    },
    "publishedVersion": 5,
    "firstPublishedAt": "2018-03-22T15:11:54.729Z",
    "publishedAt": "2018-04-17T11:43:49.079Z"
  }
};

const util = require('util');

const name = contentModel.name;
const id = name.toLowerCase();
const description = contentModel.description;
const fields = contentModel.fields.map(function(item) {
  return item;
});

console.log(`\nmodule.exports = function (migration) {`);
console.log(`  // Create ${id}`);
console.log(`  const ${id} = migration.createContentType('${id}');\n`);

console.log(`  ${id}`);
console.log(`    .name('${name}')`);
console.log(`    .description('${description}');`);

contentModel.fields.forEach(function(item) {
  console.log(`\n  ${id}`);
  console.log(`    .createField('${item.id}')`);
  console.log(`    .name('${item.name}')`);
  console.log(`    .type('${item.type}')`);
  if (item.linkType) {
    console.log(`    .linkType('${item.linkType}')`);
  };
  console.log(`    .localized(${item.localized})`);
  console.log(`    .required(${item.required})`);
  console.log(`    .validations(${util.inspect(item.validations, false, null)})`);
  console.log(`    .disabled(${item.disabled})`);
  console.log(`    .omitted(${item.omitted});`);
});

console.log(`\n};\n`);
