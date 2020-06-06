import { getRepository } from "typeorm"

import { Items } from '../database/entity/Items'

const index = async function() {
    try {
        const ItemsRepository = getRepository(Items)
        const items = await ItemsRepository.find()

        return items
    } catch (error) {
        throw error
    }
}

const find = async function(id: number) {
    try {
        const ItemsRepository = getRepository(Items)
        const item = await ItemsRepository.findOneOrFail(id)

        return item
    } catch (error) {
        throw error
    }
}

const store = async function(data: any) {
    try {
        const ItemsRepository = getRepository(Items)
        const item = await ItemsRepository.save(data)

        return item
    } catch (error) {
        throw error
    }
}

const update = async function(id: number, data: any) {
    try {
        const ItemsRepository = getRepository(Items)

        await ItemsRepository.update(id, data)

        return true
    } catch (error) {
        throw error
    }
}

const remove = async function(id: number) {
    try {
        const ItemsRepository = getRepository(Items)
        await ItemsRepository.delete(id)

        return true
    } catch (error) {
        throw error
    }
}

export default { index, find, store, update, remove }