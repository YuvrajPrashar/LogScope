import { Header } from "@/components/Header";
import { StatsDashboard } from "@/components/StatsDashboard";
import { LogCharts } from "@/components/LogCharts";
import { KeyValueStats } from "@/components/KeyValueStats";
import { LogFilters } from "@/components/LogFilters";
import { LogTable } from "@/components/LogTable";
import { useLogFilters } from "@/hooks/useLogFilters";
import { useTheme } from "@/hooks/useTheme";
import { mockLogs, timeData } from "@/model";

const Logs = () => {
  const { isDarkMode, setIsDarkMode } = useTheme();
  const {
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
    setSearchTerm,
    setLevelFilter,
    setKeyFilter,
    setSortOrder,
    setShowFlaggedOnly,
    toggleFlag,
    toggleExpand,
  } = useLogFilters(mockLogs);

  return (
    <div
      className={`min-h-screen transition-colors ${
        isDarkMode ? "bg-slate-900 text-slate-100" : "bg-gray-50 text-gray-900"
      }`}
    >
      <Header
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        isDarkMode={isDarkMode}
        onThemeToggle={setIsDarkMode}
      />

      <div className="container mx-auto px-6 py-8">
        <StatsDashboard
          totalLogs={logs.length}
          levelStats={levelStats}
          isDarkMode={isDarkMode}
        />

        <LogCharts
          timeData={timeData}
          levelStats={levelStats}
          isDarkMode={isDarkMode}
        />

        <KeyValueStats keyValueStats={keyValueStats} isDarkMode={isDarkMode} />

        <LogFilters
          levelFilter={levelFilter}
          onLevelFilterChange={setLevelFilter}
          keyFilter={keyFilter}
          onKeyFilterChange={setKeyFilter}
          sortOrder={sortOrder}
          onSortOrderChange={setSortOrder}
          showFlaggedOnly={showFlaggedOnly}
          onShowFlaggedOnlyChange={setShowFlaggedOnly}
          isDarkMode={isDarkMode}
        />

        <LogTable
          logs={filteredLogs}
          expandedLog={expandedLog}
          onToggleExpand={toggleExpand}
          onToggleFlag={toggleFlag}
          isDarkMode={isDarkMode}
        />
      </div>
    </div>
  );
};

export default Logs;
