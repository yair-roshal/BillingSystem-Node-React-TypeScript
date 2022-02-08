let express = require('express'),
    router = express.Router();

let clientSchema = require('../models/Client');

router.post('/create-client', (req, res, next) => {
    clientSchema.create(req.body, (error, data) => {
        if (error) {
            return next(error);
        } else {
            console.log(data);
            res.json(data);
        }
    });
});

router.get('/', (req, res) => {
    clientSchema.find((error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
        }
    });
});

router
    .route('/update-client/:id')
    .get((req, res) => {
        clientSchema.findById(req.params.id, (error, data) => {
            if (error) {
                return next(error);
            } else {
                res.json(data);
            }
        });
    })

.put((req, res, next) => {
    clientSchema.findByIdAndUpdate(
        req.params.id, {
            $set: req.body,
        },
        (error, data) => {
            if (error) {
                return next(error);
                console.log(error);
            } else {
                res.json(data);
                console.log('Client updated successfully !');
            }
        },
    );
});

router.delete('/delete-client/:id', (req, res, next) => {
    clientSchema.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data,
            });
        }
    });
});

module.exports = router;