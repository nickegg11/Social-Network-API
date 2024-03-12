const addDateSuffix = date => {
    let dateStr = date.toString();
    // get last character of string
    const lastChar = dateStr.charAt(dateStr.length - 1);
    if (lastChar === '1' && dateStr !== '11') {
        dateStr = `${dateStr}st`;
    } else if (lastChar === '2' && dateStr !== '12') {
        dateStr = `${dateStr}nd`;
    } else if (lastChar === '3' && dateStr !== '13') {
        dateStr = `${dateStr}rd`;
    } else {
        dateStr = `${dateStr}th`;
    }
    return dateStr;
};

// Export the function
module.exports = (
    timestamp,
    { monthLength = 'short', dateSuffix = true } = {}
) => {
    // create month object
    const months = {
        0: monthLength === 'short' ? 'Jan' : 'January',
        1: monthLength === 'short' ? 'Feb' : 'February',
        2: monthLength === 'short' ? 'Mar' : 'March',
        3: monthLength === 'short' ? 'Apr' : 'April',
        4: monthLength === 'short' ? 'May' : 'May',
        5: monthLength === 'short' ? 'Jun' : 'June',
        6: monthLength === 'short' ? 'Jul' : 'July',
        7: monthLength === 'short' ? 'Aug' : 'August',
        8: monthLength === 'short' ? 'Sep' : 'September',
        9: monthLength === 'short' ? 'Oct' : 'October',
        10: monthLength === 'short' ? 'Nov' : 'November',
        11: monthLength === 'short' ? 'Dec' : 'December',
    };

    const dateObj = new Date(this.timestamp);
    const formatMonth = months[dateObj.getMonth()];

    let dayOfMonth = dateSuffix
        ? addDateSuffix(dateObj.getDate())
        : dateObj.getDate();

    const year = dateObj.getFullYear();
    let hour = dateObj.getHours() > 12
        ? Math.floor(dateObj.getHours() - 12)
        : dateObj.getHours();

        // if hour is 0 (12:00am) set it to 12
        if (hour === 0) {
            hour = 12;

        }
        // if minutes are less than 10, add a leading 0 to the minutes
        if (dateObj.getMinutes() < 10) {
            dateObj.getMinutes('0');
        }
        // set am or pm based on the hour
        const periodOfDay = dateObj.getHours() >= 12 ? 'PM' : 'AM';
        const formattedTimeStamp = `${formatMonth} ${dayOfMonth}, ${year} at ${hour}:${dateObj.getMinutes()} ${periodOfDay}`;
        return formattedTimeStamp;
    };

   

    