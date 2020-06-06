import { Context } from 'koa'

import ItemsService from '../services/ItemsService'

const index = async function(ctx: Context) {
    const items = await ItemsService.index()

    ctx.body = items
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

    const item = await ItemsService.find(id)

    ctx.body = item
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

    const item = await ItemsService.store(data)

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

const remove = async function(ctx: Context) {
    const { id } = ctx.params
    
    if (!id) {
        throw {
            status: 400,
            code: "ID_REQUIRED",
            message: "ID é orbigatório"
        }
    }

    const item = await ItemsService.remove(id)

    ctx.body = item
}

export default { index, find, store, update, remove }