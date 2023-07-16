import cors from 'cors';
import express, { Application } from 'express';
// import express, { Application, NextFunction, Request, Response } from 'express'
import globalErrorHandler from './app/middlewares/globalErrorHandler';
// import { UserRoutes } from './app/modules/user/user.route'
// import { AcademicSemesterRoutes } from './app/modules/academicSemester/academicSemester.route'
import routes from './app/routes';
// import ApiError from './errors/ApiErrors'

const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Application routes
// app.use('/api/v1/users/', UserRoutes)
// app.use('/api/v1/academic-semesters/', AcademicSemesterRoutes)

app.use('/api/v1', routes);

// testing perpous

// app.get('/', (req: Request, res: Response, next:NextFunction) => {
//   throw new ApiError(400,'Marattok Custom Error Khaisi Mamu')
//   // next('Marattok next Error Kaisi Mamu')
// })

//asynchronus way

// app.get('/', async(req: Request, res: Response, next:NextFunction) => {
//   Promise.reject((new Error('Unhandle Promise Rejection')))
// })

//synchronus way
// app.get('/', async(req: Request, res: Response, next:NextFunction) => {
//   // console.log(x);
//   throw new Error('Testing Error Logger')
// })

//global error handler
app.use(globalErrorHandler);

export default app;
