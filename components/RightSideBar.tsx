


const RightSideBar = ({ user }:RightSidebarProps) => {
    return (
        <aside className='right-sidebar'>
            <section className="flex flex-col pb-8">
                <div className="profile-banner" />
                <div className="profile">
                    <div className="profile-img">
                        <span className="text-5xl font-bold text-blue-500">{user?.name[0]}</span>
                    </div>
                </div>
                <div className="profile-details p-5">
                    <h1 className='profile-name'>
                        {user?.name}
                        
                    </h1>
                    <p className="profile-email">
                        {user?.email}
                    </p>
                </div>
                
            </section>
            <section>

                
            </section>

        </aside >)

}


export default RightSideBar