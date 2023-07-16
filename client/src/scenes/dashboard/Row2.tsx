import React from 'react'
import DashboardBox from '@/components/DashboardBox';
import OperationalExpenses from '@/charts/OperationalExpenses';
import CampaignAndTargets from '@/charts/CampaignAndTargets';
import ProductPricesAndExpenses from '@/charts/ProductPricesAndExpenses';

type Props = {}

const Row2 = (props: Props) => {
  return (
    <>
      <DashboardBox gridArea="d">
        <OperationalExpenses />
      </DashboardBox>
      <DashboardBox gridArea="e">
        <CampaignAndTargets />
      </DashboardBox>
      <DashboardBox gridArea="f">
        <ProductPricesAndExpenses />
      </DashboardBox>
    </>
  )
}

export default Row2