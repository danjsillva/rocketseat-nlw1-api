import { Context } from 'koa'

import PointsService from '../services/PointsService'

const index = async function(ctx: Context) {
    const points = await PointsService.index()

    ctx.body = points
}

const find = async function(ctx: Context) {
    const { id } = ctx.params
    
    if (!id) {
        throw {
            status: 400,
            code: "ID_REQUIRED",
            message: "ID é orbigatório"
        }
    }

    const point = await PointsService.find(id)

    ctx.body = point
}

const store = async function(ctx: Context) {
    const data = ctx.request.body

    if (!data) {
        throw {
            status: 400,
            code: "*_REQUIRED",
            message: "* é orbigatório"
        }
    }

    const point = await PointsService.store(data)

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
            code: "*_REQUIRED",
            message: "* é orbigatório"
        }
    }

    const point = await PointsService.update(id, data)

    ctx.body = point
}

const remove = async function(ctx: Context) {
    const { id } = ctx.params
    
    if (!id) {
        throw {
            status: 400,
            code: "ID_REQUIRED",
            message: "ID é orbigatório"
        }
    }

    const point = await PointsService.remove(id)

    ctx.body = point
}

export default { index, find, store, update, remove }