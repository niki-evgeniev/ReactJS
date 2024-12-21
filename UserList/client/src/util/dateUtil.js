export const formatDate = (dateString) => {
   
    const date = new Date(dateString);
    const dateOpt = { year: 'numeric', month: 'long', day: 'numeric' };
    const formatedDate = date.toLocaleDateString('en-US', dateOpt);
    console.log(formatedDate);
    return formatedDate;
}
