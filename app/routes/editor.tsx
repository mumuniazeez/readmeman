import { Outlet } from "react-router";
import { Toaster } from "sonner";

function EditorLayout() {
  return (
    <>
      <Outlet />
      <Toaster richColors />
    </>
  );
}

export default EditorLayout;
