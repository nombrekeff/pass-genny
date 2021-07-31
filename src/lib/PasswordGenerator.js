export class PasswordGenerator {
    static upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    static lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz'.split('');
    static symbolsChars = '<>[]{}=?()&%$#@!¡?¿*_-.:;,'.split('');
    static numbersString = '0123456789'.split('');

    constructor(options = {}) {
        this.options = {
            uppercase: true,
            lowercase: true,
            symbols: false,
            numbers: true,
            readable: false,
            length: 12,
            ...options,
        };
    }

    updateOptions(newOptions = {}) {
        this.options = {
            ...this.options,
            ...newOptions,
        };
    }

    random(min = 0, max = 10) {
        return Math.floor(
            Math.random() * (max - min) + min
        );
    }

    generate() {
        let password = '';
        const combinedCaracters = [];

        if (this.options.lowercase)
            combinedCaracters.push(...PasswordGenerator.lowerCaseChars);
        if (this.options.uppercase)
            combinedCaracters.push(...PasswordGenerator.upperCaseChars);
        if (this.options.symbols)
            combinedCaracters.push(...PasswordGenerator.symbolsChars);
        if (this.options.numbers)
            combinedCaracters.push(...PasswordGenerator.numbersString);

        combinedCaracters.sort(() => Math.random() > .5);

        for (let c = 0; c < this.options.length; c++) {
            password += combinedCaracters[this.random(0, combinedCaracters.length)];
        }

        return password;
    }
}