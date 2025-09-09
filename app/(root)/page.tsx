import HeaderBox from "@/components/HeaderBox";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import RightSideBar from "@/components/RightSideBar"


const Home = () => {
  const loggedIn = {
    firstName: 'Agent',
    familyName: 'Krasnov',
    email: 'mail@gmail.com'
  }


  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || 'Guest'}
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


export default Home