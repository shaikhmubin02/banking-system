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
          banks={[{currentBalance: 14000.00,id: '0',
            availableBalance: 123,
            officialName: '0',
            mask: '0',
            institutionId: '0',
            name: '0',
            type: '0',
            subtype: '0',
            appwriteItemId: '0',
            shareableId: '0',$id: '0',
            accountId: '0',
            bankId: '0',
            accessToken: '0',
            fundingSourceUrl: '0',
            userId: '0'},
            {currentBalance: 150.00,id: '0',
            availableBalance: 123,
            officialName: '0',
            mask: '0',
            institutionId: '0',
            name: '0',
            type: '0',
            subtype: '0',
            appwriteItemId: '0',
            shareableId: '0',
            $id: '0',
            accountId: '0',
            bankId: '0',
            accessToken: '0',
            fundingSourceUrl: '0',
            userId: '0'}]}
        />
    </section>
  )
}

export default Home