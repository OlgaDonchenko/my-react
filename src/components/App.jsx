import PaymentList from "./PaymentList";
import initialPayments from "../payments.json";

export default function App() {
  return (
    <>
      <PaymentList payments={initialPayments} />
    </>
  );
}
