export interface LogEntry {
  id: string;
  timestamp: string;
  level: "INFO" | "WARN" | "ERROR" | "DEBUG";
  message: string;
  key?: string;
  value?: string;
  isFlagged: boolean;
  details?: string;
}

export const mockLogs: LogEntry[] = [
  {
    id: "1",
    timestamp: "2024-01-26 14:30:00",
    level: "INFO",
    message: "Application started successfully",
    key: "status",
    value: "started",
    isFlagged: false,
    details:
      "Application initialization completed with all services running normally.",
  },
  {
    id: "2",
    timestamp: "2024-01-26 14:31:00",
    level: "WARN",
    message: "High CPU usage detected",
    key: "cpu_usage",
    value: "85%",
    isFlagged: true,
    details:
      "CPU usage has exceeded the threshold of 80%. Consider optimizing processes.",
  },
  {
    id: "3",
    timestamp: "2024-01-26 14:32:00",
    level: "ERROR",
    message: "Database connection failed",
    key: "db_status",
    value: "failed",
    isFlagged: true,
    details:
      "Failed to establish connection to primary database. Attempting failover to secondary instance.",
  },
  {
    id: "4",
    timestamp: "2024-01-26 14:33:00",
    level: "INFO",
    message: "User logged in: user789",
    key: "user_action",
    value: "login",
    isFlagged: false,
    details:
      "User authentication successful. Session created with 2-hour expiration.",
  },
  {
    id: "5",
    timestamp: "2024-01-26 14:34:00",
    level: "DEBUG",
    message: "Request received: /api/users",
    key: "endpoint",
    value: "/api/users",
    isFlagged: false,
    details: "GET request to user endpoint with valid authentication token.",
  },
  {
    id: "6",
    timestamp: "2024-01-26 14:35:00",
    level: "ERROR",
    message: "Payment processing failed",
    key: "payment_status",
    value: "failed",
    isFlagged: true,
    details:
      "Payment gateway returned error code 502. Transaction rolled back successfully.",
  },
  {
    id: "7",
    timestamp: "2024-01-26 14:36:00",
    level: "INFO",
    message: "Cache cleared successfully",
    key: "cache_action",
    value: "cleared",
    isFlagged: false,
    details: "Application cache purged. Memory usage reduced by 40%.",
  },
  {
    id: "8",
    timestamp: "2024-01-26 14:37:00",
    level: "WARN",
    message: "Disk space running low",
    key: "disk_usage",
    value: "92%",
    isFlagged: true,
    details:
      "Available disk space is below 10%. Consider cleanup or expansion.",
  },
];

export const timeData = [
  { time: "12AM", count: 45 },
  { time: "3AM", count: 32 },
  { time: "6AM", count: 78 },
  { time: "9AM", count: 156 },
  { time: "12PM", count: 203 },
  { time: "3PM", count: 189 },
  { time: "6PM", count: 134 },
  { time: "9PM", count: 87 },
];
