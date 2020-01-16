const Dev = require('../models/Dev');
const ParseStringAsArray = require('../utils/ParseStringAsArray');

module.exports = {
  async index (req, res){
    //buscar todos os devs em um raio de 10Km
    //Filtro por tecnologias
    const { latitude, logitude, techs} = req.query;

    const techsArray = ParseStringAsArray(techs);
    console.log(techsArray);
    const devs = await Dev.find({
      techs:{
        $in: techsArray,
      },
      location:{
        $near: {
          $geometry:{
            type: 'Point',
            coordinates: [logitude, latitude],
          },
          $maxDistance: 10000,
        },
      },
    });

    return res.json({devs});

  }
}