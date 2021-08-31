import bcrypt from 'bcrypt'

export class Utils {
    public static async hashPassword(password: string): Promise<string> {
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);
        return hash
    }
}