const Events = require('../../../Models/CRM/Events')


exports.add_events = async (req, res, next) => {
    try {
        const { event_name, event_start, event_end, event_priority} = req.body;

    
            const event = await Events.create({
                event_name: event_name,
                event_start: event_start,
                event_end: event_end,
                event_priority: event_priority,
                user_id : req.user.id
            });

            res.status(201).json(event); 
        
    } catch (error) {
        next(error);
    }
};


exports.update_events = async (req, res, next) => {
    try {
        const id = req.params.id;
        const { event_name, event_start, event_end, event_priority} = req.body;

        const prev_event = Events.findByPk(id);
    
        if (!prev_event) {
            return res.status(404).send('Event not found');
        }

        if(!event_name){
            prev_event.event_name = event_name
        }
        
        if(!event_start){
            prev_event.event_start = event_start
        }
        
        if(!event_end){
            prev_event.event_end = event_end
        }
        
        if(!event_priority){
            prev_event.event_priority = event_priority
        }

        res.status(201).json(prev_event); 
        
    } catch (error) {
        next(error);
    }
};


exports.get_events = async (req, res, next) => {
    try {
            const id = req.user.id;
            const data = await Events.findAll({where : {user_id : id}})
            res.status(201).json(data); 
        
    } catch (error) {
        next(error);
    }
};
