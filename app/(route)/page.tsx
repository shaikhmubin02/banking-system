import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import React from 'react'

const Home = () => {

  const loggedIn = {firstName: 'Mubin', lastName: 'Shaikh', email: 'shaikhmubin572@gmail.com',
    $id: '0',
    userId: '12',
    dwollaCustomerUrl: '0',
    dwollaCustomerId: '0',
    name: '0',
    address1: '0',
    city: '0',
    state: '0',
    postalCode: '0',
    dateOfBirth:'0',
    ssn: '0',
  };

  return (
    <section className='home'> 
        <div className='home-content'> 
            <header className='home-header'>
                <HeaderBox 
                  type = "greeting"
                  title = "Welcome" 
                  user={loggedIn?.firstName || 'Guest'} 
                  subtext = "Access and manage your account and transactions efficiently."
                />
                <TotalBalanceBox 
                  accounts = {[]} 
                  totalBanks = {1} 
                  totalCurrentBalance  = {15000.50}
                />
            </header>

            RECENET TRANSACTIONS 
        </div>
        <RightSidebar

          user={loggedIn}
          transactions={[]}
          banks={[]}
        />
    </section>
  )
}

export default Home