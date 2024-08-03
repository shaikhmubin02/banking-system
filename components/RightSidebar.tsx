"use client"

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import BankCard from './BankCard';
import { countTransactionCategories } from '@/lib/utils';
import Category from './Category';

const RightSidebar = ({ user, transactions, banks }: RightSidebarProps) => {
  // Initialize state with banks and their card types
  const [bankCards, setBankCards] = useState([
    { ...banks[0], cardType: 'mastercard' },
    { ...banks[1], cardType: 'visa' }
  ]);

  const categories: CategoryCount[] = countTransactionCategories(transactions);

  const swapCards = () => {
    setBankCards([bankCards[1], bankCards[0]]);
  };

  return (
    <aside className="right-sidebar">
      <section className="flex flex-col pb-8">
        <div className="profile-banner" />
        <div className="profile">
          <div className="profile-img">
            <span className="text-5xl font-bold text-blue-500">{user.firstName[0].toUpperCase()}</span>
          </div>

          <div className="profile-details">
            <h1 className='profile-name'>
              {user.firstName} {user.lastName}
            </h1>
            <p className="profile-email">
              {user.email}
            </p>
          </div>
        </div>
      </section>

      <section className="banks">
        <div className="flex w-full justify-between">
          <h2 className="header-2">My Banks</h2>
          <Link href="/" className="flex gap-2">
            <Image 
               src="/icons/plus.svg"
              width={20}
              height={20}
              alt="plus"
            />
            <h2 className="text-14 font-semibold text-gray-600">
              Add Bank
            </h2>
          </Link>
        </div>

        {bankCards?.length > 0 && (
          <div className="relative flex flex-1 flex-col items-center justify-center gap-5">
            <div className='relative z-10 cursor-pointer' onClick={swapCards}>
              <BankCard 
                key={bankCards[0].$id}
                account={bankCards[0]}
                userName={`${user.firstName} ${user.lastName}`}
                showBalance={false}
                cardType={bankCards[0].cardType}
              />
            </div>
            {bankCards[1] && (
              <div className="absolute right-0 top-8 z-0 w-[90%] cursor-pointer" onClick={swapCards}>
                <BankCard 
                  key={bankCards[1].$id}
                  account={bankCards[1]}
                  userName={`${user.firstName} ${user.lastName}`}
                  showBalance={false}
                  cardType={bankCards[1].cardType}
                />
              </div>
            )}
          </div>
        )}

        <div className="mt-10 flex flex-1 flex-col gap-6">
          <h2 className="header-2">Top categories</h2>

          <div className='space-y-5'>
            {categories.map((category, index) => (
              <Category key={category.name} category={category} />
            ))}
          </div>
        </div>
      </section>
    </aside>
  )
}

export default RightSidebar;