import type {FunctionComponent} from "react";
import {type ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent} from "@/components/ui/chart.tsx";
import {Pie, PieChart} from "recharts";
import { Card, CardDescription, CardTitle, CardHeader, CardContent } from "../ui/card";

const chartConfig = {
  rate: {
    label: "Rate in %",
  },
  occupied: {
    label: "Belegt",
    color: "var(--chart-1)", // e.g. green
  },
  available: {
    label: "Frei",
    color: "var(--chart-2)", // e.g. gray
  },
} satisfies ChartConfig


const chartData = [
  { status: "available", rate: 25, fill: "var(--color-available)" },
  { status: "occupied", rate: 75, fill: "var(--color-occupied)" },
]

export const BookingsToday: FunctionComponent = () => {
  return (
    <Card className="flex flex-col gap-0">
      <CardHeader className="items-center pb-0">
        <CardTitle>Belegung Heute</CardTitle>
        <CardDescription>{new Date().toLocaleDateString()}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="rate"
              nameKey="status"
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
