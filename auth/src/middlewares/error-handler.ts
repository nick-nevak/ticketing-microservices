import { Request, Response, NextFunction } from 'express';
import { CustomError } from '../errors/custom-error';
import { DatabaseConnectionError } from '../errors/database-connection-error';
import { RequestValidationError } from '../errors/request-validation-error';

export function errorHandler(
	err: Error,
	req: Request,
	res: Response,
	next: NextFunction
) {
	if (err instanceof CustomError) {
		res.status(err.statusCode ).send({ message: err.serializeErrors() });
	}
	res.status(400).send({ errors: [{message: 'Something went wrong'}] });
}