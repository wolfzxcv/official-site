export const openChatWindow = () => {
  if (process.browser) {
    // Client-side-only code
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    // (window as any).LC_API?.open_chat_window();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).LiveChatWidget.call('maximize');
    return false;
  } else {
    return false;
  }
};
