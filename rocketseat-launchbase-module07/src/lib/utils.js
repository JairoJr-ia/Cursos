module.exports = {
    date(timestamp) {
        const date = new Date(timestamp)

        const year = date.getFullYear()
        const month = `0${date.getMonth() + 1}`.slice(-2)
        const day = `0${date.getDate()}`.slice(-2)
        const hour = date.getHours()
        const minutes = date.getMinutes()

        return {
            day,
            month,
            year,
            hour,
            minutes,
            iso: `${year}-${month}-${day}`,
            birthDay: `${day}-${month}`,
            format: `${day}/${month}/${year}`,
        }

    },

    bloodConverter(blood) {
        if (blood == 'A1') return 'A+'
        else if (blood == 'A0') return 'A-'
        else if (blood == 'B1') return 'B+'
        else if (blood == 'B0') return 'B-'
        else if (blood == 'AB1') return 'AB+'
        else if (blood == 'AB0') return 'AB-'
        else if (blood == 'O1') return 'O+'
        else if (blood == 'O0') return 'O-'

    },
    formatPrice(price){
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(price/100)
    }
}