import { Context } from 'koa'

import ItemsService from '../services/ItemsService'

const index = async function(ctx: Context) {
    const items = await ItemsService.index()

    ctx.body = items
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

    const item = await ItemsService.show(id)

    ctx.body = item
}

const create = async function(ctx: Context) {
    const data = ctx.request.body

    if (!data) {
        throw {
            status: 400,
            code: "*_REQUIRED",
            message: "* é orbigatório"
        }
    }

    const item = await ItemsService.create(data)

    ctx.body = item
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

    const item = await ItemsService.update(id, data)

    ctx.body = item
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

    const item = await ItemsService.destroy(id)

    ctx.body = item
}

export default { index, show, create, update, destroy }