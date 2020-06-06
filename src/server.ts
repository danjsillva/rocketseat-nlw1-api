import Koa from 'koa'
import BodyParser from "koa-bodyparser";
import { createConnection } from 'typeorm'

import ErrorMiddleware from "./middlewares/ErrorMiddleware";
import routes from './router'

createConnection()

const app = new Koa()

app.use(BodyParser());
app.use(ErrorMiddleware);
app.use(routes)

app.listen(3333)