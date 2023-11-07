import AccountUser from "./AccountUser"

const AccountPage = () => {
  return (
    <div className='page_account'>
      <main className="main bg-dark">
        <AccountUser
          accountType="Checking"
          accountNumber="x8349"
          amount="$2,082.79"
          description="Available Balance"
        />
        <AccountUser
          accountType="Savings"
          accountNumber="x6712"
          amount="$10,928.42"
          description="Available Balance"
        />
        <AccountUser
          accountType="Credit Card"
          accountNumber="x8349"
          amount="$184.30"
          description="Current Balance"
        />
      </main>
    </div>
  );
};

export default AccountPage;