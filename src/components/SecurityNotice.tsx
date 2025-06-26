interface SecurityNoticeProps {
  isDarkMode: boolean;
}

export const SecurityNotice = ({ isDarkMode }: SecurityNoticeProps) => {
  return (
    <div
      className={`mt-6 text-center text-sm ${
        isDarkMode ? "text-slate-400" : "text-gray-600"
      }`}
    >
      <p>
        Your uploaded files are processed locally and securely. No data is
        stored on our servers.
      </p>
    </div>
  );
};
