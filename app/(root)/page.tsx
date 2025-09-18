import HeaderBox from "@/components/HeaderBox";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import RightSideBar from "@/components/RightSideBar"
import { getLoggedInUser } from "@/lib/actions/user.actions";


export default async function Home() {
  const loggedIn = await getLoggedInUser()
  console.log(loggedIn);
  

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.name || 'Guest'}
            subtext="Manage your money efficiently"
          />
          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250}
          ></TotalBalanceBox>

        </header>
      </div>
      <RightSideBar
        user={loggedIn}
      ></RightSideBar>

    </section>
  )
}


