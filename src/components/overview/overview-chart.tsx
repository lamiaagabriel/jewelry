"use client"
import { FC } from "react"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

type OverviewChartProps = { data: { name: string; total: number }[] }
const OverviewChart: FC<OverviewChartProps> = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <XAxis
          dataKey="name"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value: any) => `$${value}`}
        />
        <Bar dataKey="total" fill="#adfa1d" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}
export default OverviewChart
