export const displayDate = (time) => {
    const newDate = new Date(time).toDateString
    return newDate;
};