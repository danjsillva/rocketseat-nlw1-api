import { Context } from 'koa'
import { getRepository } from "typeorm";

import { Items } from '../database/entity/Items'

const index = async function(ctx: Context) {
    try {
        const ItemsRepository = getRepository(Items)
        const items = await ItemsRepository.find()

        ctx.body = items
    } catch (error) {
        throw error
    }
}

const find = async function(ctx: Context) {
    try {
        const ItemsRepository = getRepository(Items)
        const { id } = ctx.params
        const items = await ItemsRepository.findOneOrFail(id)

        ctx.body = items
    } catch (error) {
        throw error
    }
}

const store = async function(ctx: Context) {
    try {
        const ItemsRepository = getRepository(Items)
        const data = ctx.request.body
        const item = await ItemsRepository.save(data)

        ctx.body = item
    } catch (error) {
        throw error
    }
}

const update = async function(ctx: Context) {
    try {
        const ItemsRepository = getRepository(Items)
        const { id } = ctx.params
        const data = ctx.request.body
        await ItemsRepository.update(id, data)

        ctx.body = true
    } catch (error) {
        throw error
    }
}

const remove = async function(ctx: Context) {
    try {
        const ItemsRepository = getRepository(Items)
        const { id } = ctx.params
        await ItemsRepository.delete(id)

        ctx.body = true
    } catch (error) {
        throw error
    }
}

export default { index, find, store, update, remove }