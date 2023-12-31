export const formatDate = (date: Date): string => {
  const year = date.getFullYear();
  const mounth: number = date.getMonth() + 1; // Months start at 0!
  const day: number = date.getDate();

  let dd: string;
  let mm: string;
  if (day < 10) {
    dd = "0" + day.toString();
  } else {
    dd = day.toString();
  }
  if (mounth < 10) {
    mm = "0" + mounth.toString();
  } else {
    mm = mounth.toString();
  }

  return dd + "/" + mm + "/" + year.toString();
};
