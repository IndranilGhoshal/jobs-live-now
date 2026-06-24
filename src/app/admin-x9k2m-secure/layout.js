import AdminLayoutClient from "../_component/AdminLayoutClient";
export const metadata = {
  title: "Admin Panel",
  description: "Restricted Administrator Area",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
};
export default function AdminLayout({ children }) {
    return (
    <AdminLayoutClient>
      {children}
    </AdminLayoutClient>
  );
}