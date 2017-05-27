"use strict"
module.exports = function(app) {
  app.dataSources.hol.automigrate('Kids', function(err) {
    if (err) throw err;

    // app.models.Kids.create([{
    //   name: 'Bel Cafe',
    //   age: 12,
    //   sex: 'f'
    // }, {
    //   name: 'Three Bees Coffee House',
    //   age: 25,
    //   sex: 'f'
    // }, {
    //   name: 'Caffe Artigiano',
    //   age: 33,
    //   sex: 'm'
    // }, ], function(err, kidsData) {
    //   if (err) throw err;
    //   console.log('Models created: \n', kidsData);
    // });
  });
};