import { Context } from 'koa'
import { getRepository } from "typeorm";

import { Points } from '../database/entity/Points'

const index = async function(ctx: Context) {
    try {
        const PointsRepository = getRepository(Points)
        const points = await PointsRepository.find()

        ctx.body = points
    } catch (error) {
        console.error

        ctx.body = error
    }
}

const find = async function(ctx: Context) {
    try {
        const PointsRepository = getRepository(Points)
        const { id } = ctx.params
        const points = await PointsRepository.findOneOrFail(id)

        ctx.body = points
    } catch (error) {
        console.error

        ctx.body = error
    }
}

const store = async function(ctx: Context) {
    try {
        const PointsRepository = getRepository(Points)
        const data = ctx.request.body
        const point = await PointsRepository.save(data)

        ctx.body = point
    } catch (error) {
        console.error

        ctx.body = error
    }
}

const update = async function(ctx: Context) {
    try {
        const PointsRepository = getRepository(Points)
        const { id } = ctx.params
        const data = ctx.request.body
        await PointsRepository.update(id, data)

        ctx.body = true
    } catch (error) {
        console.error

        ctx.body = error
    }
}

const remove = async function(ctx: Context) {
    try {
        const PointsRepository = getRepository(Points)
        const { id } = ctx.params
        await PointsRepository.delete(id)

        ctx.body = true
    } catch (error) {
        console.error

        ctx.body = error
    }
}

export default { index, find, store, update, remove }