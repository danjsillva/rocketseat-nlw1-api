import { getRepository } from "typeorm"

import { Points } from '../database/entity/Points'

const index = async function() {
    try {
        const PointsRepository = getRepository(Points)
        const points = await PointsRepository.find()

        return points
    } catch (error) {
        throw error
    }
}

const find = async function(id: number) {
    try {
        const PointsRepository = getRepository(Points)
        const point = await PointsRepository.findOneOrFail(id)

        return point
    } catch (error) {
        throw error
    }
}

const store = async function(data: any) {
    try {
        const PointsRepository = getRepository(Points)
        const point = await PointsRepository.save(data)

        return point
    } catch (error) {
        throw error
    }
}

const update = async function(id: number, data: any) {
    try {
        const PointsRepository = getRepository(Points)

        await PointsRepository.update(id, data)

        return true
    } catch (error) {
        throw error
    }
}

const remove = async function(id: number) {
    try {
        const PointsRepository = getRepository(Points)
        await PointsRepository.delete(id)

        return true
    } catch (error) {
        throw error
    }
}

export default { index, find, store, update, remove }