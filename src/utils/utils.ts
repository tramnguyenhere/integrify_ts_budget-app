export const dateFormatter = (fullDate: Date) => {
    const month = monthFormatter(fullDate?.getMonth())
    const date = fullDate?.getDate()
    const dayOfWeek = dayOfWeekFormatter(fullDate?.getDay())
    const year = fullDate?.getFullYear()
    return `${dayOfWeek} ${month} ${date} ${year}`
}

export const dayOfWeekFormatter = (dayofWeek: number) => {
    switch (dayofWeek) {
        case 1: 
            return 'Mon'
        case 2: 
            return 'Tue'
        case 3: 
            return 'Wed'
        case 4:
            return 'Thurs'
        case 5:
            return 'Fri'
        case 6:
            return 'Sat'
        case 0: 
            return 'Sun'
        default:
            console.error('Day of Week format is wrong'); 
            break
    }
}

export const monthFormatter = (month: number) => {
    switch (month) {
        case 1: 
            return 'Jan'
        case 2: 
            return 'Feb'
        case 3: 
            return 'Mar'
        case 4:
            return 'Apr'
        case 5:
            return 'May'
        case 6:
            return 'Jun'
        case 7: 
            return 'Jul'
        case 8: 
            return 'Aug'
        case 9: 
            return 'Sep'
        case 10: 
            return 'Oct'
        case 11: 
            return 'Nov'
        case 12: 
            return 'Dec'
        default:
            console.error('Month format is wrong');
            break
    }
}