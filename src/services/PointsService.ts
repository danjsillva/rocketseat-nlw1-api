import { getRepository, Like, In } from "typeorm"

import { Points } from '../database/entity/Points'

const index = async function(city: string, uf: string, items_ids: string) {
    try {
        const PointsRepository = getRepository(Points)
        const points = await PointsRepository.find({
            where: (qb: any) => {
                if (city) {
                    qb.where({ city: Like(`%${city}%`) })
                }

                if (uf) {
                    qb.where({ uf: Like(`%${uf}%`) })
                }

                if (items_ids) {
                    for (const id of items_ids.split(',')) {
                        qb.where({ items_ids: Like(`%${id}%`) })
                    }
                }
            }
            
        })

        return points
    } catch (error) {
        throw error
    }
}

const show = async function(id: number) {
    try {
        const PointsRepository = getRepository(Points)
        const point = await PointsRepository.findOneOrFail(id)

        return point
    } catch (error) {
        throw error
    }
}

const create = async function(data: any) {
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

const destroy = async function(id: number) {
    try {
        const PointsRepository = getRepository(Points)
        await PointsRepository.delete(id)

        return true
    } catch (error) {
        throw error
    }
}

export default { index, show, create, update, destroy }