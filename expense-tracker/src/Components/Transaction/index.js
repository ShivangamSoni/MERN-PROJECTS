const Transaction = ({ info, amount }) => {
  return (
    <li className={amount < 0 ? "minus" : "plus"}>
      {info} <span>{amount}</span>
      <button className="delete-btn">&times;</button>
    </li>
  );
};

export default Transaction;
