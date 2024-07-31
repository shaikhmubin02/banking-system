import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import { getLoggedInUser } from '@/lib/actions/user.actions';
import React from 'react'

const Home = async () => {

  const loggedIn = await getLoggedInUser();

  return (
    <section className='home'> 
        <div className='home-content'> 
            <header className='home-header'>
                <HeaderBox 
                  type = "greeting"
                  title = "Welcome" 
                  user={loggedIn?.name || 'Guest'} 
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
            name: 'MUBIN SHAIKH',
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
            name: 'MOHAMMAD SHAIKH',
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