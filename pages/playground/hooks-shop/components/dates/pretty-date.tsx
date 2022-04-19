type PrettyDateProps = {
  date: Date
}

const PrettyDate = ({ date }: PrettyDateProps ) => {
  console.log(date);
  const dateString = date.toDateString();

  return (
      <span>{dateString}</span>
  );
};

export default PrettyDate;
