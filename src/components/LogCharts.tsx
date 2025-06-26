import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Brush,
} from "recharts";

interface LevelStat {
  level: string;
  count: number;
  color: string;
}

interface TimeDataPoint {
  time: string;
  count: number;
}

interface LogChartsProps {
  timeData: TimeDataPoint[];
  levelStats: LevelStat[];
  isDarkMode: boolean;
}

export const LogCharts = ({
  timeData,
  levelStats,
  isDarkMode,
}: LogChartsProps) => {
  return (
    <div className="mb-8 grid gap-6 lg:grid-cols-2">
      <Card
        className={
          isDarkMode
            ? "bg-slate-800/50 border-slate-700"
            : "bg-white border-gray-200"
        }
      >
        <CardHeader>
          <CardTitle className={isDarkMode ? "text-white" : "text-gray-900"}>
            Log Frequency
          </CardTitle>
          <CardDescription
            className={isDarkMode ? "text-slate-400" : "text-gray-600"}
          >
            Logs over time (Last 24 Hours)
          </CardDescription>
        </CardHeader>
        <CardContent className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={timeData}>
              <CartesianGrid
                strokeDasharray="3 3"
                stroke={isDarkMode ? "#475569" : "#e5e7eb"}
              />
              <XAxis
                dataKey="time"
                stroke={isDarkMode ? "#94a3b8" : "#6b7280"}
              />
              <YAxis stroke={isDarkMode ? "#94a3b8" : "#6b7280"} />
              <Tooltip
                contentStyle={{
                  backgroundColor: isDarkMode ? "#1e293b" : "#ffffff",
                  border: `1px solid ${isDarkMode ? "#475569" : "#d1d5db"}`,
                  color: isDarkMode ? "#f1f5f9" : "#111827",
                }}
              />
              <Brush
                dataKey="time"
                height={30}
                stroke={isDarkMode ? "#3b82f6" : "#2563eb"}
              />
              <Bar dataKey="count" fill="#3b82f6" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card
        className={
          isDarkMode
            ? "bg-slate-800/50 border-slate-700"
            : "bg-white border-gray-200"
        }
      >
        <CardHeader>
          <CardTitle className={isDarkMode ? "text-white" : "text-gray-900"}>
            Log Level Distribution
          </CardTitle>
          <CardDescription
            className={isDarkMode ? "text-slate-400" : "text-gray-600"}
          >
            Current breakdown
          </CardDescription>
        </CardHeader>
        <CardContent className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={levelStats}
                cx="50%"
                cy="50%"
                innerRadius={25}
                outerRadius={100}
                dataKey="count"
                nameKey="level"
              >
                {levelStats.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: isDarkMode ?"#ffffff":"#1e293b",
                  border: `1px solid ${isDarkMode ? "#475569" : "#d1d5db"}`,
                  color: isDarkMode ? "#f1f5f9" : "#111827",
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
};
