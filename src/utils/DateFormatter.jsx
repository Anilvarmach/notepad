// Get the current date and time
const currentDate = new Date();

export const displayDateFormatter = () => {
    // Define arrays for month names and suffixes for days
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const daySuffixes = ['st', 'nd', 'rd', 'th'];

    // Get the day of the month
    const day = currentDate.getDate();
    let daySuffix = daySuffixes[3]; // Default to "th"
    if (day >= 1 && day <= 3) {
        daySuffix = daySuffixes[day - 1];
    }

    // Get the month's name
    const month = months[currentDate.getMonth()];

    // Get the year, hours, and minutes
    const year = currentDate.getFullYear();
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();

    // Determine AM or PM
    const amOrPm = hours >= 12 ? 'pm' : 'am';

    // Convert to 12-hour format
    const hours12 = hours % 12 || 12;

    // Construct the formatted date and time
    return `${day}${daySuffix} ${month} ${year}, ${hours12}:${minutes.toString().padStart(2, '0')} ${amOrPm}`;
};

export const dateFormatter = () => {
    const day = currentDate.getDate().toString().padStart(2, '0');
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    const year = currentDate.getFullYear();
    return `${day}-${month}-${year}`;
};
