import type {FunctionComponent} from "react";
import {
  type ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent
} from "@/components/ui/chart.tsx";
import {Bar, BarChart, CartesianGrid, XAxis} from "recharts";
import { Card, CardDescription, CardTitle, CardHeader, CardContent } from "../ui/card";
import {endOfWeek, format, startOfWeek} from "date-fns";
import type {NameType} from "recharts/types/component/DefaultTooltipContent";

const chartData = [
  { day: "Montag", occupiedSingle: 2, occupiedDouble: 3, occupiedApartment: 1 },
  { day: "Dienstag", occupiedSingle: 3, occupiedDouble: 3, occupiedApartment: 1 },
  { day: "Mittwoch", occupiedSingle: 3, occupiedDouble: 5, occupiedApartment: 1 },
  { day: "Donnerstag", occupiedSingle: 3, occupiedDouble: 6, occupiedApartment: 1 },
  { day: "Freitag", occupiedSingle: 1, occupiedDouble: 6, occupiedApartment: 0 },
  { day: "Samstag", occupiedSingle: 1, occupiedDouble: 2, occupiedApartment: 0 },
  { day: "Sonntag", occupiedSingle: 2, occupiedDouble: 2, occupiedApartment: 0 },
]

const chartConfig = {
  occupiedSingle: {
    label: "Einzelzimmer",
    color: "var(--chart-1)",
  },
  occupiedDouble: {
    label: "Doppelzimmer",
    color: "var(--chart-2)",
  },
  occupiedApartment: {
    label: "Ferienwohnung",
    color: "var(--chart-3)",
  },
} satisfies ChartConfig

const getWeekDates = () => {
  const now = new Date()
  const weekStart = startOfWeek(now, { weekStartsOn: 1 })
  const weekEnd = endOfWeek(now, { weekStartsOn: 1 })
  return `${format(weekStart, "dd.MM.yyyy")} - ${format(weekEnd, "dd.MM.yyyy")}`;
}

const getTotal = (name: NameType) => {
  switch (name) {
    case "occupiedSingle": {
      return 3
    }
    case "occupiedDouble": {
      return 7
    }
    case "occupiedApartment": {
      return 1
    }
    default: {
      return 0
    }
  }
}

interface BookingsWeekProps {
  className?: string,
}

export const BookingsWeek: FunctionComponent<BookingsWeekProps> = ({className}) => {
  return (
    <Card className={`flex flex-col gap-0 ${className}`}>
      <CardHeader className="items-center pb-0">
        <CardTitle>Belegung Woche</CardTitle>
        <CardDescription>{getWeekDates()}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer config={chartConfig} className="min-h-[200px] max-h-[200px] w-full">
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="day"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 2)}
            />
            <ChartLegend className="flex-wrap gap-y-1" content={<ChartLegendContent />} />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent
                indicator="dashed"
                formatter={(value, name) => (
                  <div className="text-muted-foreground flex min-w-[130px] items-center text-xs">
                    {chartConfig[name as keyof typeof chartConfig]?.label ||
                      name}
                    <div className="text-foreground ml-auto flex items-baseline gap-0.5 font-mono font-medium tabular-nums">
                      {value}
                      <span className="text-muted-foreground font-normal">
                          / {getTotal(name)}
                        </span>
                    </div>
                  </div>
                  )}
              />}
            />
            <Bar stackId="a" dataKey="occupiedSingle" fill="var(--color-occupiedSingle)" />
            <Bar stackId="a" dataKey="occupiedDouble" fill="var(--color-occupiedDouble)" />
            <Bar stackId="a" dataKey="occupiedApartment" fill="var(--color-occupiedApartment)" />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
