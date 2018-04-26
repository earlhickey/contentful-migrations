// Convert existing Contentful content model to a migration script

const contentModel =  'Content model JSON preview';

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
  if (item.type === 'Array') {
    console.log(`    .items(`);
    console.log(`      ${util.inspect(item.items, false, null).replace(/\r?\n|\r/g, "")}`);
    console.log(`    )`);
  };
  console.log(`    .localized(${item.localized})`);
  console.log(`    .required(${item.required})`);
  console.log(`    .validations(${util.inspect(item.validations, false, null)})`);
  console.log(`    .disabled(${item.disabled})`);
  console.log(`    .omitted(${item.omitted});`);
});

console.log(`\n};\n`);
