import { useState, useMemo } from "react";
import type { LogEntry } from "@/model";

export const useLogFilters = (initialLogs: LogEntry[]) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [levelFilter, setLevelFilter] = useState<string>("all");
  const [keyFilter, setKeyFilter] = useState("");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");
  const [showFlaggedOnly, setShowFlaggedOnly] = useState(false);
  const [expandedLog, setExpandedLog] = useState<string | null>(null);
  const [logs, setLogs] = useState<LogEntry[]>(initialLogs);

  const filteredLogs = useMemo(() => {
    const filtered = logs.filter((log) => {
      const matchesSearch =
        log.message.toLowerCase().includes(searchTerm.toLowerCase()) ||
        log.key?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        log.value?.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesLevel = levelFilter === "all" || log.level === levelFilter;
      const matchesKey = !keyFilter || log.key?.includes(keyFilter);
      const matchesFlagged = !showFlaggedOnly || log.isFlagged;

      return matchesSearch && matchesLevel && matchesKey && matchesFlagged;
    });

    return filtered.sort((a, b) => {
      const dateA = new Date(a.timestamp);
      const dateB = new Date(b.timestamp);
      return sortOrder === "asc"
        ? dateA.getTime() - dateB.getTime()
        : dateB.getTime() - dateA.getTime();
    });
  }, [logs, searchTerm, levelFilter, keyFilter, sortOrder, showFlaggedOnly]);

  const levelStats = useMemo(() => {
    const stats = logs.reduce((acc, log) => {
      acc[log.level] = (acc[log.level] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    return Object.entries(stats).map(([level, count]) => ({
      level,
      count,
      color:
        level === "INFO"
          ? "#3b82f6"
          : level === "WARN"
          ? "#eab308"
          : level === "ERROR"
          ? "#ef4444"
          : "#8b5cf6",
    }));
  }, [logs]);

  const keyValueStats = useMemo(() => {
    const stats = logs.reduce((acc, log) => {
      if (log.key && log.value) {
        const pair = `${log.key}:${log.value}`;
        acc[pair] = (acc[pair] || 0) + 1;
      }
      return acc;
    }, {} as Record<string, number>);

    return Object.entries(stats)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 5)
      .map(([pair, count]) => ({ pair, count }));
  }, [logs]);

  const toggleFlag = (logId: string) => {
    setLogs((prevLogs) =>
      prevLogs.map((log) =>
        log.id === logId ? { ...log, isFlagged: !log.isFlagged } : log
      )
    );
  };

  const toggleExpand = (logId: string) => {
    setExpandedLog(expandedLog === logId ? null : logId);
  };

  return {
    // State
    searchTerm,
    levelFilter,
    keyFilter,
    sortOrder,
    showFlaggedOnly,
    expandedLog,
    logs,
    filteredLogs,
    levelStats,
    keyValueStats,

    // Actions
    setSearchTerm,
    setLevelFilter,
    setKeyFilter,
    setSortOrder,
    setShowFlaggedOnly,
    toggleFlag,
    toggleExpand,
  };
};
