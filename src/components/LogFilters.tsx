import { ArrowUpDown, Flag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface LogFiltersProps {
  levelFilter: string;
  onLevelFilterChange: (value: string) => void;
  keyFilter: string;
  onKeyFilterChange: (value: string) => void;
  sortOrder: "asc" | "desc";
  onSortOrderChange: (order: "asc" | "desc") => void;
  showFlaggedOnly: boolean;
  onShowFlaggedOnlyChange: (show: boolean) => void;
  isDarkMode: boolean;
}

export const LogFilters = ({
  levelFilter,
  onLevelFilterChange,
  keyFilter,
  onKeyFilterChange,
  sortOrder,
  onSortOrderChange,
  showFlaggedOnly,
  onShowFlaggedOnlyChange,
  isDarkMode,
}: LogFiltersProps) => {
  return (
    <Card
      className={`mb-6 ${
        isDarkMode
          ? "bg-slate-800/50 border-slate-700"
          : "bg-white border-gray-200"
      }`}
    >
      <CardHeader>
        <CardTitle className={isDarkMode ? "text-white" : "text-gray-900"}>
          Filters
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-4">
          <div className="flex-1 min-w-48">
            <label
              className={`text-sm font-medium mb-2 block ${
                isDarkMode ? "text-slate-400" : "text-gray-600"
              }`}
            >
              Level
            </label>
            <Select value={levelFilter} onValueChange={onLevelFilterChange}>
              <SelectTrigger
                className={
                  isDarkMode
                    ? "bg-slate-700/50 border-slate-600 text-slate-100"
                    : "bg-white border-gray-300 text-gray-900"
                }
              >
                <SelectValue placeholder="Select level" />
              </SelectTrigger>
              <SelectContent
                className={
                  isDarkMode
                    ? "bg-slate-800 border-slate-600"
                    : "bg-white border-gray-200"
                }
              >
                <SelectItem
                  value="all"
                  className={isDarkMode ? "text-slate-100" : "text-gray-900"}
                >
                  All Levels
                </SelectItem>
                <SelectItem
                  value="INFO"
                  className={isDarkMode ? "text-slate-100" : "text-gray-900"}
                >
                  INFO
                </SelectItem>
                <SelectItem
                  value="WARN"
                  className={isDarkMode ? "text-slate-100" : "text-gray-900"}
                >
                  WARN
                </SelectItem>
                <SelectItem
                  value="ERROR"
                  className={isDarkMode ? "text-slate-100" : "text-gray-900"}
                >
                  ERROR
                </SelectItem>
                <SelectItem
                  value="DEBUG"
                  className={isDarkMode ? "text-slate-100" : "text-gray-900"}
                >
                  DEBUG
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex-1 min-w-48">
            <label
              className={`text-sm font-medium mb-2 block ${
                isDarkMode ? "text-slate-400" : "text-gray-600"
              }`}
            >
              Key Filter
            </label>
            <Input
              placeholder="Filter by key..."
              value={keyFilter}
              onChange={(e) => onKeyFilterChange(e.target.value)}
              className={
                isDarkMode
                  ? "bg-slate-700/50 border-slate-600 text-slate-100 placeholder-slate-400"
                  : "bg-white border-gray-300 text-gray-900 placeholder-gray-400"
              }
            />
          </div>

          <div className="flex items-end space-x-2">
            <Button
              variant={sortOrder === "desc" ? "default" : "outline"}
              onClick={() =>
                onSortOrderChange(sortOrder === "desc" ? "asc" : "desc")
              }
              className={
                sortOrder === "desc"
                  ? "bg-blue-600 hover:bg-blue-700 text-white border-blue-600"
                  : ""
              }
            >
              <ArrowUpDown className="h-4 w-4 mr-2" />
              {sortOrder === "desc" ? "Newest First" : "Oldest First"}
            </Button>

            <Button
              variant={showFlaggedOnly ? "default" : "outline"}
              onClick={() => onShowFlaggedOnlyChange(!showFlaggedOnly)}
              className={
                showFlaggedOnly
                  ? "bg-yellow-600 hover:bg-yellow-700 text-white"
                  : ""
              }
            >
              <Flag className="h-4 w-4 mr-2" />
              {showFlaggedOnly ? "Show All" : "Flagged Only"}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
