export const readableDate = (date: string) => {
   const inputDate = new Date(date);

   // Exctract individual date components
   const day = inputDate.getDate();
   const month = inputDate.getMonth() + 1;
   const year = inputDate.getFullYear();

   // Create formatted string
   const formattedDate = `${day}-${month < 10 ? '0': ''}${month}-${year}`;

   return formattedDate;
}