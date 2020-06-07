import { Context } from 'koa'

import PointsService from '../services/PointsService'

const index = async function(ctx: Context) {
    const { city, uf, items_ids } = ctx.request.query
    const points = await PointsService.index(city, uf, items_ids)

    ctx.body = points
}

const show = async function(ctx: Context) {
    const { id } = ctx.params
    
    if (!id) {
        throw {
            status: 400,
            code: "ID_REQUIRED",
            message: "ID é orbigatório"
        }
    }

    const point = await PointsService.show(id)

    ctx.body = point
}

const create = async function(ctx: Context) {
    const data = ctx.request.body

    if (!data) {
        throw {
            status: 400,
            code: "ALL_FIELDS_REQUIRED",
            message: "Todos os campos são orbigatórios"
        }
    }

    const point = await PointsService.create(data)

    ctx.body = point
}

const update = async function(ctx: Context) {
    const { id } = ctx.params
    
    if (!id) {
        throw {
            status: 400,
            code: "ID_REQUIRED",
            message: "ID é orbigatório"
        }
    }

    const data = ctx.request.body

    if (!data) {
        throw {
            status: 400,
            code: "ALL_FIELDS_REQUIRED",
            message: "Todos os campos são orbigatórios"
        }
    }

    const point = await PointsService.update(id, data)

    ctx.body = point
}

const destroy = async function(ctx: Context) {
    const { id } = ctx.params
    
    if (!id) {
        throw {
            status: 400,
            code: "ID_REQUIRED",
            message: "ID é orbigatório"
        }
    }

    const point = await PointsService.destroy(id)

    ctx.body = point
}

export default { index, show, create, update, destroy }