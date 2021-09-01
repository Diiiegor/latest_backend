import bcrypt from 'bcrypt'

export class Utils {
    public static async hashPassword(password: string): Promise<string> {
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);
        return hash
    }

    public static async checkPassword(password, hash) {
        const compare = await bcrypt.compare(password, hash)
        return compare;
    }
}