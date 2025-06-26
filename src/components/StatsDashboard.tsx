import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface LevelStat {
  level: string;
  count: number;
  color: string;
}

interface StatsDashboardProps {
  totalLogs: number;
  levelStats: LevelStat[];
  isDarkMode: boolean;
}

export const StatsDashboard = ({
  totalLogs,
  levelStats,
  isDarkMode,
}: StatsDashboardProps) => {
  return (
    <div className="mb-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      <Card
        className={
          isDarkMode
            ? "bg-slate-800/50 border-slate-700"
            : "bg-white border-gray-200"
        }
      >
        <CardHeader className="pb-2">
          <CardTitle
            className={`text-sm font-medium ${
              isDarkMode ? "text-slate-400" : "text-gray-600"
            }`}
          >
            Total Logs
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div
            className={`text-2xl font-bold ${
              isDarkMode ? "text-white" : "text-gray-900"
            }`}
          >
            {totalLogs}
          </div>
        </CardContent>
      </Card>

      {levelStats.map(({ level, count }) => (
        <Card
          key={level}
          className={
            isDarkMode
              ? "bg-slate-800/50 border-slate-700"
              : "bg-white border-gray-200"
          }
        >
          <CardHeader className="pb-2">
            <CardTitle
              className={`text-sm font-medium ${
                isDarkMode ? "text-slate-400" : "text-gray-600"
              }`}
            >
              {level}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div
              className={`text-2xl font-bold ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}
            >
              {count}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
