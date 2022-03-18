import { useContext } from "react";
import GlobalContext from "../../Context/GlobalState";
import Transaction from "../Transaction";

const TransactionList = () => {
  const {
    state: { transactions },
  } = useContext(GlobalContext);

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((transaction) => (
          <Transaction key={transaction.id} info={transaction.info} amount={transaction.amount} />
        ))}
      </ul>
    </>
  );
};

export default TransactionList;
