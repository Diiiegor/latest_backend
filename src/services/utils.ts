import bcrypt from 'bcrypt'

export class Utils {
    //Encripta password
    public static async hashPassword(password: string): Promise<string> {
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);
        return hash
    }

    //Compara string de password con password encriptado
    public static async checkPassword(password, hash) {
        const compare = await bcrypt.compare(password, hash)
        return compare;
    }
}