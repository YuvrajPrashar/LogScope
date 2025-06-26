import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface KeyValueStat {
  pair: string;
  count: number;
}

interface KeyValueStatsProps {
  keyValueStats: KeyValueStat[];
  isDarkMode: boolean;
}

export const KeyValueStats = ({
  keyValueStats,
  isDarkMode,
}: KeyValueStatsProps) => {
  return (
    <Card
      className={`mb-8 ${
        isDarkMode
          ? "bg-slate-800/50 border-slate-700"
          : "bg-white border-gray-200"
      }`}
    >
      <CardHeader>
        <CardTitle className={isDarkMode ? "text-white" : "text-gray-900"}>
          Most Frequent Logs
        </CardTitle>
        <CardDescription
          className={isDarkMode ? "text-slate-400" : "text-gray-600"}
        >
          Top 5 most common key:value pairs in logs
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {keyValueStats.map(({ pair, count }) => (
            <div
              key={pair}
              className={`flex items-center justify-between p-2 rounded ${
                isDarkMode ? "bg-slate-700/30" : "bg-gray-100"
              }`}
            >
              <span className={isDarkMode ? "text-slate-300" : "text-gray-700"}>
                {pair}
              </span>
              <Badge
                variant="secondary"
                className={
                  isDarkMode
                    ? "bg-blue-500/20 text-blue-300"
                    : "bg-blue-100 text-blue-700"
                }
              >
                {count} occurrences
              </Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
