import React from "react";
import { BarChart3, Clock, Eye, Flag } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { LogEntry } from "@/model";

interface LogTableProps {
  logs: LogEntry[];
  expandedLog: string | null;
  onToggleExpand: (logId: string) => void;
  onToggleFlag: (logId: string) => void;
  isDarkMode: boolean;
}

export const LogTable = ({
  logs,
  expandedLog,
  onToggleExpand,
  onToggleFlag,
  isDarkMode,
}: LogTableProps) => {
  const getLevelColor = (level: string) => {
    switch (level) {
      case "INFO":
        return "bg-blue-500";
      case "WARN":
        return "bg-yellow-500";
      case "ERROR":
        return "bg-red-500";
      case "DEBUG":
        return "bg-purple-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <Card
      className={
        isDarkMode
          ? "bg-slate-800/50 border-slate-700"
          : "bg-white border-gray-200"
      }
    >
      <CardHeader>
        <CardTitle className={isDarkMode ? "text-white" : "text-gray-900"}>
          Logs
        </CardTitle>
        <CardDescription
          className={isDarkMode ? "text-slate-400" : "text-gray-600"}
        >
          View, filter, and analyze logs from your applications and services.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow
                className={isDarkMode ? "border-slate-600" : "border-gray-200"}
              >
                <TableHead
                  className={isDarkMode ? "text-slate-300" : "text-gray-700"}
                >
                  Timestamp
                </TableHead>
                <TableHead
                  className={isDarkMode ? "text-slate-300" : "text-gray-700"}
                >
                  Level
                </TableHead>
                <TableHead
                  className={isDarkMode ? "text-slate-300" : "text-gray-700"}
                >
                  Message
                </TableHead>
                <TableHead
                  className={isDarkMode ? "text-slate-300" : "text-gray-700"}
                >
                  Key:Value
                </TableHead>
                <TableHead
                  className={isDarkMode ? "text-slate-300" : "text-gray-700"}
                >
                  Actions
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {logs.map((log) => (
                <React.Fragment key={log.id}>
                  <TableRow
                    className={`${
                      isDarkMode
                        ? "border-slate-600 hover:bg-slate-700/30"
                        : "border-gray-200 hover:bg-gray-50"
                    } transition-colors`}
                  >
                    <TableCell
                      className={`font-mono text-sm ${
                        isDarkMode ? "text-slate-300" : "text-gray-600"
                      }`}
                    >
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4" />
                        <span>{log.timestamp}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge
                        className={`${getLevelColor(log.level)} text-white`}
                      >
                        {log.level}
                      </Badge>
                    </TableCell>
                    <TableCell
                      className={`max-w-md ${
                        isDarkMode ? "text-slate-100" : "text-gray-900"
                      }`}
                    >
                      <div className="truncate">{log.message}</div>
                    </TableCell>
                    <TableCell>
                      {log.key && log.value && (
                        <Badge
                          variant="outline"
                          className={
                            isDarkMode
                              ? "border-slate-500 text-slate-300"
                              : "border-gray-300 text-gray-700"
                          }
                        >
                          {log.key}: {log.value}
                        </Badge>
                      )}
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => onToggleFlag(log.id)}
                          className={
                            log.isFlagged
                              ? "text-yellow-400 hover:text-yellow-300"
                              : `${
                                  isDarkMode
                                    ? "text-slate-400 hover:text-slate-300"
                                    : "text-gray-400 hover:text-gray-600"
                                }`
                          }
                        >
                          <Flag
                            className="h-4 w-4"
                            fill={log.isFlagged ? "currentColor" : "none"}
                          />
                        </Button>

                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => onToggleExpand(log.id)}
                          className={
                            isDarkMode
                              ? "text-slate-400 hover:text-slate-300"
                              : "text-gray-400 hover:text-gray-600"
                          }
                        >
                          <Eye className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>

                  {expandedLog === log.id && log.details && (
                    <TableRow
                      className={
                        isDarkMode ? "border-slate-600" : "border-gray-200"
                      }
                    >
                      <TableCell
                        colSpan={5}
                        className={`${
                          isDarkMode ? "bg-slate-800/50" : "bg-gray-50"
                        } p-4`}
                      >
                        <div>
                          <h4
                            className={`text-sm font-medium mb-2 ${
                              isDarkMode ? "text-slate-300" : "text-gray-700"
                            }`}
                          >
                            Details:
                          </h4>
                          <p
                            className={`text-sm font-mono p-3 rounded ${
                              isDarkMode
                                ? "text-slate-400 bg-slate-900/50"
                                : "text-gray-600 bg-white"
                            }`}
                          >
                            {log.details}
                          </p>
                        </div>
                      </TableCell>
                    </TableRow>
                  )}
                </React.Fragment>
              ))}

              {logs.length === 0 && (
                <TableRow>
                  <TableCell colSpan={5} className="text-center py-12">
                    <div
                      className={
                        isDarkMode ? "text-slate-400" : "text-gray-500"
                      }
                    >
                      <BarChart3 className="h-12 w-12 mx-auto mb-4 opacity-50" />
                      <p>No logs found matching your criteria.</p>
                    </div>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
};
