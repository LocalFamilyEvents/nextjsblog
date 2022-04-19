const Price = ({ value }: { value: number }) => {
  const valueString = value
    .toFixed(2)
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");

  return <span>£{valueString}</span>;
};

export default Price;
