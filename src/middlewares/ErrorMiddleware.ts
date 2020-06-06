import { Context, Next } from 'koa'

const ErrorMiddleware = async (ctx: Context, next: Next) => {
  try {
    await next();
  } catch (error) {
    console.log(error);

    ctx.status = error.status || 500;
    ctx.body = {
      status: error.status || 500,
      code: error.code || "INTERNAL_SERVER_ERROR",
      message: error.message || "Ocorreu um erro inesperado"
    };
  }
};

export default ErrorMiddleware;