import {IUser, User} from "./UserModel";

export class UserRepository {

    async create(user: IUser): Promise<IUser> {
        const newUser = await User.create(user);
        return newUser;
    }

    async updateById(user: IUser, id) {
        const newUser = await User.findByIdAndUpdate(id, user)
        return newUser
    }

    async getById(id) {
        const user = await User.findOne({
            _id: id,
            active: true
        });
        return user;
    }

    async deleteById(id) {
        const user = await User.findByIdAndUpdate(id, {active: false});
        return user;
    }

    async activateById(id) {
        const user = await User.findByIdAndUpdate(id, {active: true});
        return user;
    }

}