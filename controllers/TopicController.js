const Topic = require('../models/Topic')

var TopicController = {
    create: async (req, res) => {
        try{
            var newTopic = new Topic({
                title: req.body.title,
                description: req.body.description,
                link: req.body.link
            })

            await newTopic.save()
            return res.status(201).json({ error:false, message: "Creado"})
        }
        catch(err){
            return res.status(400).json(err)
        }
    },

    deleteTopic: async(req, res) => {
        try{
            var ret = await Topic.findOneAndDelete({title: req.body.title})
            return res.status(200).json({obj: ret})
        }
        catch(err){
            return res.status(400).json(err)
        }
    },

    getAll: async (req, res) => {
        try {
            const { page = 1, limit = 10 } = req.query

            const topics = await Topic.find()
                .limit(limit * 1)
                .skip((page - 1) * limit)
                .exec()

            const count = await Topic.countDocuments()

            return res.status(200).json({
                pages: Math.ceil(count / limit),
                current: page,
                topics
            })
        }
        catch(err) {
            console.log(err)

            return res.status(400).json(err)
        }
    }

}

module.exports = TopicController