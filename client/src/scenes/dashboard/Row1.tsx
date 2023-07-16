import DashboardBox from '@/components/DashboardBox';
import RevenueAndExpenses from '@/charts/RevenueAndExpenses';
import ProfitAndRevenue from '@/charts/ProfitAndRevenue';
import MonthlyRevenue from '@/charts/MonthlyRevenue';

type Props = {}
const Row1 = (props: Props) => {

    return (
      <>
        <DashboardBox gridArea="a">
          <RevenueAndExpenses />
        </DashboardBox>
        <DashboardBox gridArea="b">
          <ProfitAndRevenue />
        </DashboardBox>
        <DashboardBox gridArea="c">
          <MonthlyRevenue />
        </DashboardBox>
      </>
  )
}

export default Row1