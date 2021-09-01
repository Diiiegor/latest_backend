import {IUser, User} from "./UserModel";

export class UserRepository {

    async create(user: IUser): Promise<IUser> {
        const newUser = await User.create(user);
        return newUser;
    }

    async updateById(user: IUser, id) {
        await User.findByIdAndUpdate(id, user)
        const newUser = await User.findById(id);
        return newUser
    }

    async getById(id) {
        const user = await User.findOne({
            active: true,
            _id: id
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

    async getByEmail(email: string) {
        const user = await User.findOne({email: email})
        return user;
    }

}