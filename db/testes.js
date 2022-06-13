const knex = require('./knex');

function addTest(test) {
  return knex("test_record").insert(test);
}

function allTests() {
  return knex("test_record").select("*");
}

function selectTest(id) {
  return knex("test_record").select('*').where('test_record.ID record', id)
}

function deleteTest(id) {
  return knex("test_record").del().where('test_record.ID record', id)
}

module.exports = {
  addTest,
  allTests,
  selectTest,
  deleteTest
}