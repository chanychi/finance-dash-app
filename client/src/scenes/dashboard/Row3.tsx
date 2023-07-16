import React from 'react'
import DashboardBox from '@/components/DashboardBox';
import ProductList from '@/charts/ProductList';
import RecentOrders from '@/charts/RecentOrders';
import ExpenseByCategory from '@/charts/ExpenseByCategory';
import Summary from '@/charts/Summary';

type Props = {}

const Row3 = (props: Props) => {
  return (
    <>
      <DashboardBox gridArea="g">
        <ProductList />
      </DashboardBox>
      <DashboardBox gridArea="h">
        <RecentOrders />
      </DashboardBox>
      <DashboardBox gridArea="i">
        <ExpenseByCategory />
      </DashboardBox>
      <DashboardBox gridArea="j">
        <Summary />
      </DashboardBox>
    </>
  )
}

export default Row3