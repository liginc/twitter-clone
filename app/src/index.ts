import "reflect-metadata";
import { createConnection, getRepository, Repository } from "typeorm";
import { User } from "./entity/User";

const createUser = async (userRepository: Repository<User>) => {
    console.log('### Create ###')

    await userRepository.insert({
        name: 'Taro',
        display_name: 'taro_display',
        email: 'taro@example.com'
    })

    await userRepository.save({
        name: 'Jiro',
        display_name: 'jiro_display',
        email: 'jiro@example.com'
    })
}

const readUser = async (userRepository: Repository<User>) => {
    console.log('### Read ###')
    
    const users = await userRepository.find()
    console.log(`All Users: ${JSON.stringify(users)}`)

    const user = await userRepository.findOne({ name: 'Taro' })
    console.log(`Select User: ${JSON.stringify(user)}`)
}

const updateUser = async (userRepository: Repository<User>) => {
    console.log('### Update ###')

    await userRepository.update({ name: 'Taro' }, { email: 'taro1@example.com' })

    const userTaro = await userRepository.findOne({ name: 'Taro' })
    if (userTaro !== undefined) {
        userTaro.email = 'taro2@example.com'
        await userRepository.save(userTaro)
    }

    const users = await userRepository.find()
    console.log(`All Users: ${JSON.stringify(users)}`)
}

const deleteUser = async (userRepository: Repository<User>) => {
    console.log('### Delete ###')

    const userTaro = await userRepository.findOne({ name: 'Taro' })
    if (userTaro !== undefined) {
        await userRepository.remove(userTaro)
    }

    const users = await userRepository.find()
    console.log(`All Users: ${JSON.stringify(users)}`)
}

(async () => {
    const connection = await createConnection()

    const userRepository = getRepository(User)
    await createUser(userRepository)
    await readUser(userRepository)
    await updateUser(userRepository)
    await deleteUser(userRepository)

    await connection.close()
})()