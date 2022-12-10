import {Request, Response, NextFunction} from 'express';
import * as Joi from 'joi';

const ValidaSchema = async (req: Request, res: Response, next: NextFunction, schema: Joi.ObjectSchema) => {
    try {
        const { error } = schema.validate(req.body);
        if (error) {
            res.status(400).json({
                susses: false,
                mgs: "Invalid request data: " + error
            });
            return;
        }
        next();
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            mgs: 'Internal server error',
        });
    }
}

export {ValidaSchema};
